"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { scoreboardStats } from "@/content/scoreboard";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Scoreboard() {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const values = gsap.utils.toArray<HTMLElement>(".scoreboard-value");

			if (prefersReducedMotion()) {
				for (const el of values) {
					el.textContent = el.dataset.value ?? "0";
				}
				return;
			}

			ScrollTrigger.create({
				trigger: containerRef.current,
				start: "top 85%",
				once: true,
				onEnter: () => {
					for (const el of values) {
						const target = Number(el.dataset.value);
						const counter = { value: 0 };
						gsap.to(counter, {
							value: target,
							duration: 1.5,
							ease: "power1.out",
							onUpdate: () => {
								el.textContent = Math.round(counter.value).toString();
							},
						});
					}
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<div ref={containerRef} className="flex gap-12">
			{scoreboardStats.map((stat) => (
				<div key={stat.id} className="flex flex-col gap-1">
					<p className="font-heading text-4xl font-bold text-accent">
						<span aria-hidden="true">
							<span className="scoreboard-value" data-value={stat.value}>
								0
							</span>
							{stat.suffix}
						</span>
						<span className="sr-only">
							{stat.value}
							{stat.suffix}
						</span>
					</p>
					<p className="text-sm text-muted-foreground">{stat.label}</p>
				</div>
			))}
		</div>
	);
}
