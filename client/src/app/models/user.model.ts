export interface User {
  id: string;
  username: string;
  password?: string;
  access_token: string;
  statusCode: number;
}

export type AuthType = 'login' | 'register';
