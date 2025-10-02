export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: {
    accessToken: string;
    expiration: string;
    refreshToken: string;
  };
}
