// File: trpc/createContext.ts
import { inferAsyncReturnType } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Optionally, if you have authentication, you might want a function to extract
// the user from the request, assuming some authentication middleware adds user info to the request.
// import { getUserFromRequest } from '../server/auth'; 

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
  // Here, you could extract authentication info, if applicable
  // const user = await getUserFromRequest(req);

  return {
    req,
    res,
    prisma,
    // user, // Uncomment if using authentication
  };
};

// Use this helper type for strong typing of your context
export type Context = inferAsyncReturnType<typeof createContext>;
