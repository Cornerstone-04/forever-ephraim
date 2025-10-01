import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    brand: "Tech Startup",
    category: "Website Copy",
    description:
      "Transformed complex technical jargon into clear, conversion-focused messaging.",
    impact: "40% increase in sign-ups",
    tags: ["SaaS", "Landing Page", "Conversion"],
  },
  {
    id: 2,
    brand: "Lifestyle Brand",
    category: "Brand Storytelling",
    description:
      "Crafted authentic brand narrative that connected emotionally with target audience.",
    impact: "3x engagement rate",
    tags: ["Brand Voice", "Storytelling", "Content"],
  },
  {
    id: 3,
    brand: "E-commerce Platform",
    category: "Email Campaign",
    description:
      "Designed email sequence that nurtured leads and drove consistent conversions.",
    impact: "25% open rate, 8% CTR",
    tags: ["Email Marketing", "Automation", "E-commerce"],
  },
  {
    id: 4,
    brand: "B2B Software",
    category: "Product Marketing",
    description:
      "Developed messaging framework for product launch and go-to-market strategy.",
    impact: "500+ qualified leads",
    tags: ["B2B", "Product Launch", "Strategy"],
  },
  {
    id: 5,
    brand: "Wellness Coach",
    category: "Sales Pages",
    description:
      "Created persuasive sales copy that balanced education with conversion tactics.",
    impact: "60% conversion lift",
    tags: ["Sales Copy", "Wellness", "High-Ticket"],
  },
  {
    id: 6,
    brand: "Creative Agency",
    category: "Content Strategy",
    description:
      "Built content calendar and messaging strategy to establish thought leadership.",
    impact: "200% traffic increase",
    tags: ["Content Strategy", "SEO", "Authority"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Words That Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects where strategic copy met measurable results.
            Each piece crafted to connect, engage, and convert.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="aspect-[4/3] bg-secondary/30 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    [Project Thumbnail]
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold">
                      {item.brand}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {item.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Ready to See What Copy Can Do for Your Brand?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and explore how strategic messaging can
            drive real results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Let's Talk Copy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
