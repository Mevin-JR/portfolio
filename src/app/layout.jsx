import { Red_Hat_Mono, Aldrich } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Portfolio | Mevin JR",
  description:
    "Hi! I'm Mevin - a full-stack developer, new to the scene but passionate about building great software. Check out my porfolio to see what I've been up to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aldrich.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
