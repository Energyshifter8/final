"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { prefersReducedMotion } from "@/lib/utils";
import type { WorkItem } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type WorkCardProps = {
	item: WorkItem;
	index: number;
};

export function WorkCard({ item, index }: WorkCardProps) {
	const cardRef = useRef<HTMLAnchorElement>(null);

	useGSAP(
		() => {
			if (prefersReducedMotion()) return;

			gsap.from(".work-card-tag", {
				opacity: 0,
				y: 12,
				duration: 0.4,
				ease: "power2.out",
				stagger: 0.08,
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
		<Link
			ref={cardRef}
			href={`/work/${item.slug}`}
			data-work-card
			data-index={index}
			aria-label={`View ${item.projectName} for ${item.clientName}`}
			className="flex w-full shrink-0 flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:w-[380px] md:snap-start"
		>
			<Badge className="w-fit bg-accent text-accent-foreground">
				{item.clientInitials}
			</Badge>

			<div className="flex flex-col gap-1">
				<p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
					Client
				</p>
				<p className="text-sm text-foreground">{item.clientName}</p>
				<h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
					{item.projectName}
				</h3>
			</div>

			<ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
				{item.tags.map((tag) => (
					<li
						key={tag}
						className="work-card-tag flex items-center gap-1 text-sm text-muted-foreground"
					>
						<ChevronRight className="size-3 text-accent" aria-hidden="true" />
						{tag}
					</li>
				))}
			</ul>
		</Link>
	);
}
