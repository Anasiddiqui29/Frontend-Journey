import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Geist, Geist_Mono , Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LemonUp",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
          
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
