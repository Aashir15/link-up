

const data = [
    ["$10 Plan", "AT&T.10-F2.5*S2.5*T2.5", "$7.50", "Spiff $1.50\nAirtime $1.00\nTotal Payout $2.50", "$1.50", "$1.50", "$5.50", "$1+$1 = $2.00", "$7.50", "$0", "$7.50", "75%"],
    ["$15 Plan", "AT&T.15-F3.0*S3.0*T3.0", "$12.00", "Spiff $1.50\nAirtime $1.50\nTotal Payout $3.00", "$1.50", "$1.50", "$6.00", "$1.50+$1.50 = $3.00", "$9.00", "$0", "$9.00", "60%"],
    ["$20 Plan", "AT&T.20-F15*11*9", "$8.00", "Spiff $10.00\nAirtime $2.00\nTotal Payout $12.00", "$5.00", "$5.00", "$22.00", "$2+$2 = $4.00", "$26.00", "$5", "$31", "155%"],
    ["$30 Plan", "AT&T.30-F2450*S22*T17", "$7.00", "Spiff $20.00\nAirtime $3.00\nTotal Payout $23.00", "$15.00", "$10.00", "$48.00", "$3+$3 = $6.00", "$54.00", "$5", "$59", "100%"],
    ["$40 Plan", "AT&T.40-F30*2S7*T22", "$16.00", "Spiff $20.00\nAirtime $4.00\nTotal Payout $24.00", "$20.00", "$15.00", "$59.00", "$4+$4 = $8.00", "$67.00", "$5", "$77", "195%"],
    ["$50 Plan", "AT&T.50-F37*S27*T22", "$15.00", "Spiff $30.00\nAirtime $5.00\nTotal Payout $35.00", "$20.00", "$15.00", "$70.00", "$5+$5 = $10.00", "$80.00", "$5", "$85", "170%"],
];

const headers = [
    "LinkUp Plans",
    "Cost to Activate",
    "Commission + 10% Topup Month 1",
    "Commission Month 2",
    "Commission Month 3",
    "Total Payout in 3 Months",
    "2nd/3rd Month Refill at Your Store",
    "Potential Payout with Refill in 3 Months",
    "Portin Spiff",
    "Grand Payout in 3 Months",
    "% Margin 3 Months",
];

const refillData = [
    ["AT&T", "10%", "None"],
    ["Boost Mobile Refill", "None", "$5-$200 + $2 Fee charge"],
    ["Cricket Wireless Refill", "None", "$13-$200 + $2 Fee charge"],
    ["Gen Mobile RTR", "5%", "None"],
    ["H2O RTR", "1.5%", "None"],
    ["LinkUp Mobile", "10%", "None"],
    ["Lyca Mobile RTR", "8%", "$1 Fee applied to all plans"],
    ["MobileX RTR", "8%", "None"],
    ["Metro PCS Refill", "None", "$10-$200 + $2 Fee charge"],
    ["Net10 RTR", "5%", "None"],
    ["Red Pocket", "5%", "None"],
    ["Safelink RTR", "5%", "None"],
    ["Simple Mobile RTR $25", "5%", "None"],
    ["Simple Mobile RTR $30", "5%", "None"],
    ["Simple Mobile RTR $40", "5%", "None"],
    ["Simple Mobile RTR $50", "5%", "None"],
    ["Simple Mobile RTR $60", "5%", "None"],
    ["Simple Mobile RTR $10 - $300", "5%", "None"],
    ["Simple Mobile Family Plan RTR $10-$150", "5%", "None"],
    ["Total By Verizon", "5%", "None"],
    ["T-Mobile RTR $1-$500", "10%", "None"],
    ["Tracfone", "5%", "None"],
    ["Ultra Mobile $15", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $19", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $24", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $29", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $39", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $49", "5%", "$1 Fee applied to all plans"],
    ["Ultra Mobile $59", "5%", "$1 Fee applied to all plans"],
    ["Verizon RTR $5-$250", "5%", "None"],
];

const callingCardData = [
    ["Boss Revolution $5", "$5", "12.00%"],
    ["Boss Revolution $10", "$10", "12.00%"],
    ["Boss Revolution $5 Pinless", "$5", "17.00%"],
    ["Boss Revolution $10 Pinless", "$10", "17.00%"],
    ["Boss Revolution $15 Pinless", "$15", "17.00%"],
    ["Boss Revolution $20 Pinless", "$20", "17.00%"],
    ["Boss Revolution $25 Pinless", "$25", "17.00%"],
    ["Boss Revolution $50 Pinless", "$50", "17.00%"],
    ["Boss Revolution Pinless $1-$50", "Open Range", "17.00%"],
];

const callingCardHeaders = [
    "Carrier",
    "Top-Up Margin",
    "Commission",
];


const refillHeaders = ["Carrier", "Top-Up Margin", "Fee Based Refill"];


// last

const internationalRawData = `
Carrier	Plan	Top-Up Margin
Aruba Digicel TopUp	Open Range	10.00%
Revolution	Open Range	10.00%
Dominican Republic Claro TopUp	Open Range	8.00%
El Salvador Claro TopUp	Open Range	8.00%
El Salvador Digicel TopUp	Open Range	10.00%
El Salvador Movistar TopUp	Open Range	6.00%
GuatemalaTigo $7	$7.00	10.00%
Guatemala Tigo $10	$10.00	10.00%
GuatemalaTigo $14	$14.00	10.00%
Guatemala Tigo $15	$15.00	10.00%
Guatemala Tigo $20	$20.00	10.00%
Guatemala Tigo $25	$25.00	10.00%
Guatemala Tigo $30	$30.00	10.00%
Haiti Digicel TopUp	Open Range	11.00%
Honduras Tigo RTR $5	$5.00	10.00%
Honduras Tigo RTR $6	$6.00	10.00%
Honduras Tigo RTR $7	$7.00	10.00%
Honduras Tigo RTR $10	$10.00	10.00%
Honduras Tigo RTR $20	$20.00	10.00%
Honduras Claro TopUp	Open Range	5.00%
Jamaica Digicel TopUp	Open Range	8.00%
Mexico Telcel TopUp $6	$6.00	10.00%
Mexico Telcel TopUp $11	$11.00	10.00%
Mexico Telcel TopUp $17	$17.00	10.00%
Mexico Telcel TopUp $22	$22.00	10.00%
Mexico Telcel TopUp $33	$33.00	10.00%
Mexico Telcel TopUp $55	$55.00	10.00%
Mexico Movistar TopUp	Open Range	6.00%
Nicaragua Claro TopUp	Open Range	5.00%
Pakistan Telenor TopUp	Open Range	8.00%
Pakistan Ufone TopUp	Open Range	8.00%
Pakistan Warid TopUp	Open Range	8.00%
Pakistan Zong TopUp	Open Range	5.00%
Bahamas BTC	Open Range	3.00%
Entel Bolivia $5 - $50	Open Range	3.00%
Cubacel Data 9GB $23.15	$23.15	9.00%
Cubacel Data 14GB $34.74	$34.74	9.00%
Cubacel Data 20GB $46.32	$46.32	9.00%
Cubacel RTR $1-$55	Open Range	9.00%
Dominican Rep Claro RD 3 Days 2.33	$2.33	11.00%
Dominican Rep Claro RD 5 Days 3.30	$3.30	11.00%
Dominican Rep Claro RD 7 Days 5.74	$5.74	11.00%
Dominican Rep Claro RD 15 Days 11.45	$11.45	11.00%
Dominican Rep Claro RD 30 Days 28.41	$28.41	11.00%
Dominican Rep Altice $6 - $168.54	Open Range	9.00%
Dominican Rep Claro $6 - $568.18	Open Range	11.00%
Dominican Rep Viva $1 - $18.18	Open Range	10.00%
Orange DR TopUp $1-$45	Open Range	10.00%
Ecuador Tuenti Ecuador Bundle $1	$1.00	6.00%
Ecuador Claro Bundle $1.05	$1.05	3.00%
Ecuador Movistar Ecuador Bundle $1.05	$1.05	6.00%
Ecuador Movistar Ecuador Bundle $1.50	$1.50	6.00%
Ecuador Claro Bundle $2.05	$2.05	3.00%
Ecuador Movistar Ecuador Bundle $2.05	$2.05	6.00%
Ecuador Movistar Ecuador Bundle $3	$3.00	6.00%
Ecuador Claro Bundle $3.10	$3.10	3.00%
Ecuador Claro Bundle $3.50	$3.50	3.00%
Ecuador Movistar Ecuador Bundle $4	$4.00	6.00%
Ecuador Claro Bundle $4.10	$4.10	3.00%
Ecuador Movistar Ecuador Bundle $5	$5.00	6.00%
Ecuador Claro Bundle $5.15	$5.15	3.00%
Ecuador Claro Bundle $6	$6.00	3.00%
Ecuador Movistar Ecuador Bundle $6	$6.00	6.00%
Ecuador Claro Bundle $7	$7.00	3.00%
Ecuador Movistar Ecuador Bundle $7	$7.00	6.00%
Ecuador Claro Bundle $8	$8.00	3.00%
Ecuador Movistar Ecuador Bundle $8	$8.00	6.00%
Ecuador Tuenti Ecuador Bundle $8	$8.00	6.00%
Ecuador Movistar Ecuador Bundle $9	$9.00	6.00%
Ecuador Tuenti Ecuador Bundle $10	$10.00	6.00%
Ecuador Movistar Ecuador Bundle $10.25	$10.25	6.00%
Ecuador Claro Bundle $10.50	$10.50	3.00%
Ecuador Movistar Ecuador Bundle $12.25	$12.25	6.00%
Ecuador Claro Bundle $12.50	$12.50	3.00%
Ecuador Tuenti Ecuador Bundle $15	$15.00	6.00%
Ecuador Claro Bundle $15.50	$15.50	3.00%
Ecuador Movistar Ecuador Bundle $15.50	$15.50	6.00%
Ecuador Claro Bundle $20.50	$20.50	3.00%
Ecuador Movistar Ecuador Bundle $25	$25.00	6.00%
Ecuador Tuenti Ecuador Bundle $25	$25.00	6.00%
Ecuador Claro US $1-$21	Open Range	3.00%
Ecuador Movistar Ecuador US $1-$70	Open Range	6.00%
Ecuador Tuenti Ecuador $1-$70	Open Range	6.00%
El Salvador Claro El Salvador Superpak $7	$7.00	10.00%
El Salvador Digicel Unlimited $7	$7.00	10.00%
El Salvador Movistar Bundle $7	$7.00	6.00%
El Salvador Digicel Unlimited $8	$8.00	10.00%
El Salvador Tigo El Salvador $8	$8.00	9.00%
El Salvador Tigo El Salvador $10	$10.00	9.00%
El Salvador Tigo El Salvador Imparable $10	$10.00	9.00%
El Salvador Claro El Salvador Superpack Data $12	$12.00	10.00%
El Salvador Claro El Salvador Superpak $12	$12.00	10.00%
El Salvador Digicel Unlimited $12	$12.00	10.00%
El Salvador Movistar Bundle $12	$12.00	6.00%
El Salvador Tigo El Salvador $12	$12.00	9.00%
El Salvador Tigo El Salvador Imparable $12	$12.00	9.00%
El Salvador Claro El Salvador Superpak $15	$15.00	10.00%
El Salvador Tigo El Salvador $15	$15.00	9.00%
El Salvador Tigo El Salvador Imparable $15	$15.00	9.00%
El Salvador Movistar Bundle $18	$18.00	6.00%
El Salvador Claro El Salvador Superpack Data $20	$20.00	10.00%
El Salvador Digicel Unlimited $20	$20.00	10.00%
El Salvador Tigo El Salvador $20	$20.00	9.00%
El Salvador Tigo El Salvador Imparable $20	$20.00	9.00%
El Salvador Claro El Salvador Superpak $25	$25.00	10.00%
El Salvador Movistar Bundle $25	$25.00	6.00%
El Salvador Tigo El Salvador $25	$25.00	9.00%
El Salvador Claro El Salvador Superpack Data $30	$30.00	10.00%
El Salvador Tigo El Salvador $30	$30.00	9.00%
El Salvador Digicel Unlimited $35	$35.00	10.00%
El Salvador Claro El Salvador Superpack Data $40	$40.00	10.00%
El Salvador Tigo El Salvador $50	$50.00	9.00%
El Salvador Claro El Salvador $7-$100	Open Range	10.00%
El Salvador Digicel El Salvador $6-$100	Open Range	10.00%
El Salvador Movistar El Salvador $4.25-$52.60	Open Range	9.00%
Claro Guatemala Superpack $7	$7.00	10.00%
Claro Guatamela Superpack Data $12	$12.00	10.00%
Claro Guatemala Superpack $12	$12.00	10.00%
Claro Guatemala Superpack $15	$15.00	10.00%
Claro Guatamela Superpack Data $20	$20.00	10.00%
Claro Guatemala Superpack $25	$25.00	10.00%
Claro Guatamela Superpack Data $30	$30.00	10.00%
Claro Guatamela Superpack Data $40	$40.00	10.00%
Claro Guatemala $7 - $100	Open Range	10.00%
CSQ Movistar Guatemala $7-$100	Open Range	10.00%
Natcom Haiti $1-$100	Open Range	12.00%
Honduras Claro Honduras Superpack $7	$7.00	9.00%
Honduras Tigo RTR $9	$9.00	10.00%
Honduras Tigo Honduras Super $10	$10.00	9.00%
Honduras Claro Honduras Superpack $12	$12.00	9.00%
Honduras Claro Superpack Data $12	$12.00	9.00%
Honduras Tigo Honduras $12	$12.00	9.00%
Honduras Tigo Honduras Super $12	$12.00	9.00%
Honduras Tigo RTR $12	$12.00	10.00%
Honduras Claro Honduras Superpack $15	$15.00	9.00%
Honduras Tigo Honduras $15	$15.00	9.00%
Honduras Tigo Honduras Super $15	$15.00	9.00%
Honduras Tigo RTR $15	$15.00	10.00%
Honduras Tigo Honduras $16	$16.00	9.00%
Honduras Tigo Honduras $17	$17.00	9.00%
Honduras Tigo Honduras $18	$18.00	9.00%
Honduras Claro Superpack Data $20	$20.00	9.00%
Honduras Tigo Honduras $20	$20.00	9.00%
Honduras Tigo Honduras Super $20	$20.00	9.00%
Honduras Tigo Honduras $21	$21.00	9.00%
Honduras Tigo Honduras $22	$22.00	9.00%
Honduras Tigo Honduras $23	$23.00	9.00%
Honduras Tigo Honduras $24	$24.00	9.00%
Honduras Claro Honduras Superpack $25	$25.00	9.00%
Honduras Tigo Honduras $25	$25.00	9.00%
Honduras Tigo RTR $25	$25.00	10.00%
Honduras Tigo Honduras $26	$26.00	9.00%
Honduras Tigo Honduras $27	$27.00	9.00%
Honduras Tigo Honduras $28	$28.00	9.00%
Honduras Tigo Honduras $29	$29.00	9.00%
Honduras Claro Superpack Data $30	$30.00	9.00%
Honduras Tigo Honduras $30	$30.00	9.00%
Honduras Tigo Honduras $31	$31.00	9.00%
Honduras Tigo Honduras $32	$32.00	9.00%
Honduras Tigo Honduras $33	$33.00	9.00%
Honduras Tigo Honduras $34	$34.00	9.00%
Honduras Tigo Honduras $35	$35.00	9.00%
Honduras Tigo Honduras $36	$36.00	9.00%
Honduras Tigo Honduras $37	$37.00	9.00%
Honduras Tigo Honduras $38	$38.00	9.00%
Honduras Tigo Honduras $39	$39.00	9.00%
Honduras Claro Superpack Data $40	$40.00	9.00%
Honduras Tigo Honduras $40	$40.00	9.00%
Honduras Tigo Honduras $41	$41.00	9.00%
Honduras Tigo Honduras $42	$42.00	9.00%
Honduras Tigo Honduras $43	$43.00	9.00%
Honduras Tigo Honduras $44	$44.00	9.00%
Honduras Tigo Honduras $45	$45.00	9.00%
Honduras Tigo Honduras $46	$46.00	9.00%
Honduras Tigo Honduras $47	$47.00	9.00%
Honduras Tigo Honduras $48	$48.00	9.00%
Honduras Tigo Honduras $49	$49.00	9.00%
Honduras Tigo Honduras $50	$50.00	9.00%
Honduras Claro Honduras US $7-$100	Open Range	9.00%
SmartFren Indonesia $0.43	$0.43	15.00%
SmartFren Indonesia $0.86	$0.86	15.00%
Smartfren Data Indonesia $0.91	$0.91	10.00%
SmartFren Indonesia $1.69	$1.69	15.00%
Smartfren Data Indonesia $1.74	$1.74	10.00%
SmartFren Indonesia $2.09	$2.09	15.00%
Smartfren Data Indonesia $2.46	$2.46	10.00%
SmartFren Indonesia $2.50	$2.50	15.00%
Smartfren Data Indonesia $3.53	$3.53	10.00%
SmartFren Indonesia $4.14	$4.14	15.00%
SmartFren Indonesia $8.27	$8.27	15.00%
Flow-Jamaica $5	$5.00	9.00%
Flow-Jamaica $10	$10.00	9.00%
Flow-Jamaica $15	$15.00	9.00%
Flow-Jamaica $20	$20.00	9.00%
Flow-Jamaica $25	$25.00	9.00%
Flow-Jamaica $30	$30.00	9.00%
Flow-Jamaica $35	$35.00	9.00%
Flow-Jamaica $40	$40.00	9.00%
Flow-Jamaica $45	$45.00	9.00%
Flow-Jamaica $50	$50.00	9.00%
Flow-Jamaica $55	$55.00	9.00%
Flow-Jamaica $60	$60.00	9.00%
Flow-Jamaica $65	$65.00	9.00%
Flow-Jamaica $70	$70.00	9.00%
Flow-Jamaica $75	$75.00	9.00%
Flow-Jamaica $80	$80.00	9.00%
Flow-Jamaica $85	$85.00	9.00%
Flow-Jamaica $90	$90.00	9.00%
Flow-Jamaica $95	$95.00	9.00%
Flow-Jamaica $100	$100.00	9.00%
Bmobile Trinidad & Tobago $1-$75	Open Range	10.00%
Digicel Trinidad & Tobago $6.20-$103	Open Range	10.00%
`;

const internationalRows = internationalRawData
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split("\t"));

const internationalHeaders = ["Carrier", "Plan", "Top-Up Margin"];

export default function Commission() {
    return (
        <main className='max-w-375 mx-auto px-4'>
            <section className="bg-(--primary-color) mb-4 rounded-3xl py-8 mt-12 px-6 text-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Make up to 195% commission on selected plans and earn Lifetime Residuals
                </h2>

                <p className="text-md font-semibold mb-2">
                    $5 Port-in commission will be paid only one time on 4th month renewal only applicable to $20 or above plan.
                </p>

                <p className="text-md font-semibold">
                    2% Residual to be eligible, there is a requirement of minimum 5 activations per month and it will be paid from 4th month to the lifetime for active line of customer activated by POS.
                </p>
            </section>

            <section className="bg-(--primary-color)  mb-8 rounded-3xl py-8 mt-8 px-6 text-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    ACH is 3 times a week (Monday - Wednesday - Friday)
                </h2>

                <p className="text-md font-semibold">
                    Any ACH return by the bank there will be $50 return fee charge + actual ACH amount.
                </p>
            </section>

            <div>
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B69A3] mb-2">
                    Activation Commission
                </h1>
                <div className="w-full overflow-x-auto mb-12">
                    <table className="w-full border-collapse min-w-350">
                        <thead>
                            <tr>
                                {headers.map((head, index) => (
                                    <th
                                        key={index}
                                        className="bg-[#0A4F7A] text-white font-bold text-center p-4 border-2 border-white"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {/* LinkUp Plans */}
                                    <td className="bg-gray-200 text-center font-semibold text-gray-900 p-4 border-2 border-white">
                                        <div className="font-bold text-lg">{row[0]}</div>
                                        <div className="text-sm mt-1">{row[1]}</div>
                                    </td>

                                    {row.slice(2).map((cell, i) => {
                                        const realIndex = i + 1;

                                        // Gold columns
                                        const goldCols = [5, 7, 9];

                                        const bgClass =
                                            realIndex === 1
                                                ? "bg-[#19678A]" // Cost to Activate
                                                : goldCols.includes(realIndex)
                                                    ? "bg-[#F2BB26] text-[#0A3552]"
                                                    : "bg-[#2E9BD0]";

                                        return (
                                            <td
                                                key={i}
                                                className={`${bgClass} text-center text-white font-semibold p-4 border-2 border-white`}
                                            >
                                                {cell.split("\n").map((line, j) => (
                                                    <div
                                                        key={j}
                                                        className={
                                                            line.includes("Total Payout")
                                                                ? "font-bold text-xl"
                                                                : ""
                                                        }
                                                    >
                                                        {line}
                                                    </div>
                                                ))}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B69A3] mb-2">
                    Wireless Refill Commission
                </h1>
                <div className="w-full overflow-x-auto mt-10 mb-12">
                    <table className="w-full min-w-225 border-collapse">
                        <thead>
                            <tr>
                                {refillHeaders.map((head, index) => (
                                    <th
                                        key={index}
                                        className="bg-[#0A4F7A] text-white font-bold text-center p-4 border-2 border-white"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {refillData.map((row, index) => (
                                <tr key={index}>
                                    <td className="bg-gray-200 text-gray-900 font-semibold text-center p-4 border-2 border-white">
                                        {row[0]}
                                    </td>

                                    <td className="bg-[#2E9BD0] text-white font-semibold text-center p-4 border-2 border-white">
                                        {row[1]}
                                    </td>

                                    <td className="bg-[#F2BB26] text-[#0A3552] font-semibold text-center p-4 border-2 border-white">
                                        {row[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B69A3] mb-2">
                    International Long Distance and Pinless
                </h1>

                <div className="w-full overflow-x-auto mt-10 mb-12">
                    <table className="w-full min-w-200 border-collapse">
                        <thead>
                            <tr>
                                {callingCardHeaders.map((head, index) => (
                                    <th
                                        key={index}
                                        className="bg-[#0A4F7A] text-white font-bold text-center p-4 border-2 border-white"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {callingCardData.map((row, index) => (
                                <tr key={index}>
                                    {/* Carrier */}
                                    <td className="bg-gray-200 text-gray-900 font-semibold text-center p-4 border-2 border-white">
                                        {row[0]}
                                    </td>

                                    {/* Top-Up Margin */}
                                    <td className="bg-[#2E9BD0] text-white font-semibold text-center p-4 border-2 border-white">
                                        {row[1]}
                                    </td>

                                    {/* Commission */}
                                    <td className="bg-[#F2BB26] text-[#0A3552] font-bold text-center p-4 border-2 border-white">
                                        {row[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B69A3] mb-2">
                    International Wireless Top-Up
                </h1>

                <div className="w-full overflow-x-auto mt-10 mb-12">
                    <table className="w-full min-w-225 border-collapse">
                        <thead>
                            <tr>
                                {internationalHeaders.map((head, index) => (
                                    <th
                                        key={index}
                                        className="bg-[#0A4F7A] text-white font-bold text-center p-4 border-2 border-white"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {internationalRows.map((row, index) => (
                                <tr key={index}>
                                    <td className="bg-gray-200 text-gray-900 font-semibold text-center p-4 border-2 border-white">
                                        {row[0]}
                                    </td>

                                    <td className="bg-[#2E9BD0] text-white font-semibold text-center p-4 border-2 border-white">
                                        {row[1]}
                                    </td>

                                    <td className="bg-[#F2BB26] text-[#0A3552] font-bold text-center p-4 border-2 border-white">
                                        {row[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </main>
    )
}
