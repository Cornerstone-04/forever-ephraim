// types.ts
export type RSSItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: {
    link?: string;     // <-- image url lives here
    type?: string;
    length?: string;
  };
};

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;  // normalized image for cards
};