import axios from "axios";
import NextAuth, { AuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { JWT } from "next-auth/jwt";

interface Credentials {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

interface UserWithToken extends User {
  accessToken: string;
  tokenType: string;
}

async function login(credentials: Credentials): Promise<UserWithToken | null> {
  try {
    const res = await axios.post<LoginResponse>("https://tvet.alter-company.com/login", credentials);

    if (res.status === 200 && res.data) {
      return {
        id: credentials.email,
        name: credentials.email.split("@")[0],
        email: credentials.email,
        accessToken: res.data.accessToken,
        tokenType: res.data.tokenType,
      };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e) {
    console.error("Error during login:", e);
    throw new Error("Something went wrong.");
  }
}

export const authOptions: AuthOptions = {
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@email.com" },
        password: { label: "Password", type: "password", placeholder: "******" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const user = await login(credentials as Credentials);
          return user;
        } catch (e) {
          console.error("Authorization error:", e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && (user as UserWithToken).accessToken) {
        token.accessToken = (user as UserWithToken).accessToken;
        token.tokenType = (user as UserWithToken).tokenType;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        (session as Session & { accessToken: string }).accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
