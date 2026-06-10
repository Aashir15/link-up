import Button from "../components/PrimaryBtn";
const topImages = [
    "/assets/aud-1.webp",
    "/assets/aud-2.webp",
    "/assets/aud-3.webp",
    "/assets/aud-4.webp",
];

export default function About() {
    return (
        <>
            <section className="bg-(--primary-color)">
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="primary-heading mt-2 text-(--secondary-color)!">
                                About LinkUp Mobile
                            </h2>

                            <p className="mt-4 text-2xl font-semibold text-white leading-relaxed">
                                We connect the world for less
                            </p>

                            <p className="mt-4 text-xl text-white">
                                No contracts, Real customer support, and reliable service that fits your needs and budget.
                            </p>

                            <Button text="Get Unlimited Talk & Text at $10 Month" className="bg-[#004c7d]! mt-4" />
                        </div>

                        <div className="flex justify-center">
                            <img src="/assets/about.webp" alt="LinkUp BOGO Deal" className="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="mb-4 text-3xl md:text-5xl font-bold text-(--primary-color)">Why Choose Linkup?</h1>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-3">

                        {[
                            {
                                title: "Speaker Installation",
                                desc: "LinkUp offer plans that move with you, total flexibility, always.",
                            },
                            {
                                title: "Amplifier Setup",
                                desc: "No Contracts, No Credit Checks, No Hidden Fees.",
                            },
                            {
                                title: "Subwoofer Installation",
                                desc: "Nationwide 5G/4G service trusted by 1000's of retailers.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <span className="w-3 h-3 rounded-full bg-(--primary-color) mt-2 shrink-0"></span>

                                <p className="text-lg font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                title: "Speaker Installation",
                                desc: "Customer Portal + 24/7 human customer support.",
                            },
                            {
                                title: "Amplifier Setup",
                                desc: "Nationwide 5G Coverage on America's most reliable network.",
                            },
                            {
                                title: "Subwoofer Installation",
                                desc: "100+ Counties of Unlimited Calls.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <span className="w-3 h-3 rounded-full bg-(--primary-color) mt-2 shrink-0"></span>

                                <p className="text-lg font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-(--primary-color)">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">

                            <h2 className="primary-heading mt-2 text-(--secondary-color)!">
                                Our Mission
                            </h2>

                            <p className="mt-4 text-lg">
                                We’re on a mission to make wireless access a right, not a luxury. LinkUp Mobile helps bridge the digital divide by offering services to the under-banked and undeserved communities. We know that staying connected can change lives and we’re honored to be a part of that.
                            </p>

                            <p className="mt-4 text-lg">
                                Life’s complicated. Your phone service shouldn’t be. We keep it simple, affordable, and reliable. That’s LinkUp.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="/assets/about-1.webp"
                                alt="about"
                                className=""
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="">
                        <img
                            src="/assets/about-2.webp"
                            alt="about"
                            className=""
                        />
                    </div>

                    <div className="text-(--text-color)">

                        <h2 className="primary-heading mt-2 text-(--primary-color)!">
                            What Makes Us Different?
                        </h2>

                        <div className="space-y-2 mt-4">
                            <h3 className="text-(--primary-color) text-xl font-bold">Powered by Purpose</h3>

                            <p className="text-lg font-medium">
                                LinkUp Mobile is powered by SurgePays, built to serve underserved and underbanked communities.Life’s complicated. Your phone service shouldn’t be. We keep it simple, affordable, and reliable. That’s LinkUp.
                            </p>
                        </div>

                        <div className="space-y-2 mt-4">
                            <h3 className="text-(--primary-color) text-xl font-bold">Breaking Barriers</h3>

                            <p className="text-lg font-medium">
                                We make prepaid wireless simple and affordable — no contracts, no hidden fees, just service you can trust. Just LinkUp.
                            </p>
                        </div>

                        <div className="space-y-2 mt-4">
                            <h3 className="text-(--primary-color) text-xl font-bold">Expanding Access</h3>

                            <p className="text-lg font-medium">
                                Through SurgePays, we also support the Lifeline program with USAphone, ensuring eligible households stay connected.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-(--secondary-color) max-w-2xl mx-auto mb-8 rounded-3xl py-12 px-6 text-center">
                <h2 className="text-3xl text-(--primary-color) md:text-4xl font-bold mb-4">
                    Level Up with LinkUp
                </h2>

                <p className="text-lg opacity-90 max-w-2xl mx-auto font-semibold mb-8">
                    Thousands have already made the move to freedom, flexibility, and no contracts. LinkUp and live on your terms.
                </p>
            </section>

        </>
    )
}
