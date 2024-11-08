// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Github, Twitter, Facebook, Linkedin } from "lucide-react";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">John Schibelli</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={67.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Stay Connected with My Journey in Tech & AI! Follow Me on Social
                Media for Insights, Tips, and Behind-the-Scenes Projects.
              </Balancer>
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            {/* <Link href="/cookie-policy">Cookie Policy</Link> */}
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <a href="https://github.com/jschibelli" target="_blank">
                <Github />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://www.linkedin.com/in/johnschibelli/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://www.facebook.com/profile.php?id=61564957240056"
                target="_blank"
              >
                <Facebook />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <a href="https://github.com/brijr/components">Schibelli.com</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
