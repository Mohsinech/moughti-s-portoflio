import { Header } from "@/components/layouts";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Abdelmoughite Naoumi — Cybersecurity Engineering Student</title>
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
