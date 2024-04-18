export type Client = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  role: 'admin' | 'client'
};
