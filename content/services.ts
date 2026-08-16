import type { ServiceItem } from "@/types";

export const servicesIntro =
	"A focused set of skills spanning front-end development, motion design, and API integration — everything needed to turn a Figma file or a Swagger spec into a shipped product.";

export const serviceItems: ServiceItem[] = [
	{
		id: "1",
		code: "DEV",
		title: "Front-End Development",
		primaryTags: ["React", "Next.js"],
		secondaryTags: ["TypeScript", "Tailwind CSS", "Git", "GitHub"],
		fromLabel: "Design",
		toLabel: "Production",
	},
	{
		id: "2",
		code: "MOT",
		title: "Motion Design",
		primaryTags: ["GSAP", "ScrollTrigger"],
		secondaryTags: ["Figma Prototyping", "Micro-interactions"],
		fromLabel: "Static",
		toLabel: "Alive",
	},
	{
		id: "3",
		code: "API",
		title: "API Integration",
		primaryTags: ["Swagger / OpenAPI", "REST"],
		secondaryTags: ["Type-Safe Fetching", "Auth & Tokens"],
		fromLabel: "Swagger Docs",
		toLabel: "Live Data",
	},
];
