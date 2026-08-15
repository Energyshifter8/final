"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { resolvePendingViewTransition } from "@/lib/view-transition";

export function ViewTransitionListener() {
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname triggers re-run on route change, its value is unused
	useEffect(() => {
		resolvePendingViewTransition();
	}, [pathname]);

	return null;
}
