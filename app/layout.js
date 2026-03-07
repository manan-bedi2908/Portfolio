import "./globals.css";

export const metadata = {
  title: "Manan Bedi | Product, AI, and Data",
  description:
    "Portfolio of Manan Bedi - Team Lead Senior Product Analyst at Paytm, AI practitioner, researcher, and speaker."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
