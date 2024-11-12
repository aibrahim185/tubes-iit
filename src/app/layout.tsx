import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IIT Chatbot",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#3b224b]`}>{children}</body>
    </html>
  );
}
