export type NavLink = {
	label: string;
	href: string;
};

export type HeroCopy = {
	greeting: string;
	name: string;
	intro: string;
};

export type SiteConfig = {
	name: string;
	email: string;
	phone?: string;
	ctaLabel: string;
	ctaHref: string;
};
