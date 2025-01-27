"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WrenchIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { CustomizationMenu } from "./customization-menu";
import { useCustomization } from "@/lib/hooks/useCustomization";
import { translations } from "@/lib/i18n/translations";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useCustomization();
  const t = translations[language].common;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img
              src="/icons/icon2.png" 
              alt="Rajkot Plumbing"
              className="h-14 w-auto object-contain"
            />
            <span className="hidden font-bold sm:inline-block">
              Rajkot Plumbing
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/services">{t.services}</Link>
            <Link href="/gallery">{t.gallery}</Link>
            <Link href="/reviews">{t.reviews}</Link>
            <Link href="/contact">{t.contact}</Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                {t.home}
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                {t.services}
              </Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)}>
                {t.gallery}
              </Link>
              <Link href="/reviews" onClick={() => setIsOpen(false)}>
                {t.reviews}
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                {t.contact}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <CustomizationMenu />
          <Button asChild>
            <Link href="/book">{t.bookNow}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}