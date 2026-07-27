import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rahul Jain - Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<div></div>, { ...size });
}
