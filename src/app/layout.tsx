import { cn } from "@/utils";
import { Outfit } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";
import "swiper/swiper-bundle.css";
import "./globals.css";
import Providers from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn("min-h-screen dark:bg-gray-900", outfit.className)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
