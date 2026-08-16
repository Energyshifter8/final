import { ServiceCard } from "@/components/sections/services/service-card";
import { serviceItems, servicesIntro } from "@/content/services";

export function ServicesSection() {
	return (
		<section id="services" className="px-6 py-24">
			<div className="mx-auto flex max-w-6xl flex-col gap-12">
				<div className="flex flex-col gap-4">
					<h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
						Skill
					</h2>
					<p className="max-w-2xl text-lg text-muted-foreground">
						{servicesIntro}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{serviceItems.map((item) => (
						<ServiceCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}
