import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">
                Meet Forever
              </h1>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
                &quot;Forever?? That&apos;s Your Real Name?&quot;
              </p>

              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  I&apos;m a writer and product marketer who believes that great
                  copy isn&apos;t just about selling, it&apos;s about creating
                  genuine connections that move people to action.
                </p>

                <p>
                  With years of experience helping brands find their voice, I
                  specialize in transforming complex ideas into clear,
                  compelling stories that resonate with your audience and drive
                  measurable results.
                </p>

                <p>
                  My approach combines strategic thinking with authentic
                  storytelling. I don&apos;t believe in cookie-cutter solutions
                  or generic messaging. Instead, I take the time to understand
                  your brand, your audience, and what makes you unique.
                </p>

                <p>
                  Whether it&apos;s web copy that converts, email campaigns that
                  engage, or brand messaging that sticks, I craft words with
                  personality and purpose. Words that people actually want to
                  read.
                </p>

                <h3 className="font-serif text-2xl font-bold pt-4">
                  What I Do
                </h3>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span>
                      Strategic copywriting for websites, landing pages, and
                      digital experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span>Brand messaging and voice development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span>
                      Email marketing campaigns that build relationships and
                      drive conversions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span>
                      Product marketing content that educates and persuades
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    <span>Content strategy and editorial planning</span>
                  </li>
                </ul>

                <p className="text-muted-foreground italic pt-4">
                  When I&apos;m not writing, you&apos;ll find me exploring new
                  perspectives, reading everything I can get my hands on, and
                  yes, patiently explaining to people that Forever really is my
                  actual name.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Work With Me
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] bg-secondary/30 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  [Portrait Photo]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your brand messaging? I&apos;d love to hear about
            your project.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
