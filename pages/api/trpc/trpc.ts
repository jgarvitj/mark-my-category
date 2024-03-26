// pages/api/trpc/[trpc].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { appRouter } from '../../../src/trpc/router/index'; // Adjust the import path as needed
import { createContext } from '../../../src/trpc/createContext'; // Adjust as needed
import * as trpcNext from '@trpc/server/adapters/next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createContext,
    onError({ error }) {
      console.error(error);
    },
    // Add other config options as needed
  })(req, res);
}
