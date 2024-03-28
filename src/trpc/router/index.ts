// // src/trpc/router/index.ts
// import { initTRPC } from '@trpc/server';
// import { userRouter } from './user';

// const t = initTRPC.create();

// export const appRouter = t.router({
//   user: userRouter,
// });

// // Export the procedure types
// export type AppRouter = typeof appRouter;


// src/trpc/router/index.ts
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { userRouter } from './user';

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  user: userRouter,
  // include other sub-routers here
});

// The type of `appRouter` is what we refer to as `AppRouter`
export type AppRouter = typeof appRouter;
