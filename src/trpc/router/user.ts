// src/trpc/router/user.ts
import { z } from 'zod';
import { tRPC as t } from '../createRouter'; // Ensure the path matches where you initialize t
import { registerUser } from '../../server/api/user'; // Path to your service

export const userRouter = t.router({
  register: t.procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      // Delegates the actual registration logic to a service function
      return await registerUser(input);
    }),
});
