import { char } from "@/db/schema/char";
import db from "@/libs/useDrizzle";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) throw new Error("Invalid Next Auth Creds");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) return false;
      await db.select().from(char).where(eq(char.email, user.email));
      return true;
    },
    async session({ session, token, user }) {
      const chars = await db
        .select()
        .from(char)
        .where(eq(char.email, user.email));
      if (chars) session.user.chars = chars;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
