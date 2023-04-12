import AppProvider from '@/context/AppProvider';
import Layout from '@/layout';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </AppProvider>
  );
}
