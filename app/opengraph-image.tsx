import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Levent Kopuz — Product Innovation & Experience";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f1e6d5",
          color: "#151514",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: "62%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 54px 52px 62px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.12em",
              fontWeight: 700,
            }}
          >
            LEVENT KOPUZ
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 30,
                fontSize: 18,
                letterSpacing: "0.1em",
                color: "#746a5d",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#ff4b24",
                }}
              />
              PRODUCT · EXPERIENCE · INNOVATION
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 66,
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 700,
              }}
            >
              Product Innovation
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 66,
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 700,
                color: "#ff4b24",
              }}
            >
              & Experience
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              fontSize: 18,
              letterSpacing: "0.08em",
              color: "#2a241e",
            }}
          >
            BUILD · ENABLE · CONNECT
          </div>
        </div>

        <div
          style={{
            width: "38%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            background: "#1593cf",
          }}
        >
          <img
            src="https://leventkopuz.vercel.app/images/levent-color.webp"
            alt=""
            width="456"
            height="630"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
