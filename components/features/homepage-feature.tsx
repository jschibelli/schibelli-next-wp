// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// Icon imports
import { Code, Server, Smartphone, Rocket, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom Web Development",
    href: "/services/web-development",
    description:
      "Building scalable and efficient web applications tailored to your business needs using the latest technologies.",
    cta: "Learn More",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "API Integration & Development",
    href: "/services/api-integration",
    description:
      "Designing and integrating robust APIs to enhance functionality and connectivity across platforms.",
    cta: "Discover How",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsive Design",
    href: "/services/responsive-design",
    description:
      "Creating user-friendly interfaces that provide optimal viewing experiences across all devices.",
    cta: "See Examples",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance Optimization",
    href: "/services/performance-optimization",
    description:
      "Improving application speed and efficiency to deliver fast and seamless user experiences.",
    cta: "Optimize Now",
  },
];

const HomepageFeature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          {/* <h3 className="text-4xl text-center">
            <Balancer>
              Elevate Your Digital Presence with Expert Full-Stack Development
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70 text-center">
            <Balancer>
              Crafting innovative solutions to drive your business forward
            </Balancer>
          </h4> */}

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HomepageFeature;
