import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { workItems } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = ["/", "/lab"].map((path) => ({
		url: `${siteConfig.url}${path}`,
	}));

	const workRoutes = workItems.map((item) => ({
		url: `${siteConfig.url}/work/${item.slug}`,
	}));

	return [...staticRoutes, ...workRoutes];
}
