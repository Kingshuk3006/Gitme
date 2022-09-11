import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GithubProvider ({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
//   callbacks: {
//     async session({session, token, user}) {
//       (session.user.username = session.user.name
//         .split (' ')
//         .join ('')
//         .toLocaleLowerCase ()), (session.user.uid = token.sub);
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET
});
