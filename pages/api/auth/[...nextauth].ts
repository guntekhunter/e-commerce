import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "629123249260-5pvhgif13gkckah1nu15mdq803lai50u.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
});
