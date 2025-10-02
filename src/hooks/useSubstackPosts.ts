import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { BlogPost } from "@/types";

export function useSubstackPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["substack-posts"],
    queryFn: async () => {
      const res = await api.get("");
      return (res.data.items as BlogPost[]).slice(0, 20);
    },
    staleTime: 1000 * 60 * 5,
  });
}
