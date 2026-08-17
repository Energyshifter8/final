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
				<div className="relative mx-auto w-full max-w-sm md:justify-self-center">
				<div className="absolute inset-0 rounded-2xl" />
				<div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
						<Image
							src="/IMG_3670.JPG"
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
