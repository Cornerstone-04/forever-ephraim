import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background min-h-[80vh] flex justify-center items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Crafting copies that connect, move people, and convert.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                I&apos;m Forever, and I turn boring brand messages into stuff
                people actually want to read. If your brand needs words with
                personality, nice to meet you! 👋🏻
              </p>
              <p className="text-base text-muted-foreground italic">
                &quot;Forever?? That&apos;s Your Real Name?&quot; YES, it really
                is.
              </p>
              <Button size="lg" asChild className="group">
                <Link href="/blog">
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-50 grayscale">
            <span className="font-serif text-2xl font-bold">Forbes</span>
            <span className="font-serif text-2xl font-bold">GLAMOUR</span>
            <span className="font-serif text-2xl font-bold">ELLE</span>
            <span className="font-serif text-2xl font-bold">Inc.</span>
            <span className="font-serif text-xl font-bold">
              BUSINESS INSIDER
            </span>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-widest mb-4 opacity-80">
            Transform Your Brand Story
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Amplifying Your Message to Book Dream Clients
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90 mb-12">
            Through strategic storytelling, I craft messages that resonate
            deeply with your audience. Every word is intentional. Every sentence
            designed to move people from curiosity to conversion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Copy Strategy",
                description:
                  "Transform your brand voice into conversion-focused messaging.",
              },
              {
                title: "Brand Storytelling",
                description:
                  "Connect emotionally with audiences through compelling narratives.",
              },
              {
                title: "Content Marketing",
                description:
                  "Build authority and trust with strategic content that converts.",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="bg-primary-foreground text-primary border-0"
              >
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] bg-secondary/30 rounded-lg overflow-hidden">
              <Image
                src="/forever-2.jpeg"
                alt="Forever Headshot"
                width={600}
                height={800}
                className="aspect-[3/4] object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                A Little About Me
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Meet Forever
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  YES, that&apos;s really my name, and no, I didn&apos;t make it
                  up for branding, though maybe I should&apos;ve.
                </p>

                <p>
                  I&apos;ve been writing professionally for 4+ years, starting
                  out in the trenches of digital marketing: social posts, email
                  campaigns, blogs, you name it. Since then, I&apos;ve written
                  for hundreds of brands (plus my own blog — On a Journey) and
                  I&apos;ve learned this: good copy isn&apos;t about sounding
                  smart, it&apos;s about sounding human.
                </p>

                <p className="text-muted-foreground">
                  That&apos;s what I do. Copies that connect, make ...
                </p>
              </div>
              <Button size="lg" variant="outline" asChild className="mt-8">
                <Link href="/about">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
