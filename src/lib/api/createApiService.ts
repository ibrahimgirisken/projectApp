import { AxiosInstance } from 'axios';

type EntityWithOptionalId<ID = string> = { id?: ID };

type CreateDto<T extends EntityWithOptionalId> = Omit<T, 'id'>;
type UpdateDto<T extends EntityWithOptionalId> = Partial<Omit<T, 'id'>> & { id?: string };

export function createApiService<T extends EntityWithOptionalId>(
  api: AxiosInstance,
  basePath: string
) {
  return {
    getAllSingle: (): Promise<T[]> => api.get(`/${basePath}`).then((res) => res.data),

    getAll: (): Promise<T[]> =>
      api.get(`/${basePath}/all`).then((res) => res.data),

    getAllByLang: (lang: string): Promise<T[]> =>
      api.get(`/${basePath}/all?Language=${lang}`).then((res) => res.data),

    getByParams: (pUrl: string): Promise<T> =>
      api.get(`/${basePath}?${pUrl}`).then((res) => res.data),

    getById: (id: string): Promise<T> =>
      api.get(`/${basePath}/by-id?id=${id}`).then((res) => res.data),

    getByUrl: (slug: string): Promise<T> =>
      api.get(`/${basePath}/by-url?UrlAddress=${slug}`).then((res) => res.data),
    
    getByLang:(lang:string):Promise<T[]>=>
      api.get(`/${basePath}/by-lang?Language=${lang}`).then((res) => res.data),

    create: (data: CreateDto<T>): Promise<T> =>
      api.post(`/${basePath}/add`, data).then((res) => res.data),

    update: (data: UpdateDto<T>): Promise<T> =>
      api.put(`/${basePath}/update`, data).then((res) => res.data),

    delete: (id: string): Promise<any> => api.delete(`/${basePath}/${id}`).then((res) => res.data),
  };
}
