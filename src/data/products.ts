export interface ProductCategory {
    id: string;
    name: string;
    description: string;
    image: string;
    icon: string;
    popular?: boolean;
}

export const productCategories: ProductCategory[] = [
    {
        id: 'tumblers',
        name: 'Tumblers',
        description: 'แก้วน้ำและขวดน้ำคุณภาพสูง เหมาะสำหรับใช้ในออฟฟิศ',
        image: '/icons/icon_1.png',
        icon: '🥤',
        popular: true
    },
    {
        id: 'umbrellas',
        name: 'Umbrellas',
        description: 'ร่มกันฝนและแดดที่ทนทาน สกรีนโลโก้ได้สวยงาม',
        image: '/icons/icon_2.png',
        icon: '☂️'
    },
    {
        id: 'bags',
        name: 'Bags',
        description: 'กระเป๋าและถุงผ้าหลากหลายสไตล์ เป็นมิตรต่อสิ่งแวดล้อม',
        image: '/icons/icon_3.png',
        icon: '👜',
        popular: true
    },
    {
        id: 'hats',
        name: 'Hats',
        description: 'หมวกแฟชั่นและหมวกกันแดด ปักโลโก้ได้สวยงาม',
        image: '/icons/icon_4.png',
        icon: '🧢'
    },
    {
        id: 'gadgets',
        name: 'Gadgets',
        description: 'อุปกรณ์เทคโนโลยีและ gadget สมัยใหม่ สำหรับใช้งานประจำวัน',
        image: '/icons/icon_5.png',
        icon: '📱'
    },
    {
        id: 'sustainable',
        name: 'Sustainable',
        description: 'ผลิตภัณฑ์เป็นมิตรต่อสิ่งแวดล้อม วัสดุรีไซเคิล',
        image: '/icons/icon_6.png',
        icon: '🌱',
        popular: true
    },
    {
        id: 'stationery',
        name: 'Stationery',
        description: 'ชุดของขวัญที่จัดเซ็ตมาอย่างสวยงาม พร้อมกล่อง',
        image: '/icons/icon_7.png',
        icon: '🎁'
    },
    {
        id: 'wellness',
        name: 'Wellness',
        description: 'พวงกุญแจที่ระลึกหลากหลายวัสดุ ขนาดกะทัดรัด',
        image: '/icons/icon_8.png',
        icon: '🔑'
    },
    {
        id: 'gift-sets',
        name: 'Gift Sets',
        description: 'เครื่องเขียนและอุปกรณ์สำนักงานคุณภาพดี',
        image: '/icons/icon_9.png',
        icon: '✏️'
    }
]; 