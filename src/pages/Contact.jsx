import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        storeName: "",
        phone: "",
        email: "",
        storeType: "",
        businessAddress: "",
        business: "",
        city: "",
        state: "",
        zipCode: "",
        title: "",
        numberOfLocations: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const storeTypes = [
        "Independent Cellphone Store",
        "Computer Repair Shop",
        "Check Cashing Outlet",
        "Store Inside Supermarket",
        "Store Inside Gas Station",
        "Convenience Store",
        "Multi Services Business",
        "Travel Agency",
        "Hotel Business",
        "Online Retailer",
        "Master Distributor Wholesaler",
        "Other",
    ];

    const validateForm = () => {
        const newErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = "This field is required";
            }
        });

        if (
            formData.email &&
            !/^\S+@\S+\.\S+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        const data = {
            access_key: "c8025cba-cb7c-48bd-bbc4-1f59cfd3c3a7",
            subject: "New Store Inquiry",
            from_name: "LinkUp Mobile",
            ...formData,
        };

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            if (result.success) {
                setSuccess(true);

                setFormData({
                    fullName: "",
                    storeName: "",
                    phone: "",
                    email: "",
                    storeType: "",
                    businessAddress: "",
                    business: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    title: "",
                    numberOfLocations: "",
                    comments: "",
                });
            }
        } catch (error) {
            alert("Failed to submit form.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-300 focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/30";

    const errorClass = "mt-1 text-xs text-red-500";

    return (
        <section className="md:py-12 py-8 px-6 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-center pb-6 ">
                    <img
                        src="assets/contact.webp"
                        alt=""
                        className="h-auto border border-gray-200 rounded-3xl shadow-lg"
                    />
                </div>

                <div className="bg-white border border-gray-300 rounded-3xl shadow-2xl p-6 md:p-10">
                    {success && (
                        <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700">
                            <CheckCircle size={20} />
                            <p>Form submitted successfully.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name *"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            {errors.fullName && (
                                <p className={errorClass}>{errors.fullName}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="storeName"
                                placeholder="Store Name *"
                                value={formData.storeName}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            {errors.storeName && (
                                <p className={errorClass}>{errors.storeName}</p>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div>
                            <select
                                name="storeType"
                                value={formData.storeType}
                                onChange={handleChange}
                                className={inputClass}
                            >
                                <option value="">
                                    --- Select Choice ---
                                </option>
                                {storeTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="businessAddress"
                                placeholder="Business Address *"
                                value={formData.businessAddress}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="business"
                                placeholder="Business *"
                                value={formData.business}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            <input
                                type="text"
                                name="city"
                                placeholder="City *"
                                value={formData.city}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder="State *"
                                value={formData.state}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Zip Code *"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title *"
                                value={formData.title}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="number"
                                name="numberOfLocations"
                                placeholder="Number of Location *"
                                value={formData.numberOfLocations}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <textarea
                                name="comments"
                                rows="5"
                                placeholder="Comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-(--secondary-color) px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {loading ? "Submitting..." : "Submit"}
                                <Send size={18} />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}