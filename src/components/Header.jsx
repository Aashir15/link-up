import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown, Logs, Map } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./PrimaryBtn";


export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const langRef = useRef(null);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Dealer Management", path: "/dealer-management" },
        { name: "Financing", path: "/financing" },
        { name: "International Top-Up", path: "/international" },
        {
            name: "Marketing",
            path: "https://airtable.com/appd3swEewOzPRnIw/shr90F7enY9OQ8WuQ?WmrM2=allRecords",
            external: true,
        },
        { name: "FAQs", path: "/faqs" },
    ];

    // Sticky scroll
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full">

            {/* Top Bar */}
            <div className="bg-(--text-color) text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:9015571809" className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>901-557-1809</span>
                        </a>
                        <a className="flex items-center gap-2">
                            <Map size={16} />
                            <span>3124 Brother Blvd, Suite 104, Bartlett, TN 38133</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-lg">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-instagram-fill cursor-pointer"></i>
                        </a>

                        <a
                            href="https://www.facebook.com/exm#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-facebook-fill cursor-pointer"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/annie-obregon-29a46241/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-linkedin-fill cursor-pointer"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <div
                className={`bg-[#014d7d] transition-all duration-300 z-50 ${sticky
                    ? "fixed top-0 left-0 w-full shadow-md"
                    : "relative"
                    }`}
            >
                <div
                    className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-300 ${sticky ? "py-2" : "py-4"
                        }`}
                >

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/assets/logo.webp"
                            alt="logo"
                            className={`object-contain transition-all duration-300 origin-left ${sticky ? "h-10" : "h-11"
                                }`}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-5 font-medium text-white">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">

                                {/* External Link */}
                                {link.external ? (
                                    <a
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1"
                                    >
                                        {link.name}
                                    </a>

                                ) : (
                                    <Link to={link.path}>
                                        {link.name}
                                    </Link>
                                )}

                            </div>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button text="Contact Us" to="contact" />
                        <Button
                            text="Login to Portal"
                            to="https://portal.surgepays.com/MemberZone/Login.aspx"
                            newTab
                        />
                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden flex items-center gap-4">

                        <button onClick={() => setOpen(true)}>
                            <Logs className="text-white" size={26} />
                        </button>
                    </div>

                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-gray-300 border-b">
                    <img src="/assets/logo.png" className="w-20" alt="" />
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">

                            <div className="flex items-center justify-between">

                                {/* External Link */}
                                {link.external ? (
                                    <a
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(false)}
                                        className="py-2"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setOpen(false)}
                                        className="py-2"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                            </div>

                        </div>
                    ))}


                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div onClick={() => setOpen(false)}>
                        <Button text="Contact Us" to="/contact" />
                    </div>
                    <Button
                        text="Login to Portal"
                        to="https://portal.surgepays.com/MemberZone/Login.aspx"
                        newTab
                    />
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}