import React from 'react'

const plans = [
    {
        name: "STARTER",
        price: "$10",
        desc: "1GB, Light users",
        features: [
            "Unlimited Talk & Text",
            "1 GB High-speed data",
            "Perfect for light data use",
            "Affordable/Flexible add-ons",
            "Global Roaming via WiFi Calling",
        ],
    },
    {
        name: "EXPLORE",
        price: "$20",
        desc: "5 GB, Everyday use + international perks",
        features: [
            "Unlimited Talk & Text",
            "5 GB high-speed data",
            "Affordable/Flexible add-ons",
            "Free Roaming in Mexico & Canada",
            "Global Roaming via WiFi Calling",
        ],
        badge: "$18 with Auto Pay",
    },
    {
        name: "PREMIUM",
        price: "$30",
        desc: "12 GB, Streaming & multi-service",
        features: [
            "Unlimited Talk & Text",
            "12 GB high-speed data",
            "100+ International Calling Destinations",
            "Free Roaming in Mexico & Canada",
            "Global Roaming via WiFi Calling",
        ],
        badge: "$27 with Auto Pay",
    },
    {
        name: "UNLIMITED",
        price: "$40",
        desc: "30GB, Heavy usage and roaming",
        features: [
            "Unlimited data",
            "30 GB high-speed data",
            "100+ International Calling Destinations",
            "Free Roaming in Mexico & Canada",
            "Global Roaming via WiFi Calling",
        ],
        badge: "$38 with Auto Pay",
    },
    {
        name: "UNLIMITED PLUS",
        price: "$50",
        desc: "50GB, all the data, all the speed",
        features: [
            "Unlimited data",
            "Unlimited Talk & Text",
            "100+ International Calling Destinations",
            "Free Roaming in Mexico & Canada",
            "Global Roaming via WiFi Calling",
        ],
        badge: "$46 with Auto Pay",
    },
];

export default function Plans() {
  return (
      <section className="md:py-16 py-8 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto px-4">

              <h2 className="text-center text-3xl md:text-5xl font-bold text-(--primary-color)">
                  All Plans Include Hotspot Data
              </h2>

              {/* Promotion Image */}
              <div className="flex justify-center my-10">
                  <img src="assets/home-heading.webp" alt="" />
              </div>

              {/* Plans */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

                  {plans.map((plan) => (
                      <div
                          key={plan.name}
                          className="relative rounded-xl border-3 border-(--secondary-color) bg-white p-5 shadow-sm"
                      >
                          {plan.badge && (
                              <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                  {plan.badge}
                              </div>
                          )}

                          <h3 className="text-md font-bold text-(--primary-color)">
                              {plan.name}
                          </h3>

                          <div className="mt-2">
                              <span className="text-5xl font-bold text-(--primary-color)">
                                  {plan.price}
                              </span>
                              <span className="text-xl font-bold text-(--primary-color)">
                                  /mo.
                              </span>
                          </div>

                          <p className="mt-3 text-md font-bold">
                              {plan.desc}
                          </p>

                          <ul className="mt-5 space-y-3">
                              {plan.features.map((feature) => (
                                  <li
                                      key={feature}
                                      className="flex items-start gap-2 text-md font-semibold text-gray-700"
                                  >
                                      <span className="mt-1.5 h-3 w-3 rounded-full bg-yellow-400 shrink-0"></span>
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}

              </div>
          </div>
      </section>
  )
}
