"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  LogIn,
  Compass,
  Flame,
  Gift,
  Swords,
  History,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User | null;
}

export default function NavBarContent({ user }: Props) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-muted/40 border-b border-border/50">
      <div className="max-w-8xl mx-auto h-16 px-6 flex items-center">
        {/* Left - Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-primary hover:opacity-80 transition"
          >
            <Image
              src="/assets/dishordat-logo.png"
              alt="Dishordat Logo"
              width={175}
              height={50}
              className="h-10 w-auto mr-2"
            />
          </Link>
        </div>

        {/* Center - Logged In Navigation */}
        {user && (
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {/* Explore */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-primary transition">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 w-64 rounded-2xl shadow-xl bg-card border border-border">
                    <div className="space-y-4 text-sm">
                      <NavItem href="/cities" icon={<Compass size={16} />}>
                        Cities
                      </NavItem>
                      <NavItem href="/trending" icon={<Flame size={16} />}>
                        Trending
                      </NavItem>
                      <NavItem href="/offers" icon={<Gift size={16} />}>
                        Offers
                      </NavItem>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Compare */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-primary transition">
                    Compare
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 w-64 rounded-2xl shadow-xl bg-card border border-border">
                    <div className="space-y-4 text-sm">
                      <NavItem href="/compare" icon={<Swords size={16} />}>
                        Start Battle
                      </NavItem>
                      <NavItem href="/history" icon={<History size={16} />}>
                        History
                      </NavItem>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* You */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-primary transition">
                    You
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 w-64 rounded-2xl shadow-xl bg-card border border-border">
                    <div className="space-y-4 text-sm">
                      <NavItem href="/favorites" icon={<Heart size={16} />}>
                        Favorites
                      </NavItem>
                      <NavItem href="/settings" icon={<Settings size={16} />}>
                        Settings
                      </NavItem>
                      <button className="flex items-center gap-2 text-destructive hover:opacity-80 transition">
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        {/* Right - Auth */}
        <div className="flex-1 flex justify-end">
          {!user && (
            <Link
              href="/login"
              className="group inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full
              bg-primary text-primary-foreground
              shadow-md hover:shadow-lg
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200"
            >
              <LogIn
                size={16}
                className="opacity-80 group-hover:opacity-100 transition"
              />
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

/* Reusable Nav Item */
function NavItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
      >
        {icon}
        {children}
      </Link>
    </NavigationMenuLink>
  );
}
