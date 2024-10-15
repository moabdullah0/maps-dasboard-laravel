import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    activityId: number | null;
    accessToken: string;
  }

  interface Session {
    user: User;
    accessToken: string;
  }
}
