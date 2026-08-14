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
};

export type SiteConfig = {
	name: string;
	email: string;
	phone?: string;
	ctaLabel: string;
	ctaHref: string;
};
