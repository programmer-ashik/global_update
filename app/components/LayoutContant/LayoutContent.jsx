"use client"; // This is now a Client Component

import { usePathname } from "next/navigation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


export default function LayoutContent({ children }) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");

    return (
        <div className="relative max-w-7xl mx-auto">
            {!isDashboard && (
                <div className="fixed top-0 z-10 w-full">
                    <Navbar />
                </div>
            )}
            {children}
            {!isDashboard && <Footer />}
        </div>
    );
}
