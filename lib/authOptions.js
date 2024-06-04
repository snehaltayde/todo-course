import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/model/User';
import bcrypt from 'bcrypt';
import ConnectionDB from './dbConnect';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await ConnectionDB();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error('Password not matched');
        }
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = 'undefined';
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: 'http://localhost:3000/login',
  },
};
