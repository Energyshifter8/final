import type { LabEntry } from "@/types";

export const labEntries: LabEntry[] = [
	{
		title: "Scroll-linked SVG line drawing",
		description:
			"A GSAP + ScrollTrigger experiment animating stroke-dashoffset on an SVG path as the user scrolls, without layout thrashing.",
		href: "https://codepen.io/example/pen/scroll-line-draw",
		date: "2026-06-12",
	},
	{
		title: "Notes on the View Transitions API in Next.js",
		description:
			"A short write-up on wiring the native View Transitions API into App Router navigations without a routing library.",
		href: "https://github.com/example/notes/view-transitions-next",
		date: "2026-05-28",
	},
	{
		title: "Variable font weight on hover",
		description:
			"Testing whether animating font-variation-settings on hover reads as playful or just distracting for heading type.",
		href: "https://codepen.io/example/pen/variable-font-hover",
		date: "2026-04-03",
	},
];
