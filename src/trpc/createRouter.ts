// Import necessary utilities from tRPC
import { NextApiRequest, NextApiResponse } from 'next';
import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

const tRPC = initTRPC.create();

// Create a base router
const appRouter = tRPC.router({
  // Define your sub-routers and procedures here
});

// Export the type of your app's router
export type AppRouter = typeof appRouter;
export { appRouter, tRPC };

// Create a function to handle tRPC requests, integrating with Next.js API routes
export async function trpcHandler(req: NextApiRequest, res: NextApiResponse) {
  const createContext = async () => ({ /* Provide necessary context values */ });
  
  const handler = trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createContext,
  });

  return handler(req, res);
}
