import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/content/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
				<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
					<div className="flex flex-col gap-1">
						<a
							href={`mailto:${siteConfig.email}`}
							className="font-heading text-2xl font-bold tracking-tight text-foreground hover:text-accent"
						>
							{siteConfig.email}
						</a>
						{siteConfig.phone && (
							<a
								href={`tel:${siteConfig.phone}`}
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								{siteConfig.phone}
							</a>
						)}
					</div>
					<Button
						render={<a href={siteConfig.ctaHref} />}
						nativeButton={false}
						className="bg-accent text-accent-foreground hover:bg-accent/90"
					>
						{siteConfig.ctaLabel}
					</Button>
				</div>
				<Separator />
				<p className="text-sm text-muted-foreground">
					© {year} {siteConfig.name}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
