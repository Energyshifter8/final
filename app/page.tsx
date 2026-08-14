import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services/services-section";
import { WorkSection } from "@/components/sections/work/work-section";

const sections = ["Work case study"];

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<WorkSection />
			<ServicesSection />
			<AboutSection />
			<div className="flex flex-col items-center gap-4 px-16 pb-16">
				<h2 className="font-heading text-2xl font-semibold">
					Portfolio sections
				</h2>
				<ul className="flex flex-col gap-2 text-center">
					{sections.map((section) => (
						<li key={section}>{section}</li>
					))}
				</ul>
			</div>
			<ContactSection />
		</div>
	);
}
