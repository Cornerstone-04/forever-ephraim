"use client";

import { useState } from "react";
import { useSubstackPosts } from "@/hooks/useSubstackPosts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const { data: posts = [], isLoading, error } = useSubstackPosts();
  const [visible, setVisible] = useState(5);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading posts...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading blog posts</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-4 px-4 sm:px-6 lg:px-8 bg-background text-center">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            On a Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on copywriting, marketing, and the art of crafting messages
            that move people.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, visible).map((post, i) => (
              <Card
                key={`${post.link}-${i}`}
                className="group hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden py-0"
              >
                {post.thumbnail && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw,
                             (max-width: 1024px) 50vw,
                             (max-width: 1280px) 33vw,
                             33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i < 2} // eager-load first row, tweak as you like
                    />
                  </div>
                )}

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {post.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn w-fit"
                    asChild
                  >
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {visible < posts.length && (
            <div className="mt-8 text-center">
              <Button onClick={() => setVisible((v) => v + 4)}>
                Load More
              </Button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Want more insights delivered to your inbox?
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://foreverephraim.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe on Substack
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
