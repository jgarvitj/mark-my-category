import { createRouter } from '../createRouter';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '../prisma';

export const userRouter = createRouter()
  .mutation('register', {
    input: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
    async resolve({ input }) {
      const { email, password } = input;
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return user;
    },
  });
  // Add more user-related endpoints as needed
