import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'คุณสมชาย ใจดี',
        role: 'ผู้อำนวยการ บริษัท ABC Group',
        message: `${siteDetails.siteName} ช่วยให้เราสร้างความประทับใจให้กับลูกค้าได้อย่างยอดเยี่ยม สินค้าคุณภาพดี บริการมืออาชีพ และส่งมอบตรงเวลาเสมอ`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'คุณปราณี สวยใส',
        role: 'Marketing Manager, XYZ Corporation',
        message: `ทีมงาน ${siteDetails.siteName} เข้าใจความต้องการของเราดีมาก ช่วยเลือกสินค้าที่เหมาะสมกับแบรนด์ และราคาก็สมเหตุสมผล แนะนำเลยค่ะ`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'คุณวิทยา รักการงาน',
        role: 'CEO, Tech Innovation Ltd.',
        message: `ประทับใจบริการ ${siteDetails.siteName} มาก ตั้งแต่การให้คำปรึกษา การออกแบบ ไปจนถึงการส่งมอบ ทุกขั้นตอนเป็นมืออาชีพ คุ้มค่าทุกบาทที่จ่ายไป`,
        avatar: '/images/testimonial-3.webp',
    },
];