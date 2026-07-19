import { NextResponse } from "next/server";
import { fetchGithubRepos } from "@/lib/github";

export async function GET() {
  try {
    const repos = await fetchGithubRepos();
    return NextResponse.json({ repos });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load repositories";
    return NextResponse.json({ repos: [], error: message }, { status: 502 });
  }
}
