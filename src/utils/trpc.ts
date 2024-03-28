import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '../trpc/router/index'; 
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';

export const trpc = createTRPCReact<AppRouter>();

// Helper function to determine the API URL
function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side, can use relative URL
    return '';
  }
  // Server-side or static generation time, use absolute URL
  // Adjust according to your environment and deployment
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
}

// You might export a configured client for advanced use cases
export const trpcClient = trpc.createClient({
    links: [httpBatchLink({
        url: getBaseUrl(),
      }),
    ],
});
