import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion() {
	return window.matchMedia(QUERY).matches;
}

export function useReducedMotion() {
	const [reduced, setReduced] = useState(
		() => typeof window !== "undefined" && prefersReducedMotion(),
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(QUERY);
		const handleChange = () => setReduced(mediaQuery.matches);

		handleChange();
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return reduced;
}
