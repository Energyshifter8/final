import { descriptionParagraphs } from "@/content/about";

export function AboutDescription() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
				Тайлбар
			</h2>
			{descriptionParagraphs.map((paragraph) => (
				<p key={paragraph} className="max-w-2xl text-lg text-muted-foreground">
					{paragraph}
				</p>
			))}
		</div>
	);
}
