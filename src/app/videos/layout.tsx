import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "../../components/header";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 3600;

export default function VideosLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} dark`}>
        <div className="flex flex-col">
          {modal}

          <div className="z-50">
            <Header />
          </div>

          <Toaster />

          <div className="py-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
