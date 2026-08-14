"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/content/nav";
import { siteConfig } from "@/content/site";

export function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger
				render={<Button variant="ghost" size="icon" className="md:hidden" />}
			>
				<Menu />
				<span className="sr-only">Open menu</span>
			</SheetTrigger>
			<SheetContent side="right" className="flex flex-col">
				<SheetHeader>
					<SheetTitle>{siteConfig.name}</SheetTitle>
				</SheetHeader>
				<nav className="flex flex-col gap-1 px-4">
					{navLinks.map((link) => (
						<SheetClose
							key={link.href}
							nativeButton={false}
							render={
								<Link
									href={link.href}
									className="rounded-md px-2 py-3 text-base font-medium tracking-wide text-foreground uppercase hover:bg-muted"
								/>
							}
						>
							{link.label}
						</SheetClose>
					))}
				</nav>
				<div className="mt-auto p-4">
					<Button
						render={<a href={siteConfig.ctaHref} />}
						nativeButton={false}
						className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
					>
						{siteConfig.ctaLabel}
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
