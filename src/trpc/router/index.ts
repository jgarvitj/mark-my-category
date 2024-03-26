import { createRouter } from '../createRouter';
import { userRouter } from './user';

export const appRouter = createRouter()
  .merge('user.', userRouter);

// Export type definitions for your API
export type AppRouter = typeof appRouter;
