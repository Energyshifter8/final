import { awards } from "@/content/awards";

export function AwardsMarquee() {
	const track = [...awards, ...awards];

	return (
		<div className="group w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
			<div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
				{track.map((award, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: static, never-reordered duplicated list — index is needed since titles repeat across the two halves
						key={`${award.title}-${index}`}
						className="flex shrink-0 items-baseline gap-2 whitespace-nowrap"
					>
						<span className="font-heading text-2xl font-bold text-foreground">
							{award.count}
						</span>
						<span className="text-sm text-muted-foreground">{award.title}</span>
					</div>
				))}
			</div>
		</div>
	);
}
