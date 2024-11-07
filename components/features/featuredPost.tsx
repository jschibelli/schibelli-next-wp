// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Import data fetching function
import { getAllPosts } from "@/lib/wordpress";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const Hero = async () => {
  const posts = await getAllPosts();
  const latestPost = posts[0];
  const { title, acf, slug } = latestPost;
  const imageUrl = acf?.og_image?.[0]?.url || Placeholder;
  const subHeading = acf?.sub_heading;

  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href={`/posts/${slug}`}>
              {title.rendered} <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>{title.rendered}</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>{subHeading}</Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={imageUrl}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />

          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
