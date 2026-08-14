import { AboutBio } from "@/components/sections/about/about-section";
import { AwardsMarquee } from "@/components/sections/about/awards-marquee";
import { Roster } from "@/components/sections/about/roster";
import { Scoreboard } from "@/components/sections/about/scoreboard";

export function AboutSection() {
	return (
		<section id="about" className="flex flex-col gap-16 py-24">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
				<AboutBio />
				<div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
					<Roster />
					<Scoreboard />
				</div>
			</div>
			<AwardsMarquee />
		</section>
	);
}
