import { Inter } from "next/font/google";
import "./globals.css";
import { STYLING_CONFIG } from "../../config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={STYLING_CONFIG.theme}>
      <body className={`${inter.className} container mx-auto`}>{children}</body>
    </html>
  );
}
