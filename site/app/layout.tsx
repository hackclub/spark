import "./globals.css";
import { Inter, Rubik } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Spark",
  description:
    "Spark is a gender-focused high school hackathon open to all, taking place in SF from August 12 to August 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
