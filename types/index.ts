export type NavLink = {
	label: string;
	href: string;
};

export type HeroCopy = {
	greeting: string;
	name: string;
	intro: string;
};

export type WorkItem = {
	id: string;
	clientInitials: string;
	clientName: string;
	projectName: string;
	tags: string[];
	slug: string;
	summary?: string;
	coverImageAlt?: string;
	role?: string;
	year?: number;
};

export type ServiceItem = {
	id: string;
	code: string;
	title: string;
	primaryTags: string[];
	secondaryTags: string[];
	fromLabel: string;
	toLabel: string;
};

export type ScoreboardStat = {
	id: string;
	label: string;
	value: number;
	suffix?: string;
};

export type ContactCopy = {
	headline: string;
};

export type LabEntry = {
	title: string;
	description: string;
	href: string;
	date: string;
};

export type SiteConfig = {
	name: string;
	url: string;
	email: string;
	phone?: string;
	ctaLabel: string;
	ctaHref: string;
};
