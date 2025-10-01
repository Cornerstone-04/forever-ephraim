import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Writing Copy That Actually Converts",
    excerpt:
      "Most brands get this wrong. Here's what actually works when it comes to conversion-focused copywriting...",
    date: "2024-10-15",
    url: "#",
  },
  {
    id: 2,
    title: "Why Your Brand Voice Matters More Than You Think",
    excerpt:
      "In a world of noise, your brand voice is your competitive advantage. Learn how to develop one that resonates...",
    date: "2024-10-08",
    url: "#",
  },
  {
    id: 3,
    title: "From Boring to Brilliant: Transforming Brand Messaging",
    excerpt:
      "A step-by-step framework for taking generic brand messaging and making it memorable, authentic, and effective...",
    date: "2024-10-01",
    url: "#",
  },
  {
    id: 4,
    title: "The Psychology Behind Persuasive Writing",
    excerpt:
      "Understanding the principles that make people say yes. A deep dive into the psychology of persuasion...",
    date: "2024-09-24",
    url: "#",
  },
  {
    id: 5,
    title: "Email Marketing: Beyond Open Rates",
    excerpt:
      "What metrics actually matter and how to create email campaigns that build relationships, not just clicks...",
    date: "2024-09-17",
    url: "#",
  },
  {
    id: 6,
    title: "Storytelling in Product Marketing",
    excerpt:
      "How to weave compelling narratives into your product marketing to create emotional connections with customers...",
    date: "2024-09-10",
    url: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Thoughts on Words & Strategy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on copywriting, marketing, and the art of crafting messages
            that move people.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn w-fit"
                    asChild
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Want more insights delivered to your inbox?
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Subscribe on Substack
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
