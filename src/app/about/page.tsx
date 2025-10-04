import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
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

              <div className="space-y-6 text-sm text-foreground leading-relaxed">
                <p className="text-base font-semibold">
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

                <p>
                  That&apos;s what I do. Copies that connect, make people feel
                  something, and (bonus) actually convert.
                </p>

                <p>
                  Case in point: a roofing client hit $100K in 10 months,
                  another doubled leads, and a mental health company tripled
                  engagement by leaning into storytelling that felt real.
                  It&apos;s not magic, it&apos;s just words that sound like they
                  were written by a person, not a robot.
                </p>

                <p>
                  When I&apos;m not glued to my keyboard, I&apos;m probably at
                  the cinema, dodging yet another &quot;Forever? Really?&quot;
                  reaction, or eating my way through new cuisines (my one
                  adventurous streak).
                </p>

                <p>
                  Oh, and one more thing. I love Jesus Christ. I&apos;m shy, but
                  not about that.
                </p>

                <p>
                  So… if your brand is ready for copy that feels alive, WELCOME.
                  Let&apos;s get you initiated 🙂
                </p>

                {/* <h3 className="font-serif text-2xl font-bold pt-4">
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
                </p> */}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Work With Me
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/resume">View My History</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] bg-secondary/30 rounded-lg overflow-hidden">
                <Image
                  src="/forever-2.jpeg"
                  alt="Forever Headshot"
                  width={600}
                  height={800}
                  className="aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-foreground text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your brand messaging? I&apos;d love to hear about
            your project.
          </p>
          <Button
            className="inline-flex items-center gap-2 bg-white hover:bg-white/80 text-foreground px-8 py-4 rounded-md text-base font-semibold"
            size="lg"
            asChild
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
