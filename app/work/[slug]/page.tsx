import { ArrowLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";
import { workItems } from "@/content/work";

export function generateStaticParams() {
	return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
	const { slug } = await params;
	const item = workItems.find((work) => work.slug === slug);

	if (!item) {
		return { title: "Project not found" };
	}

	const title = `${item.projectName} — ${item.clientName}`;
	const description =
		item.summary ?? `${item.projectName} for ${item.clientName}.`;

	return {
		title,
		description,
		alternates: {
			canonical: `/work/${slug}`,
		},
		openGraph: {
			type: "article",
			url: `/work/${slug}`,
			title,
			description,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export default async function WorkCaseStudyPage({
	params,
}: PageProps<"/work/[slug]">) {
	const { slug } = await params;
	const item = workItems.find((work) => work.slug === slug);

	if (!item) {
		notFound();
	}

	const meta = [
		{ label: "Client", value: item.clientName },
		{ label: "Role", value: item.role },
		{ label: "Year", value: item.year?.toString() },
	].filter((entry) => entry.value);

	return (
		<div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-24">
			<TransitionLink
				href="/"
				className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
			>
				<ArrowLeft className="size-4" aria-hidden="true" />
				Back to home
			</TransitionLink>

			{meta.length > 0 && (
				<div className="flex flex-wrap gap-x-8 gap-y-4">
					{meta.map((entry) => (
						<div key={entry.label} className="flex flex-col gap-1">
							<p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
								{entry.label}
							</p>
							<p className="text-sm text-foreground">{entry.value}</p>
						</div>
					))}
				</div>
			)}

			<h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
				{item.projectName}
			</h1>

			<ul className="flex flex-wrap gap-x-4 gap-y-2">
				{item.tags.map((tag) => (
					<li
						key={tag}
						className="flex items-center gap-1 text-sm text-muted-foreground"
					>
						<ChevronRight className="size-3 text-accent" aria-hidden="true" />
						{tag}
					</li>
				))}
			</ul>

			{item.summary && (
				<p className="max-w-2xl text-lg text-muted-foreground">
					{item.summary}
				</p>
			)}

			<div
				role="img"
				aria-label={item.coverImageAlt ?? `${item.projectName} cover image`}
				className="aspect-video w-full rounded-2xl border border-border bg-card"
			/>
		</div>
	);
}
