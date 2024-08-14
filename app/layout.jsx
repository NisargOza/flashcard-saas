import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Flashcard app',
  description: 'Flashcard app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
