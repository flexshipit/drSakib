import { Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata = {
  title: "Dr. S. M. Sakib Kabir | Cancer Surgeon in Khulna",
  description:
    "Portfolio of Dr. S. M. Sakib Kabir, consultant cancer surgeon and laparoscopic surgery specialist at 250 Bedded General Hospital, Khulna. BMDC registration A-63519.",
};

export const viewport = {
  themeColor: "#0e7c74",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
