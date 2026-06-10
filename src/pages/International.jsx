const brands = [
    {
        image: "/assets/logos/logo-1.webp",
    },
    {
        image: "/assets/logos/logo-2.webp",
    },
    {
        image: "/assets/logos/logo-3.webp",
    },
    {
        image: "/assets/logos/logo-4.webp",
    },
    {
        image: "/assets/logos/logo-5.webp",
    },
    {
        image: "/assets/logos/logo-6.webp",
    },
    {
        image: "/assets/logos/logo-7.webp",
    },
    {
        image: "/assets/logos/logo-8.webp",
    },
    {
        image: "/assets/logos/logo-9.webp",
    },
    {
        image: "/assets/logos/logo-10.webp",
    },
    {
        image: "/assets/logos/logo-11.webp",
    },
    {
        image: "/assets/logos/logo-12.webp",
    },
    {
        image: "/assets/logos/logo-13.webp",
    },
     {
        image: "/assets/logos/logo-14.webp",
    },
    {
        image: "/assets/logos/logo-15.webp",
    },
    {
        image: "/assets/logos/logo-16.webp",
    },
    {
        image: "/assets/logos/logo-17.webp",
    },
    {
        image: "/assets/logos/logo-18.webp",
    },
    {
        image: "/assets/logos/logo-19.webp",
    },
     {
        image: "/assets/logos/logo-20.webp",
    },
     {
        image: "/assets/logos/logo-21.webp",
    },
    {
        image: "/assets/logos/logo-22.webp",
    },
     {
        image: "/assets/logos/logo-23.webp",
    },

    {
        image: "/assets/logos/logo-24.webp",
    },
    {
        image: "/assets/logos/logo-25.webp",
    }, {
        image: "/assets/logos/logo-26.webp",
    },
    {
        image: "/assets/logos/logo-27.webp",
    },

    {
        image: "/assets/logos/logo-28.webp",
    },
    {
        image: "/assets/logos/logo-29.webp",
    },
    {
        image: "/assets/logos/logo-30.webp",
    },
    {
        image: "/assets/logos/logo-31.webp",
    },
    {
        image: "/assets/logos/logo-32.webp",
    },
    {
        image: "/assets/logos/logo-33.webp",
    },
    {
        image: "/assets/logos/logo-34.webp",
    },
    {
        image: "/assets/logos/logo-35.webp",
    },
    {
        image: "/assets/logos/logo-36.webp",
    },
    {
        image: "/assets/logos/logo-37.webp",
    },
    {
        image: "/assets/logos/logo-38.webp",
    },
    {
        image: "/assets/logos/logo-39.webp",
    },
    {
        image: "/assets/logos/logo-40.webp",
    },
    {
        image: "/assets/logos/logo-41.webp",
    },
    {
        image: "/assets/logos/logo-42.webp",
    },
    {
        image: "/assets/logos/logo-43.webp",
    },
    {
        image: "/assets/logos/logo-44.webp",
    },
    {
        image: "/assets/logos/logo-45.webp",
    },
    {
        image: "/assets/logos/logo-46.webp",
    },
    {
        image: "/assets/logos/logo-47.webp",
    },
     {
        image: "/assets/logos/logo-48.webp",
    },
     {
        image: "/assets/logos/logo-49.webp",
    },
    {
        image: "/assets/logos/logo-50.webp",
    },
];

export default function International() {
    return (
        <>
            <div className="py-8 flex justify-center px-4">
                <img
                    src="assets/international.webp"
                    alt=""
                    className=" w-300 rounded-2xl"
                />
            </div>

            <section className="px-4 md:py-12 py-8">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {brands.map((brand) => (
                            <div
                                key={brand.title}
                                className="flex items-center justify-center h-22 p-4"
                            >
                                <img
                                    src={brand.image}
                                    alt={brand.title}
                                    className="max-h-20 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
