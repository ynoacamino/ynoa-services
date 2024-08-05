import { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { prisma } from '@/lib/prisma';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    };
  }
}

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
      if (!session.user.email) return session;

      let user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email: session.user.email,
            name: session.user.name,
            photo: session.user.image,
          },
        });
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};
