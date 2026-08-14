"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { heroCopy } from "@/content/hero";

gsap.registerPlugin(useGSAP);

export function HeroText() {
	const containerRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const introRef = useRef<HTMLParagraphElement>(null);

	useGSAP(
		() => {
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

			if (prefersReducedMotion) return;

			gsap.from([headlineRef.current, introRef.current], {
				opacity: 0,
				y: 24,
				duration: 0.6,
				ease: "power3.out",
				stagger: 0.1,
			});
		},
		{ scope: containerRef },
	);

	return (
		<div ref={containerRef}>
			<h1
				ref={headlineRef}
				className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
			>
				{heroCopy.greeting}{" "}
				<strong className="text-accent">{heroCopy.name}</strong>
			</h1>
			<p ref={introRef} className="mt-6 max-w-xl text-lg text-muted-foreground">
				{heroCopy.intro}
			</p>
		</div>
	);
}
