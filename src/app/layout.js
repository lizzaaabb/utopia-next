import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageContext';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "Utopia VIP Tourism & Real Estate",
    description: "...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body>
                <LanguageProvider>
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}