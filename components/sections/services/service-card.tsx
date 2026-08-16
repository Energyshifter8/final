"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	ArrowRight,
	Code2,
	type LucideIcon,
	Sparkles,
	Webhook,
} from "lucide-react";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";
import type { ServiceItem } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CODE_ICONS: Record<string, LucideIcon> = {
	DEV: Code2,
	MOT: Sparkles,
	API: Webhook,
};

type ServiceCardProps = {
	item: ServiceItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
	const cardRef = useRef<HTMLElement>(null);
	const Icon = CODE_ICONS[item.code] ?? Sparkles;

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
			className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-10 -right-10 size-36 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
			/>

			<div className="flex items-center justify-between">
				<p className="font-heading text-5xl font-bold text-accent/25 transition-colors duration-300 group-hover:text-accent/40">
					{item.code}
				</p>
				<span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
					<Icon className="size-5" aria-hidden="true" />
				</span>
			</div>

			<div className="flex flex-col gap-4">
				<h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
					{item.title}
				</h3>

				<ul className="flex flex-wrap gap-2">
					{item.primaryTags.map((tag) => (
						<li
							key={tag}
							className="service-card-tag rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-foreground"
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

			<div className="mt-auto flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
				<span>{item.fromLabel}</span>
				<ArrowRight
					className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
					aria-hidden="true"
				/>
				<span className="font-medium text-foreground">{item.toLabel}</span>
			</div>
		</article>
	);
}
