import axios from "axios";
import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post("https://tvet.alter-company.com/api/v1/login", credentials);

          if (res.status === 200 && res.data) {
            return {
              id: res.data.user.id,
              name: res.data.user.name,
              email: res.data.user.email,
              createdAt: res.data.user.created_at,
              updatedAt: res.data.user.updated_at,
              activityId: res.data.user.activity_id,
              accessToken: res.data.token,
            };
          }
          return null;
        } catch (e) {
          console.error("Login error:", e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as User;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
