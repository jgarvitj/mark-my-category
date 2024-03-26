// src/trpc/router/user.ts
import { tRPC } from '../createRouter'; 
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '../../server/prismaClient'; 
import AppRouter from 'next/dist/client/components/app-router';

export const userRouter = tRPC.router({
  // User registration procedure
  register: tRPC.procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6), // Simple validation example
    }))
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return { id: newUser.id, email: newUser.email };
    }),
  // You can add more user-related procedures (e.g., login) here
});
