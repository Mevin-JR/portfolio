import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { prompt: "login" } },
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session.user.email !== process.env.ADMIN_EMAIL) {
        session.user.role = "unauthorized";
      } else {
        session.user.role = "admin";
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
