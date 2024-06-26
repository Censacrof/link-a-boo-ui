import { ColorModeProvider } from "@/common/colorMode";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
				if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
					console.log("dehhhh")
				  document.documentElement.classList.remove('light')
				  document.documentElement.classList.add('dark')
				} else {
					console.log("ohhhhhh")
				  document.documentElement.classList.remove('dark')
				  document.documentElement.classList.add('light')
				}
			`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </body>
    </html>
  );
}
