import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {

    async session({ session, user, token }) {
      console.log('session session-> ', session)
      console.log('session user-> ', user)
      console.log('session token-> ', token)
      session.user.login = token.id;
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('NextAuth token-> ', token)
      console.log('NextAuth user-> ', user)
      console.log('NextAuth account-> ', account)
      console.log('NextAuth profile-> ', profile)
      console.log('NextAuth isNewUser-> ', isNewUser)
      if (profile) {
        console.log('Adding id in token -> ')
        token.id = profile.login
      }
      return token
    }
  }

}
export default NextAuth(authOptions)