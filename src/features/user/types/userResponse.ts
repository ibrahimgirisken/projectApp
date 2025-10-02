export interface User {
  id: string;
  email: string;
  nameSurname: string;
  userName: string;
  twoFactorEnabled?: boolean;
}

export interface UserResponse {
  id: string;
  users: User[];
  totatlUserCount: number;
}
