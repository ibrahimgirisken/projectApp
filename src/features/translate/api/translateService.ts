import { createServerApi } from "@/lib/api/serverApi";
import { TranslateKey } from "../types/translate";
import { createApiService } from "@/lib/api/createApiService";
const apiInstance=createServerApi();
export const translateService=createApiService<TranslateKey>(apiInstance,'translations');