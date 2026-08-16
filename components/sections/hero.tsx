import Image from "next/image";
import { HeroText } from "@/components/sections/hero-text";

export function Hero() {
	return (
		<section
			id="hero"
			className="flex min-h-[70vh] flex-col justify-center px-6 py-24"
		>
			<div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
				<HeroText />
				<div className="relative mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
					<div className="absolute inset-0 rotate-3 rounded-2xl border-4 border-accent" />
					<div className="relative aspect-[812/926] w-full -rotate-2 overflow-hidden rounded-2xl border-4 border-foreground shadow-xl">
						<Image
							src="/lemon.png"
							alt="Portrait of Temuulen"
							fill
							priority
							sizes="(min-width: 768px) 24rem, 80vw"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
