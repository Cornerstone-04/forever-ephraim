import { Navigation } from "@/components/common/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
  description:
    "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
  metadataBase: new URL("https://foreverephraim.vercel.app/"),
  openGraph: {
    title:
      "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
    description:
      "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
    url: "https://foreverephraim.vercel.app/",
    siteName: "Forever Ephraim",
    images: ["/forever-2.jpeg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@the__Tamtam",
    title:
      "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
    description:
      "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
    images: ["/forever-2.jpeg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Forever Ephraim",
    "Creative Copywriter",
    "Content Writer",
    "Email Copywriter",
    "Brand Storyteller",
    "Freelancer",
    "Copywriting Services",
    "Marketing Copywriter",
    "SEO Copywriter",
    "Social Media Copywriter",
    "Website Copywriter",
    "Product Descriptions",
    "Blog Writing",
    "Content Strategy",
    "Brand Messaging",
    "Advertising Copywriter",
    "Digital Marketing",
    "Freelance Writer",
    "Copywriting Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
