import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 saat
      gcTime: 1000 * 60 * 60 * 6, // 6 saat
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
