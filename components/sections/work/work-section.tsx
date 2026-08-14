"use client";

import { useEffect, useRef, useState } from "react";
import { WorkCard } from "@/components/sections/work/work-card";
import { workItems } from "@/content/work";

export function WorkSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const ratios = new Map<number, number>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const index = Number(entry.target.getAttribute("data-index"));
					ratios.set(index, entry.intersectionRatio);
				}

				let bestIndex = 0;
				let bestRatio = 0;
				for (const [index, ratio] of ratios) {
					if (ratio > bestRatio) {
						bestRatio = ratio;
						bestIndex = index;
					}
				}
				setActiveIndex(bestIndex);
			},
			{ threshold: [0, 0.25, 0.5, 0.75, 1] },
		);

		for (const card of container.querySelectorAll("[data-work-card]")) {
			observer.observe(card);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section id="work" className="px-6 py-24">
			<div className="mx-auto flex max-w-6xl flex-col gap-8">
				<div className="flex items-center justify-between">
					<h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
						Work
					</h2>
					<span className="font-heading text-sm text-muted-foreground tabular-nums">
						{String(activeIndex + 1).padStart(2, "0")} /{" "}
						{String(workItems.length).padStart(2, "0")}
					</span>
				</div>

				<div
					ref={containerRef}
					className="flex flex-col gap-6 md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:pb-4"
				>
					{workItems.map((item, index) => (
						<WorkCard key={item.slug} item={item} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
