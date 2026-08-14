import { Button } from "@/components/ui/button";
import { contactCopy } from "@/content/contact";
import { siteConfig } from "@/content/site";

export function ContactSection() {
	return (
		<section
			id="contact"
			className="flex flex-col items-center gap-8 px-6 py-32 text-center"
		>
			<h2 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
				{contactCopy.headline}
			</h2>

			<div className="flex flex-col items-center gap-1">
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
		</section>
	);
}
