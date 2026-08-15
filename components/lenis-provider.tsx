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

		const lenis = new Lenis({ anchors: true });
		lenis.on("scroll", ScrollTrigger.update);

		function update(time: number) {
			lenis.raf(time * 1000);
		}

		gsap.ticker.add(update);
		gsap.ticker.lagSmoothing(0);

		// On a fresh load with a URL hash (e.g. navigating from /lab to /#work),
		// the browser's native anchor jump happens before Lenis/ScrollTrigger have
		// measured the fully hydrated layout, so the scroll position drifts once
		// fonts/animations settle. Re-sync once things stabilize.
		if (window.location.hash) {
			const scrollToHash = () => {
				ScrollTrigger.refresh();
				lenis.scrollTo(window.location.hash, { immediate: true });
			};

			requestAnimationFrame(scrollToHash);
			document.fonts?.ready?.then(scrollToHash);
		}

		return () => {
			gsap.ticker.remove(update);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
