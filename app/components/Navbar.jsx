'use client';

import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { Dialog, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center z-[50] mt-4">
      <div className="flex justify-between md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-full p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <h1 className="font-medium text-xl">Flashcard App</h1>
              </SheetTitle>
              <SheetDescription>Create and study flashcards</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/signup">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-3">
              <h1 className="font-medium text-[1.15rem]">Flashcard App</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/contact">
            <Button variant="outline" className="rounded-full">
              Contact
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="rounded-full">
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button className="rounded-full">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
    );
  }
);
ListItem.displayName = 'ListItem';
