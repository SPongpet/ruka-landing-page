import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    telephone: string;
    socials: ISocials;
} = {
    subheading: "ยกระดับความประทับใจ สร้างสัมพันธ์ ยั่งยืนด้วยของขวัญพรีเมียม",
    quickLinks: [
        {
            text: "About Us",
            url: "/AboutUs"
        },
        {
            text: "Services",
            url: "/Services"
        },
        {
            text: "Products",
            url: "/products"
        },
        {
            text: "Blog",
            url: "/Blog"
        },
        {
            text: "Contact",
            url: "/contact"
        }
    ],
    // email: 'Line: https://lin.ee/Eoc4mUN',
    telephone: '📞 082 113 8914',
    socials: {
        facebook: 'https://www.facebook.com/share/1G3NH5PCTG/',
        line: 'https://lin.ee/Eoc4mUN',
        instagram: 'https://www.instagram.com/rukaworld_th?igsh=MWRqZXhuc2ExZnllcA==',
        // twitter: 'https://twitter.com/rukaworld',
    }
}