'use client'
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconBrightnessDown } from "@tabler/icons-react";
import Link from "next/link";

export function SiteHeader() {
  const [prenom, setPrenom] = useState<string>("invité");

  useEffect(() => {
    const interval = setInterval(() => {
      const storedPrenom = localStorage.getItem("prenom");
      if (storedPrenom && storedPrenom !== prenom) {
        setPrenom(storedPrenom);
      }
    }, 200); // vérifie toutes les 200ms

    return () => clearInterval(interval); // nettoyage
  }, [prenom]);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">Have a good day, {prenom}</h1>
        <div className="ml-auto flex items-center gap-2">
              {/*Button hna*/}
            {/*<Link href={"/dashboard/creer"}>*/}
            {/*  <button variant="ghost" size="sm">*/}
            {/*    Button*/}
            {/*  </button>*/}
            {/*</Link>*/}
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a href="#" rel="noopener noreferrer" target="_blank" className="dark:text-foreground">
              <IconBrightnessDown className={'size-7'} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}