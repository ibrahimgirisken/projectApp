import { Page } from "@/features/page/types/page";

export default function ProductDetailView({ page }: { page: Page }) {
  return <main className="container mx-auto py-8"><h1>{page.id}</h1></main>;
}