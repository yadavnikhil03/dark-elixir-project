import { NextResponse } from "next/server";
import { fetchSourceForgeReleases } from "@/lib/crawler";

export const revalidate = 3600;

export async function GET() {
  try {
    const releases = await fetchSourceForgeReleases();
    return NextResponse.json(releases);
  } catch (error) {
    console.error("API error fetching releases:", error);
    return NextResponse.json({ error: "Failed to fetch releases" }, { status: 500 });
  }
}
