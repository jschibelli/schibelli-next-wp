// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { FileDown } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.png";

const HomepageHero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        {/* <Image
          src={Logo}
          width={329}
          height={136}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        /> */}
        <h1 className="!mb-0">
          <Balancer>
            Elevate Your Digital Presence with Expert Full-Stack Development
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Transforming ideas into scalable and efficient applications.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <FileDown className="mr-2" />
              Download Resume
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/contact">Get in Touch -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default HomepageHero;
