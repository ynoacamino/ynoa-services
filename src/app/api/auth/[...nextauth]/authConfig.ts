import { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authConfig: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    }),
  ],
  secret: process.env.NEXT_SECRET,
  callbacks: {
    async session({ session }) {
      if (!session.user) return session;

      // if (!session.user.email || !session.user.name || !session.user.image) return session;

      // const user = await prisma.user.upsert({
      //   where: {
      //     email: session.user.email,
      //   },
      //   create: {
      //     email: session.user.email,
      //     username: session.user.name,
      //     image: session.user.image,
      //   },
      //   update: {
      //   },
      // });

      return {
        ...session,
        user: {
          ...session.user,
          // id: user.id,
        },
      };
    },
  },
};
