import {
  FiGift,
  FiUsers,
  FiStar,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiPackage,
  FiSettings,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Premium Product Selection",
    description:
      "คัดสรรสินค้าคุณภาพสูงจากแบรนด์ชั้นนำ เพื่อสร้างความประทับใจที่ยาวนานให้กับลูกค้าและพันธมิตรของคุณ",
    bullets: [
      {
        title: "สินค้าคุณภาพพรีเมี่ยม",
        description:
          "สินค้าของชำร่วยระดับพรีเมี่ยมที่คัดสรรอย่างดี มีคุณภาพและความทนทาน",
        icon: <FiStar size={26} />,
      },
      {
        title: "หลากหลายหมวดหมู่",
        description: "ตั้งแต่ของใช้ในออฟฟิศ เครื่องใช้ไฟฟ้า ไปจนถึงของตกแต่ง",
        icon: <FiPackage size={26} />,
      },
      {
        title: "อัปเดตสินค้าใหม่",
        description: "สินค้าแนวโน้มใหม่ล่าสุดที่ตอบโจทย์ไลฟ์สไตล์สมัยใหม่",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Custom Branding Solutions",
    description:
      "บริการพิมพ์โลโก้และปรับแต่งสินค้าตามต้องการ เพื่อเสริมสร้างภาพลักษณ์แบรนด์ของคุณให้โดดเด่น",
    bullets: [
      {
        title: "ออกแบบโลโก้ฟรี",
        description: "ทีมดีไซเนอร์มืออาชีพช่วยออกแบบโลโก้ที่เหมาะกับสินค้า",
        icon: <FiSettings size={26} />,
      },
      {
        title: "เทคนิคพิมพ์หลากหลาย",
        description: "พิมพ์สกรีน, เลเซอร์, ปัก, และเทคนิคพิเศษอื่นๆ",
        icon: <FiAward size={26} />,
      },
      {
        title: "ตัวอย่างก่อนผลิต",
        description: "ดูตัวอย่างจริงก่อนตัดสินใจสั่งผลิตจำนวนมาก",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Professional Service & Support",
    description:
      "บริการระดับมืออาชีพตั้งแต่การปรึกษา การออกแบบ ไปจนถึงการส่งมอบ เพื่อความพึงพอใจสูงสุดของลูกค้า",
    bullets: [
      {
        title: "ที่ปรึกษาเฉพาะทาง",
        description: "ทีมงานผู้เชี่ยวชาญให้คำปรึกษาสินค้าที่เหมาะสมกับงบประมาณ",
        icon: <FiUsers size={26} />,
      },
      {
        title: "จัดส่งตรงเวลา",
        description: "ระบบโลจิสติกส์ที่เชื่อถือได้ ส่งมอบตรงเวลาทุกครั้ง",
        icon: <FiGift size={26} />,
      },
      {
        title: "บริการหลังการขาย",
        description: "ดูแลและติดตามความพึงพอใจหลังการใช้งานอย่างต่อเนื่อง",
        icon: <FiHeart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
