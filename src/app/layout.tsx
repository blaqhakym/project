import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Amrah Jobs",
    template: "%s | Amrah Jobs",
  },
  description: "The Job Search Website for You!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        {/* header */}
        <div>
          <Link href={"/about"} className="focus:text-red-700">
            About
          </Link>
        </div>
        {children}
        {/* footer */}
      </body>
    </html>
  );
}
