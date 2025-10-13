// removed unused imports

import { IPricing } from "@/types";
import { useState } from "react";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = async () => {
    // สร้างข้อความรายละเอียดแพ็คเกจ
    const message = `สวัสดีครับ/ค่ะ 😊

ฉันสนใจแพ็คเกจ: ${name}
ราคา: ${price === "ตามใบเสนอราคา" ? price : `${price} บาท`}

รายละเอียดแพ็คเกจ:
${features.map((feature, index) => `${index + 1}. ${feature}`).join("\n\n")}

กรุณาติดต่อกลับมาให้คำปรึกษาเพิ่มเติมครับ/ค่ะ 🙏`;

    try {
      // คัดลอกข้อความไป clipboard
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(message);
        // เปิด LINE OA
        window.open("https://lin.ee/Eoc4mUN", "_blank");

        // แสดง toast หรือ alert
        alert("ข้อความถูกคัดลอกแล้ว! กรุณาวางข้อความใน LINE Chat ครับ/ค่ะ");
      } else {
        // fallback สำหรับเบราว์เซอร์ที่ไม่รองรับ clipboard API
        setShowModal(true);
      }
    } catch {
      // fallback กรณี clipboard ไม่ทำงาน
      setShowModal(true);
    }
  };

  const copyMessage = () => {
    const message = `สวัสดีครับ/ค่ะ 😊

ฉันสนใจแพ็คเกจ: ${name}
ราคา: ${price === "ตามใบเสนอราคา" ? price : `${price} บาท`}

รายละเอียดแพ็คเกจ:
${features.map((feature, index) => `${index + 1}. ${feature}`).join("\n\n")}

กรุณาติดต่อกลับมาให้คำปรึกษาเพิ่มเติมครับ/ค่ะ 🙏`;

    navigator.clipboard.writeText(message);
    setShowModal(false);
    window.open("https://lin.ee/Eoc4mUN", "_blank");
    alert("ข้อความถูกคัดลอกแล้ว! กรุณาวางข้อความใน LINE Chat ครับ/ค่ะ");
  };

  return (
    <>
      <div
        className={`group relative bg-white rounded-[28px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${
          highlight
            ? "border-[#A6171C]"
            : "border-gray-200 hover:border-[#A6171C]/30"
        }`}
      >
        <div className="p-6 border-b border-gray-200 rounded-t-xl">
          <h3 className="text-2xl font-extrabold text-[#2d1a18] mb-2 font-[Kanit]">
            {name}
          </h3>
          <p className="text-[32px] md:text-[40px] font-extrabold text-[#A6171C] mb-4">
            {price}
          </p>
          <button
            onClick={handleGetStarted}
            className={`w-full py-3 px-8 rounded-xl font-bold transition-all duration-200 shadow-md ${
              highlight
                ? "bg-[#A6171C] hover:bg-[#8a1419] text-white"
                : "bg-[#F1C045] hover:bg-[#e6b23a] text-[#A6171C]"
            }`}
          >
            get started
          </button>
        </div>
        <div className="p-6 mt-1">
          <p className="font-bold mb-0 text-gray-800 uppercase tracking-wide text-xs">
            FEATURES
          </p>
          <p className="text-gray-600 mb-5 text-xs">
            Everything in basic, plus..
          </p>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-[#2d1a18]"
              >
                <span className="text-[#A6171C] leading-6">•</span>
                <span className="whitespace-pre-line">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Modal สำหรับแสดงข้อความ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-bold mb-4 text-[#A6171C]">
              ข้อความสำหรับ LINE
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4 max-h-60 overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap">
                {`สวัสดีครับ/ค่ะ 😊

ฉันสนใจแพ็คเกจ: ${name}
ราคา: ${price === "ตามใบเสนอราคา" ? price : `${price} บาท`}

รายละเอียดแพ็คเกจ:
${features.map((feature, index) => `${index + 1}. ${feature}`).join("\n\n")}

กรุณาติดต่อกลับมาให้คำปรึกษาเพิ่มเติมครับ/ค่ะ 🙏`}
              </pre>
            </div>
            <div className="flex gap-3">
              <button
                onClick={copyMessage}
                className="flex-1 bg-[#A6171C] hover:bg-[#8a1419] text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                คัดลอกและเปิด LINE
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingColumn;
