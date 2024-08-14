import Image from 'next/image';
import Link from 'next/link';

import { Section, Container } from '@/components/craft';
import Logo from '@/public/vercel.svg';

export default function Footer() {
  return (
    <footer className="not-prose border-t mt-56">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              {/* Replace logo */}
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="/contact">Contact</Link>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 text-sm text-muted-foreground">
            <p className="mr-2">Created by: </p>
            <p>
              <a
                href="/"
                className="underline hover:text-slate-700"
                target="_blank"
              >
                Khoi Ly
              </a>
            </p>

            <p>
              <a
                href="/"
                className="underline hover:text-slate-700"
                target="_blank"
              >
                Nisarg Oza
              </a>
            </p>
            <p>
              <a
                href="https://www.raglandconnor.com/"
                className="underline hover:text-slate-700"
                target="_blank"
              >
                Connor Ragland
              </a>
            </p>
            <p>
              <a
                href="/"
                className="underline hover:text-slate-700"
                target="_blank"
              >
                Angel Martinez
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
