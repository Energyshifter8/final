import { GithubIcon } from "@/components/icons/github-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/content/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
				<div className="flex items-center justify-between gap-6">
					<p className="font-heading text-2xl font-bold tracking-tight text-foreground">
						{siteConfig.name}
					</p>
					{siteConfig.githubUrl && (
						<Button
							render={
								<a
									href={siteConfig.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
							nativeButton={false}
							variant="ghost"
							size="icon"
						>
							<GithubIcon className="size-4" aria-hidden="true" />
							<span className="sr-only">GitHub profile</span>
						</Button>
					)}
				</div>
				<Separator />
				<p className="text-sm text-muted-foreground">
					© {year} {siteConfig.name.replace(/\.$/, "")}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
