import { ImageResponse } from "next/og";
import { workItems } from "@/content/work";

export const alt = "Case study cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
	return workItems.map((item) => ({ slug: item.slug }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const item = workItems.find((work) => work.slug === slug);

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
					fontSize: 28,
					fontWeight: 600,
					color: "#4338ca",
				}}
			>
				{item?.clientName ?? "Temuulen"}
			</div>
			<div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
				{item?.projectName ?? "Case Study"}
			</div>
			{item && (
				<div style={{ display: "flex", fontSize: 28, color: "#6b6b6b" }}>
					{item.tags.join(" · ")}
				</div>
			)}
		</div>,
		{ ...size },
	);
}
