import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rahul Jain - Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: 80,
          color: "#22C55E",
          margin: 0,
          fontWeight: "bold",
        }}
      >
        Rahul Jain
      </h1>
      <p
        style={{
          fontSize: 40,
          color: "#FFFFFF",
          marginTop: 20,
        }}
      >
        Backend-focused Fullstack Developer
      </p>
    </div>,
    { ...size },
  );
}
