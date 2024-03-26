// src/server/service/root.ts
import { initTRPC } from '@trpc/server';
import { userRouter } from '../../trpc/router/user';
// Import other routers as needed, e.g., import { postRouter } from './post';

const t = initTRPC.create();

// Combine all your routers here
export const appRouter = t.router({
  user: userRouter,
  // Merge other routers as needed, e.g., post: postRouter,
});

// Export the type of your application's router
export type AppRouter = typeof appRouter;
