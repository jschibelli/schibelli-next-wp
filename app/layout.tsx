import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Github, Twitter, Facebook, Linkedin } from "lucide-react";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "@/public/logo.png";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import FooterSubscribe from "@/components/footers/footer-subscribe";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.SITE_URL || "https://schibelli.com";

export const metadata: Metadata = {
  title: "Schibelli.com",
  description:
    "Elevate Your Digital Presence with Expert Full-Stack Development",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Building a Scalable Website: Key Considerations for Developers",
    description:
      "Essential Tips for Future-Proofing Your Website and Handling Growth Like a Pro",
    url: process.env.SITE_URL,
    siteName: "Schibelli.com",
    images: [
      {
        url: `${siteUrl}/opengraph-image.jpg`,
        width: 800,
        height: 600,
        alt: "Schibelli.com",
      },
    ],
    locale: "en_US",
    type: "website",
    subtitle:
      "Essential Tips for Future-Proofing Your Website and Handling Growth Like a Pro", // Add the subtitle here
  },
};


// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <FooterSubscribe />

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Schibelli.com</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={175}
            height={136}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          {/* <Button asChild className="hidden sm:flex">
            <Link href="https://github.com/9d8dev/next-wp">Get Started</Link>
          </Button> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

<FooterSubscribe />

// const Footer = () => {
//   return (
//     <footer>
//       <Section>
//         <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
//           <div className="not-prose flex flex-col gap-6">
//             <Link href="/">
//               <h3 className="sr-only">John Schibelli</h3>
//               <Image
//                 src={Logo}
//                 alt="Logo"
//                 width={120}
//                 height={27.27}
//                 className="transition-all hover:opacity-75 dark:invert"
//               ></Image>
//             </Link>
//             <p>
//               <Balancer>
                // Stay Connected with My Journey in Tech & AI! Follow Me on Social
                // Media for Insights, Tips, and Behind-the-Scenes Projects.
//               </Balancer>
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h5>Website</h5>
//             <Link href="/pages/about-me/">About Me</Link>
//             <Link href="/posts/">Blog</Link>
//             <Link href="/pages/contact/">Contact</Link>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h5>Legal</h5>
//             <Link href="/pages/privacy-policy">Privacy Policy</Link>
//             {/* <Link href="/terms-of-service">Terms of Service</Link>
//             <Link href="/cookie-policy">Cookie Policy</Link> */}
//           </div>
//         </Container>
//         <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          // <div className="flex gap-2">
          //   <Button variant="outline" size="icon">
          //     <a href="https://github.com/jschibelli" target="_blank">
          //       <Github />
          //     </a>
          //   </Button>
          //   <Button variant="outline" size="icon">
          //     <a
          //       href="https://www.linkedin.com/in/johnschibelli/"
          //       target="_blank"
          //     >
          //       <Linkedin />
          //     </a>
          //   </Button>
          //   <Button variant="outline" size="icon">
          //     <a
          //       href="https://www.facebook.com/profile.php?id=61564957240056"
          //       target="_blank"
          //     >
          //       <Facebook />
          //     </a>
          //   </Button>
          // </div>
//           <p className="text-muted-foreground">
//             © <a href="https://github.com/brijr/components">Schibelli.com</a>.
//             All rights reserved. 2024-present.
//           </p>
//         </Container>
//       </Section>
//     </footer>
//   );
// };







