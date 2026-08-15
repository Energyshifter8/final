import { ImageResponse } from "next/og";

export const alt = "Lab — Temuulen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: 24,
				padding: 96,
				background: "#faf9f4",
				color: "#171717",
			}}
		>
			<div
				style={{
					display: "flex",
					width: 64,
					height: 8,
					borderRadius: 9999,
					background: "#4338ca",
				}}
			/>
			<div style={{ display: "flex", fontSize: 80, fontWeight: 700 }}>Lab</div>
			<div style={{ display: "flex", fontSize: 32, color: "#6b6b6b" }}>
				One-off experiments, prototypes, and short write-ups
			</div>
		</div>,
		{ ...size },
	);
}
