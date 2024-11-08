// Local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
// Icon imports
import { Github, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <Section>
      <Container className="flex flex-col text-center">
        <h1 className="!mb-0">Let&apos;s Connect</h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            I&apos;m always excited to discuss new projects, creative ideas, or
            opportunities to be part of your visions.
          </Balancer>
        </h3>
      </Container>
      <Container className="not-prose flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2 justify-center">
        <div className="flex justify-center gap-5">
          <Button variant="outline" size="icon" className="w-20 h-20">
            <a
              href="https://github.com/jschibelli"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <Github />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="w-20 h-20">
            <a
              href="https://www.linkedin.com/in/johnschibelli/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <Linkedin />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="w-20 h-20">
            <a
              href="https://www.facebook.com/profile.php?id=61564957240056"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Profile"
            >
              <Facebook />
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
