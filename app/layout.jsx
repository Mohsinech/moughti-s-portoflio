import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Abdelmoughite Naoumi — Cybersecurity Engineering Student</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
