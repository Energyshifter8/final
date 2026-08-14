import { Hero } from "@/components/sections/hero";

const sections = [
	"Work",
	"Work case study",
	"Services",
	"About",
	"Contact / Footer",
];

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Hero />
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
		</div>
	);
}
