let pendingResolve: (() => void) | null = null;

export function supportsViewTransitions() {
	return typeof document !== "undefined" && "startViewTransition" in document;
}

export function navigateWithViewTransition(navigate: () => void) {
	if (!supportsViewTransitions()) {
		navigate();
		return;
	}

	document.startViewTransition(
		() =>
			new Promise<void>((resolve) => {
				pendingResolve = resolve;
				navigate();
			}),
	);
}

export function resolvePendingViewTransition() {
	pendingResolve?.();
	pendingResolve = null;
}
