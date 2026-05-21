import { Inter } from "next/font/google";
import ToastProvider from "@/components/providers/ToastProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Paws & Home | Emotional Precision in Pet Adoption",
  description:
    "Ethical pet adoption platform connecting you with shelters and rescues.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
