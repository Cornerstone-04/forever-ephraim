"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Let&apos;s Talk Copy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need fresh words, strategic messaging, or just want to
            say hi — I&apos;d love to connect.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Email</p>
                        <p className="text-sm text-muted-foreground">foreverephraim@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{label}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2">
                    Response Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24-48 hours. Looking forward to
                    hearing from you!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Prefer a Quick Chat?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sometimes it&apos;s easier to just talk. Schedule a 15-minute intro
            call to discuss your project.
          </p>
          <Button size="lg" variant="outline">
            Schedule a Call
          </Button>
        </div>
      </section>
    </main>
  );
}
