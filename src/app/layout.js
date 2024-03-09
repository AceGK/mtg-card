import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./styles/reset.scss";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });
// const plantin = localFont({ src: './fonts/mplantin.woff' })

export const metadata = {
  title: "MTG Card",
  description: "MTG Card React Component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={inter.className}
      >{children}</body>
    </html>
  );
}
