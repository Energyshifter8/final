"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "@/components/icons/github-icon";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/content/nav";
import { siteConfig } from "@/content/site";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 8);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useGSAP(
		() => {
			if (prefersReducedMotion()) return;

			gsap.from(headerRef.current, {
				opacity: 0,
				y: -16,
				duration: 0.6,
				ease: "power3.out",
			});
		},
		{ scope: headerRef },
	);

	return (
		<header
			ref={headerRef}
			className={cn(
				"sticky top-0 z-50 border-b transition-colors duration-300",
				isScrolled
					? "border-border bg-background/70 backdrop-blur-md"
					: "border-transparent bg-transparent",
			)}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
				<Link
					href="/"
					className="font-heading text-lg font-bold tracking-tight text-foreground"
				>
					{siteConfig.name}
				</Link>

				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList className="gap-1">
						{navLinks.map((link) => (
							<NavigationMenuItem key={link.href}>
								<NavigationMenuLink
									href={link.href}
									className="rounded-md px-3 py-2 text-sm font-medium tracking-wide text-foreground uppercase hover:bg-transparent hover:text-accent"
								>
									{link.label}
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{siteConfig.githubUrl && (
					<Button
						render={
							<a
								href={siteConfig.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							/>
						}
						nativeButton={false}
						variant="ghost"
						size="icon"
						className="hidden md:inline-flex"
					>
						<GithubIcon className="size-4" aria-hidden="true" />
						<span className="sr-only">GitHub profile</span>
					</Button>
				)}

				<MobileNav />
			</div>
		</header>
	);
}
