export interface ApplicationService {
  id: string;
  name: string;
  actions: Action[];
}

export interface Action {
  actionType: string;
  httpType: string;
  definition: string;
  code: string;
}
