import { createApiService } from "@/lib/api/createApiService";
import { createServerApi } from "@/lib/api/serverApi";
import { Product } from "../types/product";

const apiInstance = createServerApi();
export const productService=createApiService<Product>(apiInstance,'/products');