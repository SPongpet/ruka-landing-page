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
        image: '/images/products/tumblers.webp',
        icon: '🥤',
        popular: true
    },
    {
        id: 'umbrellas',
        name: 'Umbrellas',
        description: 'ร่มกันฝนและแดดที่ทนทาน สกรีนโลโก้ได้สวยงาม',
        image: '/images/products/umbrellas.webp',
        icon: '☂️'
    },
    {
        id: 'bags',
        name: 'Bags',
        description: 'กระเป๋าและถุงผ้าหลากหลายสไตล์ เป็นมิตรต่อสิ่งแวดล้อม',
        image: '/images/products/bags.webp',
        icon: '👜',
        popular: true
    },
    {
        id: 'hats',
        name: 'Hats',
        description: 'หมวกแฟชั่นและหมวกกันแดด ปักโลโก้ได้สวยงาม',
        image: '/images/products/hats.webp',
        icon: '🧢'
    },
    {
        id: 'luggage',
        name: 'Luggages',
        description: 'กระเป๋าเดินทางและกระเป๋าล้อลาก คุณภาพพรีเมี่ยม',
        image: '/images/products/luggage.webp',
        icon: '🧳'
    },
    {
        id: 'gadgets',
        name: 'Gadgets',
        description: 'อุปกรณ์เทคโนโลยีและ gadget สมัยใหม่',
        image: '/images/products/gadgets.webp',
        icon: '📱',
        popular: true
    },
    {
        id: 'gift-sets',
        name: 'Gift Sets',
        description: 'ชุดของขวัญที่จัดเซ็ตมาอย่างสวยงาม พร้อมกล่อง',
        image: '/images/products/gift-sets.webp',
        icon: '🎁'
    },
    {
        id: 'keychains',
        name: 'Keychains',
        description: 'พวงกุญแจที่ระลึกหลากหลายวัสดุ ขนาดกะทัดรัด',
        image: '/images/products/keychains.webp',
        icon: '🔑'
    },
    {
        id: 'stationery',
        name: 'Stationery',
        description: 'เครื่องเขียนและอุปกรณ์สำนักงานคุณภาพดี',
        image: '/images/products/stationery.webp',
        icon: '✏️'
    }
]; 