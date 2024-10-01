"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Spinner from "@/components/spinner";
import { UserProvider } from '@/components/UserContext'; // Importa UserProvider

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular un retraso de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <html>
        <body>
          <Spinner />
        </body>
      </html>
    );
  }

  return (
    <UserProvider>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body className={inter.className}>

          {children}

      </body>
    </html>
    </UserProvider>
  );
}
