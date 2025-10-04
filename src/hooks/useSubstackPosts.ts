import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { RSSItem, BlogPost } from "@/types";

export function  useSubstackPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["substack-posts"],
    queryFn: async () => {
      const res = await api.get("");
      const items = (res.data.items || []) as RSSItem[];

      const normalized: BlogPost[] = items.slice(0, 20).map((item) => {
        // primary: enclosure.link
        let thumbnail = item.enclosure?.link;

        // fallback: first <img src="..."> in description
        if (!thumbnail && item.description) {
          const match = item.description.match(
            /<img[^>]*src=["']([^"']+)["']/i
          );
          if (match?.[1]) thumbnail = match[1];
        }

        return {
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description,
          thumbnail,
        };
      });

      return normalized;
    },
    staleTime: 1000 * 60 * 5,
  });
}
