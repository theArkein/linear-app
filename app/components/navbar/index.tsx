"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Card } from "@/components/ui/card"
import LinearAppIcon from "../icons/linear-app"
import { Button } from "@/components/ui/button"

// menuitems are
// features, Method, Customers, Changelog, Pricing, Company, Contact

const menuItems = [
    {
        title: "Features",
        href: "/features",
    },
    {
        title: "Method",
        href: "/method",
    },
    {
        title: "Customers",
        href: "/customers",
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Company",
        href: "/company",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]



export function Navbar() {
  return (
    <Card className="max-w-screen-lg m-auto p-2 mt-4 px-4">
        <NavigationMenu >
            <NavigationMenuList>
                {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                        >
                            <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                            </p>
                        </a>
                        </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem key={"logo"}>
                    <NavigationMenuLink className={""}>
                        <LinearAppIcon size={60} height={16} />
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {
                    menuItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {item.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))
                }
                <NavigationMenuItem className="flex space-x-3">
                    <Button className="group bg-neutral-800 py-1 text-foreground hover:bg-zinc-700" asChild>
                        <Link href="/signup">
                            <span>Log in</span>
                            <span className="bg-neutral-900 group-hover:bg-zinc-800  text-xs flex justify-center  items-center text-center w-5 h-5 rounded-sm">L</span>
                        </Link>
                    </Button>
                    <Button className="bg-zinc-200 py-1" asChild>
                        <Link href="/signup">Sign up</Link>
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>

        </NavigationMenu>
    </Card>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
