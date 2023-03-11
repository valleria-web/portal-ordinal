"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import SearchPosts from "./components/searchPosts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const header = (
    <header>
      <div className="text-center p-6">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <Link href="/">
          <h1 className="text-3xl font-bold">Portal Ordinal</h1>{" "}
        </Link>
      </div>
    </header>
  );

  const main = (
    <main>
      <SearchPosts/>
    </main>
  );

  const footer = (
    <footer>
      <div className="text-center text-slate-400 border-t border-slate-500 mt-6 py-6">
        <h3>Ordinals Observatory</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body>
        {header}
        {main}
        <div className="mx-auto max-w-4xl px-6 pt-4">
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}

