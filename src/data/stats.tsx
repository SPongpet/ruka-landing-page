import { BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { FiGift } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "50,000+",
    icon: <FiGift size={34} className="text-ruby" />,
    description: "ชิ้นงานคุณภาพที่ส่งมอบให้ลูกค้าในแต่ละเดือน",
  },
  {
    title: "4.9",
    icon: <BsFillStarFill size={34} className="text-sunny" />,
    description: "คะแนนความพึงพอใจเฉลี่ยจากลูกค้าที่ใช้บริการ",
  },
  {
    title: "500+ ",
    icon: <PiGlobeFill size={34} className="text-ruby" />,
    description:
      "บริษัทและองค์กรที่วางใจให้เราเป็นพันธมิตรในการสร้างความประทับใจ",
  },
];
