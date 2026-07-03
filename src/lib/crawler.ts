import * as cheerio from 'cheerio';

export type CategoryType = "ROM" | "Kernel" | "Recovery" | "Firmware" | "Other";

export interface Release {
  id: string;
  projectName: string;
  androidVersion: string;
  releaseVersion: string;
  date: string;
  size: string;
  downloads: number;
  buildType: "Vanilla" | "GApps" | "Unknown";
  maintainer: string;
  tags: string[];
  officialSFLink: string;
  category: CategoryType;
  folderName: string;
}

export interface Category {
  id: string;
  title: string;
  releases: Release[];
}
function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
function parseBuildType(filename: string): "Vanilla" | "GApps" | "Unknown" {
  const lower = filename.toLowerCase();
  if (lower.includes("gapps") || lower.includes("gms") || lower.includes("core")) return "GApps";
  if (lower.includes("vanilla")) return "Vanilla";
  return "Unknown";
}
function determineCategory(folder: string): CategoryType {
  const lower = folder.toLowerCase();
  if (lower.includes("recovery")) return "Recovery";
  if (lower.includes("southwest") || lower.includes("kernel")) return "Kernel";
  if (lower.includes("firmware")) return "Firmware";
  if (lower === "bkl" || lower === "a13" || lower.includes("dodge-test")) return "ROM";
  return "Other";
}
function extractProjectName(filename: string, category: CategoryType): string {
  if (category === "Kernel") {
    if (filename.toLowerCase().includes("southwest")) return "SouthWest Kernel";
    return "Custom Kernel";
  }
  if (category === "Recovery") {
    if (filename.toLowerCase().includes("orangefox")) return "OrangeFox";
    if (filename.toLowerCase().includes("twrp")) return "TWRP";
    return "Recovery";
  }
  const match = filename.match(/^([A-Za-z0-9_]+)/);
  if (match) {
    let name = match[1];
    if (name.toLowerCase() === "crdroidandroid") return "crDroid";
    if (name.toLowerCase() === "superioros") return "SuperiorOS";
    return name;
  }
  return "Unknown Project";
}
function extractAndroidVersion(folder: string, filename: string): string {
  const lowerFolder = folder.toLowerCase();
  if (lowerFolder === "bkl") return "16";
  if (lowerFolder === "vic") return "15";
  if (lowerFolder === "a13") return "13";
  if (lowerFolder === "a14") return "14";
  if (filename.includes("16.0")) return "16";
  if (filename.includes("15.0")) return "15";
  if (filename.includes("14.0")) return "14";
  
  return "Unknown";
}
export async function fetchSourceForgeReleases(): Promise<Release[]> {
  const rssUrl = "https://sourceforge.net/projects/aosp-project-whyred/rss?path=/&limit=2000";
  
  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("Failed to fetch RSS");
    
    const xml = await response.text();
    const $ = cheerio.load(xml, { xmlMode: true });
    const releases: Release[] = [];

    $('item').each((_, element) => {
      const titleNode = $(element).find('title').text();
      const link = $(element).find('link').text();
      const pubDate = $(element).find('pubDate').text();
      const mediaContent = $(element).find('media\\:content, content');
      const fileSize = mediaContent.attr('filesize');
      const sizeStr = fileSize ? formatBytes(parseInt(fileSize, 10)) : "Unknown";
      const titlePath = titleNode.replace(/^[^/]*\//, '');
      const parts = titlePath.split('/').filter(Boolean);
      
      if (parts.length < 1) return;
      
      const filename = parts[parts.length - 1];
      if (filename.endsWith('.txt') || filename.endsWith('.md5') || filename.endsWith('.sha256')) return;

      const folder = parts.length > 1 ? parts[0] : "";
      
      const category = determineCategory(folder);
      const projectName = extractProjectName(filename, category);
      const androidVersion = extractAndroidVersion(folder, filename);
      const buildType = parseBuildType(filename);
      const versionMatch = filename.match(/v?(\d+\.\d+(\.\d+)?)/);
      const releaseVersion = versionMatch ? versionMatch[0] : "Unknown";
      
      const id = `${category}-${projectName}-${androidVersion}-${filename}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      releases.push({
        id,
        projectName,
        androidVersion,
        releaseVersion,
        date: new Date(pubDate).toISOString(),
        size: sizeStr,
        downloads: 0,
        buildType,
        maintainer: "Community",
        tags: [category, projectName, `A${androidVersion}`, buildType].filter(t => t !== "Unknown"),
        officialSFLink: link,
        category,
        folderName: folder || "Root",
      });
    });

    return releases;
  } catch (error) {
    console.error("Error fetching SourceForge releases:", error);
    return [];
  }
}
