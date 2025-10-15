import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { createApiService } from "./createApiService";

export function createQueryHooks<T extends { id: string }>(
  key: string,
  service: ReturnType<typeof createApiService<T>>
) {
  return {
    useAllSingle: () =>
      useQuery<T[]>({
        queryKey: [key],
        queryFn: () => service.getAllSingle(),
      }),

    useAll: () =>
      useQuery<T[]>({
        queryKey: [key],
        queryFn: () => service.getAll(),
      }),

    useByLang: (lang: string) =>
      useQuery<T[]>({
        queryKey: [key, "lang", lang] as const,
        queryFn: () => service.getAllByLang(lang),
        staleTime: 1000 * 60 * 60, // 1 saat
        gcTime: 1000 * 60 * 60 * 6, // 6 saat
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        placeholderData: keepPreviousData,
      }),

    useById: (id: string) =>
      useQuery<T>({
        queryKey: [key, "id", id],
        queryFn: () => service.getById(id),
      }),

    useParamsData: (pUrl: string) =>
      useQuery<T>({
        queryKey: [key, "params", pUrl],
        queryFn: () => service.getByParams(pUrl),
      }),

    useByUrlAndLang: (slug: string, lang: string) =>
      useQuery<T>({
        queryKey: [key, "slug", slug, "lang", lang],
        queryFn: () => service.getByUrlAndLang(slug, lang),
      }),

    useCreate: () => {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: service.create,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [key] }),
      });
    },

    useUpdate: () => {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: ({ data }: { data: T }) => service.update(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [key] }),
      });
    },
  };
}
