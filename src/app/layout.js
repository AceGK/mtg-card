import { Inter } from "next/font/google";
import "./styles/reset.scss";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MTG Card",
  description: "MTG Card React Component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
