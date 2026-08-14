"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (prefersReducedMotion()) return;

		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		function update(time: number) {
			lenis.raf(time * 1000);
		}

		gsap.ticker.add(update);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(update);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
