"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";
import type { ServiceItem } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ServiceCardProps = {
	item: ServiceItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
	const cardRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (prefersReducedMotion()) return;

			gsap.from(".service-card-tag", {
				opacity: 0,
				y: 12,
				duration: 0.4,
				ease: "power2.out",
				stagger: 0.06,
				scrollTrigger: {
					trigger: cardRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: cardRef },
	);

	return (
		<article
			ref={cardRef}
			className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6"
		>
			<p className="font-heading text-5xl font-bold text-accent">{item.code}</p>

			<div className="flex flex-col gap-4">
				<h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
					{item.title}
				</h3>

				<ul className="flex flex-wrap gap-2">
					{item.primaryTags.map((tag) => (
						<li
							key={tag}
							className="service-card-tag rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
						>
							{tag}
						</li>
					))}
				</ul>

				<ul className="flex flex-wrap gap-x-3 gap-y-1">
					{item.secondaryTags.map((tag) => (
						<li
							key={tag}
							className="service-card-tag text-xs text-muted-foreground"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>

			<div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
				<span>{item.fromLabel}</span>
				<ArrowRight className="size-4 text-accent" aria-hidden="true" />
				<span>{item.toLabel}</span>
			</div>
		</article>
	);
}
