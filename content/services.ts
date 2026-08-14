import type { ServiceItem } from "@/types";

export const servicesIntro =
	"A focused set of services spanning strategy, design, and front-end development — everything needed to take an idea from rough sketch to shipped product.";

export const serviceItems: ServiceItem[] = [
	{
		id: "1",
		code: "STR",
		title: "Strategy",
		primaryTags: ["Research", "Workshops"],
		secondaryTags: ["Personas", "Roadmapping"],
		fromLabel: "Problem",
		toLabel: "Direction",
	},
	{
		id: "2",
		code: "UXD",
		title: "UX Design",
		primaryTags: ["Wireframes", "User Flows"],
		secondaryTags: ["Usability Testing", "Journey Maps"],
		fromLabel: "Wireframe",
		toLabel: "Prototype",
	},
	{
		id: "3",
		code: "UID",
		title: "UI Design",
		primaryTags: ["Visual Design", "Design Systems"],
		secondaryTags: ["Iconography", "Illustration"],
		fromLabel: "Sketch",
		toLabel: "Pixel-Perfect",
	},
	{
		id: "4",
		code: "DEV",
		title: "Front-End Development",
		primaryTags: ["React", "Next.js"],
		secondaryTags: ["Accessibility", "Performance"],
		fromLabel: "Design",
		toLabel: "Production",
	},
	{
		id: "5",
		code: "BRD",
		title: "Brand Identity",
		primaryTags: ["Logo", "Guidelines"],
		secondaryTags: ["Voice & Tone", "Print"],
		fromLabel: "Concept",
		toLabel: "System",
	},
	{
		id: "6",
		code: "MOT",
		title: "Motion Design",
		primaryTags: ["Micro-interactions", "Scroll Animation"],
		secondaryTags: ["Prototyping", "Storyboards"],
		fromLabel: "Static",
		toLabel: "Alive",
	},
	{
		id: "7",
		code: "OPS",
		title: "Design Ops",
		primaryTags: ["Component Libraries", "Tokens"],
		secondaryTags: ["Documentation", "Handoff"],
		fromLabel: "Chaos",
		toLabel: "System",
	},
];
