import { AboutSection } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services/services-section";
import { WorkSection } from "@/components/sections/work/work-section";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<WorkSection />
			<ServicesSection />
			<AboutSection />
		</div>
	);
}
