import { Link } from "react-router-dom";
import {
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B6FAF] text-white">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* Left Side */}
                    <div>
                        <h3 className="font-bold text-xl mb-1">
                            Talk to the agent
                        </h3>
                        <div className="flex items-center gap-2 mb-1 text-sm">
                            <Phone size={14} />
                            <a
                                href="tel:9015571809"
                                className="hover:text-(--secondary-color) transition-colors"
                            >
                                901-557-1809
                            </a>
                        </div>

                        <p className="text-md text-white/90 mb-3">
                            Our office hours are Monday to Friday 9am to 6pm CST
                        </p>

                        <h3 className="font-bold text-xl mb-3">
                            Corporate Headquarters
                        </h3>

                        <div className="flex items-start gap-2 text-sm"> <MapPin size={14} className="mt-1 shrink-0" /> <span> 3124 Brother Blvd, Suite 104, Bartlett, TN 38133 </span> </div>
                    </div>

                    {/* Right Side */}
                    

                    <div className="flex flex-col items-end justify-center md:justify-end">
                        {/* Logo -> Home */}
                        <Link to="/">
                            <img
                                src="/assets/logo.webp"
                                alt="LinkUp Mobile"
                                className="h-20 mb-6 object-contain "
                            />
                        </Link>

                        {/* Partner / Store Links */}
                        <div className="flex flex-wrap gap-3">
                            <img src="/assets/f-1.webp" alt="LinkUp Mobile" className="h-10 object-contain" />

                            <a
                                href="https://www.nasdaq.com/market-activity/stocks/surg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/assets/f-2.webp"
                                    alt="Link 2"
                                    className="h-10 "
                                />
                            </a>

                            <a
                                href="https://www.bbb.org/us/tn/bartlett/profile/telecommunications/surgepays-inc-0543-44137773#bbbonlineclick"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/assets/f-3.webp"
                                    alt="Link 3"
                                    className="h-10 "
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-white py-2 text-center text-md font-semibold">
                © 2026 LinkUp Mobile.
            </div>
        </footer>
    );
}