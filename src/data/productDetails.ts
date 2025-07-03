export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    features: string[];
    materials: string[];
    customization: string[];
    minOrder: number;
    category: string;
}

export const productDetails: Record<string, Product[]> = {
    tumblers: [
        {
            id: 'tumbler-premium-steel',
            name: 'Premium Stainless Steel Tumbler',
            description: 'แก้วสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง',
            price: '450-650 บาท',
            image: '/images/products/tumbler-steel.webp',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 450ml และ 600ml'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['พิมพ์โลโก้', 'แกะเลเซอร์', 'สกรีนสี'],
            minOrder: 50,
            category: 'tumblers'
        },
        {
            id: 'tumbler-ceramic',
            name: 'Ceramic Travel Mug',
            description: 'แก้วเซรามิกพรีเมี่ยม เหมาะสำหรับเครื่องดื่มร้อน ดีไซน์หรูหรา',
            price: '320-480 บาท',
            image: '/images/products/tumbler-ceramic.webp',
            features: [
                'วัสดุเซรามิกคุณภาพสูง',
                'เก็บความร้อนได้ดี',
                'ฝาปิดซิลิโคนกันรั่ว',
                'ขนาด 350ml และ 450ml'
            ],
            materials: ['Premium Ceramic', 'Silicone Lid', 'Stainless Steel Base'],
            customization: ['พิมพ์โลโก้', 'สกรีนสี', 'ปักชื่อ'],
            minOrder: 30,
            category: 'tumblers'
        },
        {
            id: 'water-bottle-glass',
            name: 'Borosilicate Glass Bottle',
            description: 'ขวดน้ำแก้วโบโรซิลิเกตทนความร้อน พร้อมซิลีฟป้องกัน',
            price: '380-550 บาท',
            image: '/images/products/bottle-glass.webp',
            features: [
                'แก้วโบโรซิลิเกตทนความร้อน',
                'ซิลีฟป้องกันการหล่น',
                'ปากขวดกว้างล้างง่าย',
                'ขนาด 500ml และ 750ml'
            ],
            materials: ['Borosilicate Glass', 'Silicone Sleeve', 'Bamboo Lid'],
            customization: ['แกะเลเซอร์', 'สติ๊กเกอร์กันน้ำ', 'ปักชื่อบนซิลีฟ'],
            minOrder: 25,
            category: 'tumblers'
        }
    ],
    umbrellas: [
        {
            id: 'umbrella-auto-premium',
            name: 'Auto Open Premium Umbrella',
            description: 'ร่มเปิดอัตโนมัติคุณภาพพรีเมี่ยม กันลมแรง ผ้าเคลือบกันน้ำ',
            price: '580-850 บาท',
            image: '/images/products/umbrella-auto.webp',
            features: [
                'ระบบเปิดอัตโนมัติ',
                'กันลมแรงได้ดี',
                'ผ้าเคลือบกันน้ำ',
                'ขนาด 27 นิ้ว'
            ],
            materials: ['Pongee Fabric', 'Fiberglass Ribs', 'Aluminum Shaft'],
            customization: ['พิมพ์โลโก้', 'สกรีนสี', 'ปักโลโก้'],
            minOrder: 50,
            category: 'umbrellas'
        },
        {
            id: 'umbrella-compact',
            name: 'Compact Travel Umbrella',
            description: 'ร่มพับขนาดเล็ก พกพาสะดวก น้ำหนักเบา เหมาะสำหรับเดินทาง',
            price: '350-520 บาท',
            image: '/images/products/umbrella-compact.webp',
            features: [
                'ขนาดกะทัดรัด พกพาง่าย',
                'น้ำหนักเบาเพียง 300g',
                'ผ้าแห้งเร็ว',
                'มีซองใส่ร่ม'
            ],
            materials: ['Polyester Fabric', 'Steel Ribs', 'Aluminum Frame'],
            customization: ['พิมพ์โลโก้บนซอง', 'สกรีนร่ม', 'ปักชื่อ'],
            minOrder: 30,
            category: 'umbrellas'
        }
    ],
    bags: [
        {
            id: 'tote-canvas-premium',
            name: 'Premium Canvas Tote Bag',
            description: 'กระเป๋าผ้าแคนวาสคุณภาพสูง ทนทาน เป็นมิตรต่อสิ่งแวดล้อม',
            price: '280-420 บาท',
            image: '/images/products/tote-canvas.webp',
            features: [
                'ผ้าแคนวาสหนา 12oz',
                'ทนทานใช้งานได้นาน',
                'เป็นมิตรต่อสิ่งแวดล้อม',
                'ขนาด 38x42cm'
            ],
            materials: ['100% Cotton Canvas', 'Reinforced Handles'],
            customization: ['สกรีนโลโก้', 'ปักโลโก้', 'พิมพ์ดิจิทัล'],
            minOrder: 50,
            category: 'bags'
        },
        {
            id: 'laptop-backpack',
            name: 'Business Laptop Backpack',
            description: 'กระเป๋าเป้ใส่แล็ปท็อปสำหรับนักธุรกิจ ดีไซน์เรียบหรู',
            price: '950-1,450 บาท',
            image: '/images/products/backpack-laptop.webp',
            features: [
                'ช่องใส่แล็ปท็อป 15.6 นิ้ว',
                'ผ้ากันน้ำ',
                'ช่องใส่ของหลากหลาย',
                'สายสะพายนุ่มสบาย'
            ],
            materials: ['Water-resistant Polyester', 'YKK Zippers', 'Padded Compartment'],
            customization: ['ปักโลโก้', 'แปะโลโก้', 'พิมพ์ชื่อ'],
            minOrder: 25,
            category: 'bags'
        }
    ],
    hats: [
        {
            id: 'cap-baseball-premium',
            name: 'Premium Baseball Cap',
            description: 'หมวกเบสบอลคุณภาพพรีเมี่ยม ผ้าคอตตอน 100% สวมใส่สบาย',
            price: '250-380 บาท',
            image: '/images/products/cap-baseball.webp',
            features: [
                'ผ้าคอตตอน 100%',
                'ขนาดปรับได้',
                'ปีกหมวกโค้งสวย',
                'สีสันหลากหลาย'
            ],
            materials: ['100% Cotton', 'Adjustable Strap', 'Curved Visor'],
            customization: ['ปักโลโก้ด้านหน้า', 'ปักข้าง', 'ปักด้านหลัง'],
            minOrder: 50,
            category: 'hats'
        },
        {
            id: 'bucket-hat',
            name: 'Outdoor Bucket Hat',
            description: 'หมวกบักเก็ตกันแดด เหมาะสำหรับกิจกรรมกลางแจ้ง',
            price: '320-480 บาท',
            image: '/images/products/hat-bucket.webp',
            features: [
                'ปีกกว้างกันแดด',
                'ผ้าระบายอากาศ',
                'สายรัดคางกันหล่น',
                'พับเก็บได้'
            ],
            materials: ['Quick-dry Polyester', 'UPF 50+ Protection', 'Chin Strap'],
            customization: ['ปักโลโก้', 'สกรีน', 'แปะโลโก้'],
            minOrder: 30,
            category: 'hats'
        }
    ],
    luggage: [
        {
            id: 'trolley-business',
            name: 'Business Trolley Bag',
            description: 'กระเป๋าล้อลากสำหรับนักธุรกิจ ดีไซน์หรูหรา คุณภาพทนทาน',
            price: '2,800-4,200 บาท',
            image: '/images/products/trolley-business.webp',
            features: [
                'ล้อ 4 ทิศทาง หมุนได้ 360°',
                'วัสดุ ABS+PC ทนทาน',
                'ช่องใส่แล็ปท็อป',
                'ขนาด 20" กระเป๋าใส่เครื่อง'
            ],
            materials: ['ABS+PC Shell', '4-wheel System', 'TSA Lock'],
            customization: ['ปักโลโก้', 'แกะเลเซอร์', 'สติ๊กเกอร์โลโก้'],
            minOrder: 10,
            category: 'luggage'
        }
    ],
    gadgets: [
        {
            id: 'powerbank-wireless',
            name: 'Wireless Charging Power Bank',
            description: 'พาวเวอร์แบงค์ชาร์จไร้สายพร้อมดิสเพลย์ LCD แสดงเปอร์เซ็นต์',
            price: '890-1,290 บาท',
            image: '/images/products/powerbank-wireless.webp',
            features: [
                'ความจุ 10,000 mAh',
                'ชาร์จไร้สาย 10W',
                'ดิสเพลย์ LCD',
                'ชาร์จได้ 3 เครื่องพร้อมกัน'
            ],
            materials: ['Lithium Polymer Battery', 'ABS Plastic', 'Tempered Glass'],
            customization: ['พิมพ์โลโก้', 'แกะเลเซอร์', 'สกรีนสี'],
            minOrder: 25,
            category: 'gadgets'
        },
        {
            id: 'bluetooth-speaker',
            name: 'Portable Bluetooth Speaker',
            description: 'ลำโพงบลูทูธพกพา เสียงคุณภาพสูง กันน้ำ IPX7',
            price: '1,200-1,800 บาท',
            image: '/images/products/speaker-bluetooth.webp',
            features: [
                'เสียงคุณภาพสูง HD',
                'กันน้ำระดับ IPX7',
                'แบตเตอรี่ใช้งาน 12 ชั่วโมง',
                'เชื่อมต่อ 2 เครื่องพร้อมกัน'
            ],
            materials: ['Aluminum Alloy', 'Waterproof Fabric', 'Lithium Battery'],
            customization: ['แกะเลเซอร์โลโก้', 'สกรีนสี', 'พิมพ์ UV'],
            minOrder: 20,
            category: 'gadgets'
        }
    ],
    'gift-sets': [
        {
            id: 'executive-gift-set',
            name: 'Executive Gift Set',
            description: 'ชุดของขวัญผู้บริหาร ประกอบด้วยปากกา พาวเวอร์แบงค์ และซิ้งการ์ดโฮลเดอร์',
            price: '1,800-2,800 บาท',
            image: '/images/products/gift-executive.webp',
            features: [
                'ปากกาโลหะพรีเมี่ยม',
                'พาวเวอร์แบงค์ 5,000 mAh',
                'ซิ้งการ์ดโฮลเดอร์หนัง',
                'กล่องของขวัญหรูหรา'
            ],
            materials: ['Metal Pen', 'Leather Card Holder', 'Premium Gift Box'],
            customization: ['แกะชื่อ', 'ปักโลโก้', 'พิมพ์โลโก้'],
            minOrder: 15,
            category: 'gift-sets'
        }
    ],
    keychains: [
        {
            id: 'keychain-metal-premium',
            name: 'Premium Metal Keychain',
            description: 'พวงกุญแจโลหะพรีเมี่ยม แกะสลักได้ ทนทานไม่เปลี่ยนสี',
            price: '150-280 บาท',
            image: '/images/products/keychain-metal.webp',
            features: [
                'วัสดุโลหะผสมคุณภาพสูง',
                'ไม่เปลี่ยนสีไม่เป็นสนิม',
                'แกะสลักได้ละเอียด',
                'ขนาดกะทัดรัด'
            ],
            materials: ['Zinc Alloy', 'Stainless Steel Ring', 'Anti-rust Coating'],
            customization: ['แกะเลเซอร์', 'ปั๊มนูน', 'ลงสี'],
            minOrder: 100,
            category: 'keychains'
        }
    ],
    stationery: [
        {
            id: 'notebook-premium-leather',
            name: 'Premium Leather Notebook',
            description: 'สมุดโน้ตหนังแท้พรีเมี่ยม ปกแข็ง กระดาษคุณภาพสูง',
            price: '450-680 บาท',
            image: '/images/products/notebook-leather.webp',
            features: [
                'ปกหนังแท้คุณภาพสูง',
                'กระดาษ 120 GSM',
                'ขนาด A5 สะดวกใช้งาน',
                'ที่คั่นหน้าในตัว'
            ],
            materials: ['Genuine Leather Cover', '120 GSM Paper', 'Ribbon Bookmark'],
            customization: ['ปั๊มโลโก้', 'แกะชื่อ', 'ปักโลโก้'],
            minOrder: 30,
            category: 'stationery'
        },
        {
            id: 'pen-set-executive',
            name: 'Executive Pen Set',
            description: 'ชุดปากกาผู้บริหาร ปากกาลูกลื่นและปากกาหมึกซึม ในกล่องหรูหรา',
            price: '680-950 บาท',
            image: '/images/products/pen-executive.webp',
            features: [
                'ปากกาโลหะน้ำหนักดี',
                'หมึกเขียนลื่น',
                'กล่องหรูหรา',
                'ชุด 2 ด้าม'
            ],
            materials: ['Metal Body', 'Premium Ink', 'Velvet Box'],
            customization: ['แกะชื่อ', 'แกะโลโก้', 'พิมพ์โลโก้บนกล่อง'],
            minOrder: 25,
            category: 'stationery'
        }
    ]
}; 