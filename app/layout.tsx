import LayoutProvider from '@components/LayoutProvider';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>ABC NEWS</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <LayoutProvider>
          <Header />
          <div className='max-w-6xl mx-auto px-5 pt-10 min-h-screen'>{children}</div>
        </LayoutProvider>
        <Footer />
      </body>
    </html>
  );
}
