import { useEffect, useState } from "react";
import {
    TrendingUp,
    Lightbulb,
    Target,
    BadgeDollarSign,
    Megaphone,
    ArrowUpCircle,
    Search,
} from "lucide-react";

import Button from "../components/PrimaryBtn";
import Plans from "../components/Plans";


const benefits = [
    {
        id: 1,
        title: "$10 Starting Plans",
        description:
            "We sell affordable plans that customers actually want.",
        icon: TrendingUp,
        yellow: false,
    },
    {
        id: 2,
        title: "High-Margin Low Effort",
        description:
            "Like selling chips at checkout, no expertise needed to earn gross margin.",
        icon: Lightbulb,
        yellow: true,
    },
    {
        id: 3,
        title: "All-Inclusive Support",
        description:
            "Device, marketing materials 24/7 support & warranty handled by SurgePays.",
        icon: Target,
        yellow: false,
    },
    {
        id: 4,
        title: "Recurring Commission",
        description:
            "With returning customers every month, get paid out weekly from top-ups and next day for activations.",
        icon: BadgeDollarSign,
        yellow: false,
    },
    {
        id: 5,
        title: "Digital Promos",
        description:
            "Eye-catching promos that drive traffic to the store. Includes online marketing + in-store promotional materials.",
        icon: Megaphone,
        yellow: true,
    },
    {
        id: 6,
        title: "Upsell Opportunities",
        description:
            "Airtime, gift cards, & top-ups options for whatever your customers need.",
        icon: ArrowUpCircle,
        yellow: false,
    },
];

const faqs = [
    {
        title: "How and when do I get paid?",
        text: "SurgePays will pay Dealer a fixed dollar amount per month for each Subscriber Activation for up to three (3) months on active line based on the Subscriber MRC as illustrated in table above. Commission is paid by ACH directly to your bank account on next business day.",
    },
    {
        title: "Is there a volume cap on commissions?",
        text: "Not at all earn consistent renewal, no matter how many.",
    },
    {
        title: "Do I need technical expertise?",
        text: "None. Everything included, pre-packaged, and visually guided.",
    },
    {
        title: "Who handles customer support?",
        text: "SurgePays offers 24/7 support & warranty—no extra work for you.",
    },
    {
        title: "Any setup costs or contracts?",
        text: "No enrollment fees and no long-term commitment.",
    },
];

const banners = [
    "/assets/banner.png",
    "/assets/banner-1.webp",
    "/assets/banner-2.webp",
];


function Home() {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative bg-(--primary-color)">
                <div className="max-w-7xl mx-auto py-12 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="primary-heading mt-2 text-white uppercase">
                                Increase Your Revenue With
                                <br />
                                <span className="text-(--secondary-color)">LinkUp's</span>
                            </h2>

                            <p className="mt-4 text-2xl font-semibold text-white leading-relaxed">
                                “Earn High Spiff up to 3 Months and 10% Margin on LinkUp Refills”
                            </p>

                            <p className="mt-4 text-xl text-white">
                                Earn Residuals and make Instant Commission’s on Wireless Refills
                                and International Top-Ups!
                            </p>

                            <div className="my-6 h-1 bg-(--secondary-color) w-full"></div>

                            <p className="text-lg font-semibold text-white">
                                LinkUp’s works with AT&T compatible and GSM UNLOCKED Devices
                            </p>

                            <div className="my-6 h-1 bg-(--secondary-color) w-full"></div>

                            <h3 className="text-4xl font-bold text-white">
                                Now Introducing
                            </h3>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                                <img
                                    src="/assets/home-1.png"
                                    alt="Low Weekly Payments"
                                    className="h-20 object-contain"
                                />
                                <img
                                    src="/assets/home-2.png"
                                    alt="Low Weekly Payments"
                                    className="h-15 object-contain"
                                />
                            </div>
                        </div>

                        <div className="relative w-full max-w-130 md:h-125 h-105 mx-auto">
                            {banners.map((banner, index) => (
                                <img
                                    key={index}
                                    src={banner}
                                    alt={`Banner ${index + 1}`}
                                    className={`absolute inset-0 object-contain transition-opacity duration-1000 ${active === index
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full leading-none">
                    <svg
                        viewBox="0 0 1440 120"
                        className="block w-full h-12"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
                        />
                    </svg>
                </div>
            </section>

            <div className="flex justify-center">
                <img
                    src="assets/home-banner.webp"
                    alt=""
                    className="h-auto"
                />
            </div>

            <div className="relative bg-(--primary-color) w-full flex justify-center py-6 overflow-hidden">
                <h1 className="md:text-2xl text-xl text-center text-white font-bold pb-6 px-4">
                    LinkUp Mobile provides powerful Nationwide 5G/4G service on America's
                    Largest and most Trusted Network!
                </h1>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full leading-none">
                    <svg
                        viewBox="0 0 1440 120"
                        className="block w-full h-12"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
                        />
                    </svg>
                </div>
            </div>

            <Plans />

            <div className="relative bg-(--secondary-color) w-full flex justify-center py-6 overflow-hidden">
                <h1 className="md:text-2xl text-xl text-center text-white font-bold pb-6 px-4">
                    UNLIMITED CALLING TO 100+ INTERNATIONAL DESTINATIONS!
                </h1>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full leading-none">
                    <svg
                        viewBox="0 0 1440 120"
                        className="block w-full h-12"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex justify-center">
                <img
                    src="assets/countries.webp"
                    alt=""
                    className="h-auto"
                />
            </div>

            <section className="md:py-16 py-8 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-(--primary-color)">
                        What Does LinkUp Unlock For Retail Partners?
                    </h2>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`relative rounded-3xl p-8 text-center max-w-sm mx-auto flex flex-col justify-center shadow-lg ${item.yellow
                                        ? "bg-(--secondary-color)"
                                        : "bg-(--primary-color)"
                                        }`}
                                >

                                    <div className={`absolute text-xl -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full text-white font-semibold shadow-lg ${item.yellow
                                        ? "bg-(--primary-color)"
                                        : "bg-(--secondary-color)"
                                        }`}>
                                        {item.id}
                                    </div>

                                    <Icon
                                        size={60}
                                        strokeWidth={1.75}
                                        className="text-white mx-auto mb-4"
                                    />

                                    <h3
                                        className={`text-3xl font-bold ${item.yellow
                                            ? "text-(--primary-color)"
                                            : "text-(--secondary-color)"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`mt-4 text-md font-semibold leading-relaxed ${item.yellow
                                            ? "text-white"
                                            : "text-white/90"
                                            }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <img
                        src="assets/product.webp"
                        alt=""
                        className="h-auto"
                    />
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 md:py-16 py-8">
                <div className="border-3 border-(--secondary-color) rounded-2xl p-6 md:p-10">
                    {/* Top */}
                    <div className="text-center">
                        <h2 className="text-(--secondary-color) text-3xl md:text-4xl font-bold">
                            Become A Dealer Today!
                        </h2>

                        <p className="text-(--secondary-color) font-semibold mt-3 text-lg">
                            No hidden fees, No pressure Just opportunity!
                        </p>
                    </div>

                    <div className="h-0.5 bg-(--primary-color) my-8" />

                    {/* Title */}
                    <h3 className="text-center text-3xl md:text-5xl font-bold text-slate-800 mb-12">
                        Your Top Questions, answered
                    </h3>

                    {/* FAQ Layout */}
                    <div className="space-y-10">
                        {/* Row 1 */}
                        <div className="flex justify-start">
                            <FaqCard {...faqs[0]} />
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-end">
                            <FaqCard {...faqs[1]} />
                        </div>

                        {/* Row 3 */}
                        <div className="flex justify-start">
                            <FaqCard {...faqs[2]} />
                        </div>

                        {/* Row 4 */}
                        <div className="flex justify-end">
                            <FaqCard {...faqs[3]} />
                        </div>

                        {/* Row 5 */}
                        <div className="flex justify-start">
                            <FaqCard {...faqs[4]} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8 space-y-4">
                        <img
                            src="assets/faq-banner.webp"
                            alt=""
                            className="h-auto"
                        />
                        <h1 className="text-center text-(--primary-color) text-2xl font-semibold">Increase monthly revenue immediately and take control over predictable monthly foot traffic</h1>
                        <div>
                            <Button text="Sign up Now" to="contact" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}

export default Home;


function FaqCard({ title, text }) {
    return (
        <div className="w-full md:w-140 bg-white border-[3px] border-(--primary-color) rounded-2xl p-5 flex flex-col md:flex-row gap-4 items-center shadow-sm">
                <Search
                    size={38}
                    className="text-(--primary-color) shrink-0"
                    strokeWidth={2.5}
                />

            <div>
                <h4 className="font-bold text-xl text-slate-800 mb-2">
                    {title}
                </h4>

                <p className="text-md font-medium text-slate-600 leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}