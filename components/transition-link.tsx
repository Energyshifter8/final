"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, type MouseEvent } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";
import { navigateWithViewTransition } from "@/lib/view-transition";

type TransitionLinkProps = React.ComponentProps<typeof NextLink>;

export const TransitionLink = forwardRef<
	HTMLAnchorElement,
	TransitionLinkProps
>(function TransitionLink({ href, onClick, ...props }, ref) {
	const router = useRouter();

	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
		onClick?.(event);

		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey ||
			prefersReducedMotion()
		) {
			return;
		}

		event.preventDefault();
		navigateWithViewTransition(() => router.push(href.toString()));
	}

	return <NextLink ref={ref} href={href} onClick={handleClick} {...props} />;
});
