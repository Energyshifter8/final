import type { WorkItem } from "@/types";

export const workItems: WorkItem[] = [
	{
		id: "1",
		clientInitials: "ST",
		clientName: "Sysco&Tech",
		projectName: "Club Management Platform",
		tags: ["Next.js", "Firebase", "Full-Stack"],
		slug: "sysco-tech",
		summary:
			"A management system for my university's Sysco&Tech student club — task assignment, attendance tracking, and a real-time points leaderboard with role-based admin controls, built on Next.js and Firebase.",
		coverImageAlt: "Sysco&Tech dashboard with task list and points leaderboard",
		role: "Full-Stack Development",
		year: 2026,
		liveUrl: "https://sysco-app.vercel.app",
		githubUrl: "https://github.com/Energyshifter8/sysco_app",
	},
	{
		id: "2",
		clientInitials: "DD",
		clientName: "DevDreams",
		projectName: "AI-Powered Roadmap Platform",
		tags: ["Next.js", "AI / RAG", "Firebase"],
		slug: "devdreams",
		summary:
			"An interactive developer-roadmap platform covering Frontend, Backend, DevOps, and Mobile tracks, with an AI assistant that answers questions via RAG over Pinecone and Groq, plus voice input through Whisper. Fully bilingual in English and Mongolian.",
		coverImageAlt: "DevDreams interactive roadmap canvas with AI chat panel",
		role: "Full-Stack Development & AI Integration",
		year: 2026,
		liveUrl: "https://roadmap-theta-eosin.vercel.app",
		githubUrl: "https://github.com/Energyshifter8/roadmap",
	},
	{
		id: "3",
		clientInitials: "MX",
		clientName: "MindX Plus",
		projectName: "Recruitment & Survey Dashboard",
		tags: ["Next.js", "Dashboard", "TypeScript"],
		slug: "mindx-plus",
		summary:
			"An internal admin dashboard for managing talent-recruitment evaluations and candidate surveys — real-time stats, auto-refreshing data tables, and a dark, grid-textured UI system. Built as a private tool, so specifics stay under wraps.",
		coverImageAlt: "MindX Plus dashboard stat cards and data tables",
		role: "Front-End Development",
		year: 2026,
		liveUrl: "https://mindxplus-v2.vercel.app",
		githubUrl: "https://github.com/Energyshifter8/mindxplusV2",
	},
	{
		id: "4",
		clientInitials: "TB",
		clientName: "Personal Project",
		projectName: "Todo Task Board",
		tags: ["Next.js", "shadcn/ui", "TanStack"],
		slug: "todo-task-board",
		summary:
			"A drag-and-drop task board built to get hands-on with shadcn/ui and TanStack Query and Table — a practice project rather than a client build, but real mileage on real tools.",
		coverImageAlt: "Todo task board with drag-and-drop columns",
		role: "Front-End Development",
		year: 2026,
		liveUrl: "https://my-app-nine-mocha-55.vercel.app",
		githubUrl: "https://github.com/Energyshifter8/my-app",
	},
];
