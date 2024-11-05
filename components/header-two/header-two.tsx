// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.png";

const Hero = () => {
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
          <Balancer>Innovative Web Development & AI Solutions</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Empowering Digital Experiences with Modern Technology and Smart AI
            Integration
          </Balancer>
        </h3>
        {/* <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Dolor Sit Amet -{">"}</Link>
          </Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default Hero;
