import { Product } from "@/features/product/types/product";

export default function ProductsView({ page }: { page: Product }) {
  return <main className="container mx-auto py-8"><h1>{page.id}</h1></main>;
}