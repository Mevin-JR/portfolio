import { Aldrich } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Portfolio | Mevin JR",
  description:
    "Hi! I'm Mevin - a full-stack developer, new to the scene but passionate about building great software. Check out my porfolio to see what I've been up to.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aldrich.variable} antialiased`}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
