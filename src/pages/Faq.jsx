import { useState } from "react";
import {
    ChevronDown,
    Truck,
    WalletCards,
    Headset,
    ShieldCheck,
} from "lucide-react";

const faqData = [
    {
        question: "Is roaming in Canada and Mexico included in the plan?",
        answer:
            "Yes! LinkUp Mobile provides the largest coverage area in North America, on America’s Most Reliable Network. This includes Text and Talk to, and from, anywhere in the USA, Canada & Mexico.",
    },
    {
        question: "When does the plan expire?",
        answer:
            "The plan expires 30 days after your first date of purchase. For example, if you buy a plan on the 15th of the month, your plan will expire the 14th of the following month. To avoid interruptions, please renew before expiry. Does not apply to subscription members.",
    },
    {
        question: "Do LinkUp Mobile plans include 5G coverage?",
        answer:
            "Yes, 5G is included with all monthly plans. To use 5G, you must have a 5G capable device and be in a 5G coverage area.",
    },
    {
        question: "How do I know if I have LinkUp mobile coverage in my area?",
        answer:
            "LinkUp Mobile operates on America’s Most Reliable Network, providing nationwide coverage. Please use the ZIP Code verifier to confirm service in your area.",
    },
    {
        question: "How do I order SIM cards?",
        answer: "You can order SIM cards on your dealer portal.",
    },
    {
        question: "How does customer pay their bill?",
        answer:
            "Customers can renew or purchase their LinkUp Mobile plan using a debit or credit card on linkupmobile.com or at authorized retail locations.",
    },
    {
        question: "Does LinkUp Mobile offer unlimited talk, text, and data?",
        answer:
            "Yes, we offer unlimited talk and text on all plans, with flexible data options to fit your needs.",
    },
    {
        question: "What type of phone works on Linkup Mobile?",
        answer:
            "You need a 5G/4G LTE unlocked phone compatible with AT&T. Compatibility is verified during device check on the dealer portal.",
    },
    {
        question: "Need Help?",
        answer: "Call us at 833-697-8743 (24/7 support).",
    },
];


const features = [
    {
        icon: Truck,
        title: "Quick Delivery Get your SIM card delivered to your doorstep. Enjoy our service no matter where you are.",
        desc: "Get your SIM card delivered to your doorstep anywhere.",
    },
    {
        icon: WalletCards,
        title: "Flexible Plans Choose from a variety of plans that fit your needs and budget, without being locked into long-term commitments.",
        desc: "Choose plans that fit your budget without long-term contracts.",
    },
    {
        icon: Headset,
        title: "Customer Satisfaction Guarantee We are committed to providing you with the best service. Enjoy 24/7 customer support for any issues you may have.",
        desc: "24/7 support for all your issues and questions.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Transactions Enjoy peace of mind with our secure payment options. Your personal and financial information is always protected.",
        desc: "Your data and payments are always fully protected.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-50 to-white py-16 px-4">

            <div className="max-w-4xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-slate-600 text-lg">
                        Find answers to our most common questions. Need help? Contact support anytime.
                    </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-slate-200 rounded-2xl bg-white shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="text-base md:text-lg font-semibold text-slate-900">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-6 h-6 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* FIXED ANIMATION (no cut off on mobile) */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-75 pb-5" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* FEATURE ICON BOXES (BOTTOM SECTION) */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                            >
                                {/* ICON BOX */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--primary-color) text-white shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="font-medium text-center text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}