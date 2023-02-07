import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#000',
              color: '#FFF',
              border: '1px solid #65a30d',
              maxWidth: 600,
            },
          },
          error: {
            style: {
              background: '#000',
              color: '#FFF',
              border: '1px solid #dc2626',
              maxWidth: 600,
            },
          },
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
