import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { labEntries } from "@/content/lab";

const title = "Lab";
const description = "One-off experiments, prototypes, and short write-ups.";

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: "/lab",
	},
	openGraph: {
		type: "website",
		url: "/lab",
		title,
		description,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export default function LabPage() {
	return (
		<div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-24">
			<div className="flex flex-col gap-4">
				<h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Lab
				</h1>
				<p className="max-w-2xl text-lg text-muted-foreground">
					One-off experiments, prototypes, and short write-ups — the stuff that
					doesn't fit in a case study.
				</p>
			</div>

			<ul className="flex flex-col divide-y divide-border border-t border-border">
				{labEntries.map((entry) => {
					const isExternal = !entry.href.startsWith("/");

					return (
						<li key={entry.href}>
							<a
								href={entry.href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer" : undefined}
								className="group flex flex-col gap-2 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
							>
								<div className="flex items-center justify-between gap-4">
									<h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-accent">
										{entry.title}
									</h2>
									<ArrowUpRight
										className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
										aria-hidden="true"
									/>
								</div>
								<p className="text-sm text-muted-foreground">
									{entry.description}
								</p>
								<time
									dateTime={entry.date}
									className="text-xs font-medium tracking-widest text-muted-foreground uppercase"
								>
									{formatDate(entry.date)}
								</time>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
