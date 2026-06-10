import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import {
    Smartphone,
    DollarSign,
    Globe2,
    RadioTower,
    IdCard,
    Search,
    Shuffle,
    PhoneCall,
    RefreshCcw,
    ReceiptText,
    FileBarChart,
    Headphones,
} from "lucide-react";
import Commission from "./Commission";

export default function Dealer() {
   
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const [phoneRows, setPhoneRows] = useState([]);
    const [phoneSearch, setPhoneSearch] = useState("");

    const [activeTab, setActiveTab] = useState("application");

    const tabs = [
        { id: "commission", label: "Commission Spiff Chart" },
        { id: "phones", label: "Compatible Phones" },
        { id: "apn", label: "APN Settings Android and iOS" },
        { id: "application", label: "Start Your Application" },
    ];

    const cards = [
        { title: "LinkUp Activations", icon: Smartphone },
        { title: "Wireless Refills", icon: DollarSign },
        { title: "International Long Distance TopUp", icon: Globe2 },
        { title: "International Wireless Top Up", icon: RadioTower },
        { title: "Get Customer Info", icon: IdCard },
        { title: "IMEI Compatibility Check", icon: Search },
        { title: "Swap Sim", icon: Shuffle },
        { title: "Change MDN", icon: PhoneCall },
        { title: "Check Port Status", icon: RefreshCcw },
        { title: "Daily Transactions", icon: ReceiptText },
        { title: "Real Time Reporting", icon: FileBarChart },
        { title: "24Hrs Customer Support", icon: Headphones },
    ];

    useEffect(() => {
        const loadExcel = async () => {
            try {
                const response = await fetch("/assets/device.xlsx");
                const arrayBuffer = await response.arrayBuffer();

                const workbook = XLSX.read(arrayBuffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setPhoneRows(jsonData);
            } catch (error) {
                console.error("Excel load error:", error);
            }
        };

        loadExcel();
    }, []);

    const visibleColumns = Object.keys(phoneRows[0] || {}).filter(
        (column) =>
            column !== "Launch Date" &&
            column !== "Software Version"
    );

    const filteredPhones = phoneRows.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(phoneSearch.toLowerCase())
        )
    );

    const checkPassword = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/check-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setShowPasswordModal(false);
                setPassword("");
                navigate("/commission");
            } else {
                setError("Incorrect password");
            }
        } catch (err) {
            setError("Something went wrong");
        }

        setLoading(false);
    };

    return (
        <section className="min-h-screen bg-white px-6 py-10">
            <div className="mx-auto max-w-6xl">
                {/* Tabs */}
                <div className="mx-auto mb-10 flex max-w-5xl flex-wrap items-center justify-center gap-4 rounded-xl bg-[#1377B3] px-6 py-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                if (tab.id === "commission") {
                                    setShowPasswordModal(true);
                                    return;
                                }

                                setActiveTab(tab.id);
                            }}
                            className={`rounded-full px-7 py-3 text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-(--secondary-color) text-white"
                                    : "bg-[#064C7A] text-white hover:bg-(--secondary-color)"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    {
                        showPasswordModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                                <div className="w-full max-w-md rounded-2xl bg-white p-6">
                                    <h2 className="text-xl font-bold mb-2">
                                        Dealer Access
                                    </h2>

                                    <p className="text-gray-500 mb-4">
                                        Enter password to view commission page.
                                    </p>

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="w-full border rounded-lg p-3"
                                    />

                                    {error && (
                                        <p className="text-red-500 mt-2">
                                            {error}
                                        </p>
                                    )}

                                    <div className="flex justify-end gap-3 mt-5">
                                        <button
                                            onClick={() => setShowPasswordModal(false)}
                                            className="px-4 py-2 border rounded-lg"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            onClick={checkPassword}
                                            disabled={loading}
                                            className="px-4 py-2 bg-(--secondary-color) text-white rounded-lg"
                                        >
                                            {loading ? "Checking..." : "Submit"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/* COMMISSION TAB */}
                {/* {activeTab === "commission" && (
                    <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                        <Commission />
                    </div>
                )} */}

                {/* COMPATIBLE PHONES TAB */}
                {activeTab === "phones" && (
                    <div className="rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm">
                        <input
                            type="text"
                            placeholder="Search phones..."
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            className="mb-6 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-[#1377B3] focus:ring-2 focus:ring-[#1377B3]/20"
                        />

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#1377B3] text-white">
                                        {visibleColumns.map((heading) => (
                                            <th key={heading} className="border border-gray-300 p-3 text-left">
                                                {heading}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredPhones.map((row, index) => (
                                        <tr key={index}>
                                            {visibleColumns.map((heading) => (
                                                <td key={heading} className="border border-gray-300 p-3">
                                                    {row[heading] || "-"}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* APN TAB */}
                {activeTab === "apn" && (
                    <div className="rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm">
                        <div className="h-175 w-full overflow-hidden rounded-xl border">
                            <iframe
                                src="/assets/dealer.pdf"
                                title="APN Settings Android and iOS"
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                )}

                {/* START APPLICATION TAB */}
                {activeTab === "application" && (
                    <>
                        <h2 className="mb-8 text-center text-xl font-bold text-[#0071BC]">
                            Welcome2linkup, user friendly portal, easy to
                            navigate with great management options!
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {cards.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex min-h-35 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-(--secondary-color) bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6FF] text-[#0071BC]">
                                            <Icon
                                                size={32}
                                                strokeWidth={2.2}
                                            />
                                        </div>

                                        <h3 className="text-sm font-semibold leading-snug text-[#0071BC]">
                                            {item.title}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>

        
    );
}

