
import "./globals.css";

import { Lilita_One, Prompt } from 'next/font/google';
import LayoutContent from "./components/LayoutContant/LayoutContent";
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', "600", '700', "800"],
});
const lilitaOne = Lilita_One({
  subsets: ["latin"], // Load only the necessary characters
  weight: "400", // Lilita One only has 400 weight
  display: "swap", // Improves performance
});
export const metadata = {
  title: "Global Electronic",
  description: "Generated by Inovexa Com ltd",
};
export default function RouteLayout({ children }) {

  return (
    <html lang="en">
      <body className={prompt.className}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
