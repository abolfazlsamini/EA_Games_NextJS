import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "EA",
  description: "EA Sports",
};

export const druk_text_medium = localFont({
  src: [
    {
      path: "../../public/fonts/home/druk_text_medium.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-druk_text_medium",
});
export const druk_wide_super = localFont({
  src: [
    {
      path: "../../public/fonts/home/druk_wide_super.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-druk_wide_super",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${druk_text_medium.variable} 
          ${druk_wide_super.variable} 
          `}
      >
        {children}
      </body>
    </html>
  );
}
