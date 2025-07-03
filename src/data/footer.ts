import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "สร้างความประทับใจและสัมพันธ์ที่ยั่งยืนผ่านของชำร่วยคุณภาพพรีเมี่ยม",
    quickLinks: [
        {
            text: "สินค้า",
            url: "/products"
        },
        {
            text: "บริการ",
            url: "#features"
        },
        {
            text: "แพ็คเกจ",
            url: "#pricing"
        },
        {
            text: "รีวิว",
            url: "#testimonials"
        },
        {
            text: "เกี่ยวกับเรา",
            url: "#about"
        },
        {
            text: "ติดต่อเรา",
            url: "/contact"
        }
    ],
    email: 'contact@rukaworld.com',
    telephone: '+66 2 XXX XXXX',
    socials: {
        facebook: 'https://facebook.com/rukaworld',
        linkedin: 'https://www.linkedin.com/company/rukaworld',
        instagram: 'https://www.instagram.com/rukaworld',
        twitter: 'https://twitter.com/rukaworld',
    }
}