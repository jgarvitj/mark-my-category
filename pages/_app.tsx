import { AppType } from 'next/dist/shared/lib/utils';
import { trpcClient, trpc } from '../src/utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <Component {...pageProps} />
      </trpc.Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
