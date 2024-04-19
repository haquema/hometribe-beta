import CredentialsProvider from 'next-auth/providers/credentials';
// import EmailProvider from 'next-auth/providers/email';
import prisma from '@/lib/prisma'
import { comparePasswords } from '@/lib/bcrypt'

export const options = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  providers: [
    // EmailProvider({

    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-email"
        },
        password: {
          label: "Password:", 
          type: "password",
          placeholder: "your-password"
        }
      },
      async authorize(credentials, req) {
        try {
          const userExists = await prisma.users.findUnique({
            where: {
              email: credentials.email,
            },
          })
          // console.log('this is after the try block calling prisma read query to find user', userExists);

          if (userExists) {
            // console.log("User Exists")
            const isMatch = await comparePasswords(credentials.password, userExists.password);

            if (isMatch) {
              // console.log("Passwords match")
              delete userExists.password;
              return userExists;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null; 
      },
    })
  ],
}
