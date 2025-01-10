import "./globals.css";

export const metadata = {
  title: "BM Groups of Institutes",
  description: "BM Groups of Institutes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
