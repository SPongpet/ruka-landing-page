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
    images?: string[];
}

export const productDetails: Record<string, Product[]> = {
    tumblers: [
        {
            id: 'TB0000',
            name: 'แก้วน้ำสแตนเลส 710 ML',
            description: 'แก้วน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 710 ML',
            price: '450-650 บาท',
            image: '/images/products/tumblers/TB0000/Hedbec51571f74013b828a5df4bb07978H.jpg',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 710 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 100,
            category: 'tumblers',
            images: [
                '/images/products/tumblers/TB0000/H5ff8e2dd8f3245bb86154882d0dea0689.jpg',
                '/images/products/tumblers/TB0000/H068dfd457d5142d3b94acc2df36e8138I.avif',      
                '/images/products/tumblers/TB0000/H7432fb6f0aed42a2aee96293e01446f9h.avif',      
                '/images/products/tumblers/TB0000/H5251682bd96c4625a49faee5f19db6b3d.avif',      
                '/images/products/tumblers/TB0000/Hbfd0b2409e354a0186321358c8c828a4t.avif',      
                '/images/products/tumblers/TB0000/Hdbe8ed0615534fec84cd19415ac85395d.avif',      
                '/images/products/tumblers/TB0000/Hf6c4eadfdc1b4c45ab1809fa80278da0F.jpg',      
            ]
        },
        {
            id: 'TB0001',
            name: 'แก้วน้ำสแตนเลส 40 oz',
            description: 'แก้วน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 40 oz',
            price: '520-750 บาท',
            image: '/images/products/tumblers/TB0001/1.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 40 oz'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: [
                '/images/products/tumblers/TB0001/2.avif',
                '/images/products/tumblers/TB0001/3.avif',
                '/images/products/tumblers/TB0001/4.avif'
            ]
        },
        {
            id: 'TB0002',
            name: 'แก้วน้ำสแตนเลส 30 oz',
            description: 'แก้วน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 30 oz',
            price: '480-680 บาท',
            image: '/images/products/tumblers/TB0002/Hde5b2e19815a4623b846631d96bcd9e9s.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 30 oz'
            ],
            materials: ['Stainless Steel 316', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 100,
            category: 'tumblers',
            images: [
                '/images/products/tumblers/TB0002/1.avif',
                '/images/products/tumblers/TB0002/2.avif',
                '/images/products/tumblers/TB0002/3.avif'
            ]
        },
        {
            id: 'TB0003',
            name: 'แก้วน้ำสแตนเลส 30 oz (รุ่น 2)',
            description: 'แก้วน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 20 oz /30 oz',
            price: '480-680 บาท',
            image: '/images/products/tumblers/TB0003/H0f21554436724986ba015c7b424f5df8G.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 20 oz /30 oz'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: [
                '/images/products/tumblers/TB0003/H1bf2e2da114949ccb09263b85790d846C.avif',
                '/images/products/tumblers/TB0003/H3f1d05a401b44789b7bfe34cb1c99aecs.avif',
                '/images/products/tumblers/TB0003/H563300d767c74147b84df08b09e46b59I.avif'
            ]
        },
        {
            id: 'TB0004',
            name: 'แก้วน้ำสแตนเลส 40 oz (รุ่น 2)',
            description: 'แก้วน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 30 oz /40 oz',
            price: '520-750 บาท',
            image: '/images/products/tumblers/TB0004/H428191333c9342799635c8f3c947db7dW.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 30 oz /40 oz'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: [
                '/images/products/tumblers/TB0004/H527bc6f221304555b80fa5635419d2a6Q.avif',
                '/images/products/tumblers/TB0004/H677d7496a98b4baeb2c56babc0f123c6t.avif',
                '/images/products/tumblers/TB0004/Ha6f654aff4944e2d98bd83f57b0eb640h.avif'
            ]
        },
        {
            id: 'TB0005',
            name: 'กระบอกน้ำสแตนเลส 500 ML',
            description: 'กระบอกน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 350 ML /500 ML',
            price: '420-620 บาท',
            image: '/images/products/tumblers/TB0005/H25ea893450ee4586b4b060f413eb4e5bl.png',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 350 ML /500 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        },
        {
            id: 'TB0006',
            name: 'กระบอกน้ำสแตนเลส 550 ML',
            description: 'กระบอกน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 550 ML',
            price: '450-650 บาท',
            image: '/images/products/tumblers/TB0006/H1e34f4a693144587a18b53f90df2e6394.jpg',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 550 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        },
        {
            id: 'TB0007',
            name: 'กระบอกน้ำสแตนเลส 500 ML (รุ่น 2)',
            description: 'กระบอกน้ำสแตนเลสสตีลคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 350 ML /500 ML',
            price: '420-620 บาท',
            image: '/images/products/tumblers/TB0007/Hdcbc2ff0a49b4779b1ce2fed21b676efE.jpg',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 350 ML /500 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        },
        {
            id: 'TB0008',
            name: 'กระติกน้ำสแตนเลสสุญญากาศ 600 ML',
            description: 'กระติกน้ำสแตนเลสสุญญากาศคุณภาพสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง ขนาด 600 ML',
            price: '480-680 บาท',
            image: '/images/products/tumblers/TB0008/H059460af11394d80bb3aeccafc4d5e84o.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 600 ML'
            ],
            materials: ['Stainless Steel 304'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        },
        {
            id: 'TB0009',
            name: 'แก้วน้ำสแตนเลส กีฬา 600 ML',
            description: 'แก้วน้ำสแตนเลสสำหรับนักกีฬา เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง',
            price: '450-650 บาท',
            image: '/images/products/tumblers/TB0009/H0028c537ed4b4c45998d5da1e7969f60P.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 600 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        },
        {
            id: 'TB0010',
            name: 'แก้วน้ำสแตนเลส ทรงสูง 750 ML',
            description: 'แก้วน้ำสแตนเลสทรงสูง เก็บความเย็นได้นาน 8 ชั่วโมง และความร้อนได้ 6 ชั่วโมง',
            price: '480-680 บาท',
            image: '/images/products/tumblers/TB0010/1.avif',
            features: [
                'เก็บความเย็น 8 ชั่วโมง ความร้อน 6 ชั่วโมง',
                'วัสดุสแตนเลสสตีล 304 Food Grade',
                'ฝาปิดกันรั่ว 100%',
                'ขนาด 750 ML'
            ],
            materials: ['Stainless Steel 304', 'BPA Free Plastic Lid', 'Silicone Seal'],
            customization: ['สกรีนสี', 'เลเซอร์', '3D printing'],
            minOrder: 50,
            category: 'tumblers',
            images: []
        }
    ],
    umbrellas: [
        {
            id: 'UM0000',
            name: 'ร่มกันฝนออโต้ พรีเมี่ยม',
            description: 'ร่มเปิดอัตโนมัติคุณภาพพรีเมี่ยม กันลมแรง ผ้าเคลือบกันน้ำ',
            price: '580-850 บาท',
            image: '/images/products/umbrellas/UM0000/H0db052961c93466581f9b6c3d39cf95aZ.png',
            features: [
                'ระบบเปิดอัตโนมัติ',
                'กันลมแรงได้ดี',
                'ผ้าเคลือบกันน้ำ',
                'ขนาด 27 นิ้ว'
            ],
            materials: ['Pongee Fabric', 'Fiberglass Ribs', 'Aluminum Shaft'],
            customization: ['พิมพ์โลโก้', 'สกรีนสี', 'ปักโลโก้'],
            minOrder: 50,
            category: 'umbrellas',
            images: []
        },
        {
            id: 'UM0001',
            name: 'ร่มพับ กันแดด กันฝน',
            description: 'ร่มพับขนาดเล็ก พกพาสะดวก น้ำหนักเบา เหมาะสำหรับเดินทาง',
            price: '350-520 บาท',
            image: '/images/products/umbrellas/UM0001/H0bc049a2577842588a4545fcbe9bbb40a.avif',
            features: [
                'ขนาดกะทัดรัด พกพาง่าย',
                'น้ำหนักเบาเพียง 300g',
                'ผ้าแห้งเร็ว',
                'มีซองใส่ร่ม'
            ],
            materials: ['Polyester Fabric', 'Steel Ribs', 'Aluminum Frame'],
            customization: ['พิมพ์โลโก้บนซอง', 'สกรีนร่ม', 'ปักชื่อ'],
            minOrder: 30,
            category: 'umbrellas',
            images: []
        },
        {
            id: 'UM0002',
            name: 'ร่มแฟชั่น กันแดด UV',
            description: 'ร่มแฟชั่นกันแดด ป้องกันรังสี UV ได้ดี ดีไซน์สวยงาม',
            price: '420-650 บาท',
            image: '/images/products/umbrellas/UM0002/H085aedadf9bf4c059249b5354f7b4cafp.avif',
            features: [
                'ป้องกันรังสี UV 99%',
                'ผ้าคุณภาพสูง',
                'ดีไซน์แฟชั่น',
                'ขนาด 24 นิ้ว'
            ],
            materials: ['UPF 50+ Fabric', 'Carbon Fiber Ribs', 'Aluminum Handle'],
            customization: ['พิมพ์โลโก้', 'สกรีนลาย', 'ปักชื่อ'],
            minOrder: 25,
            category: 'umbrellas',
            images: []
        }
    ],
    bags: [
        {
            id: 'BA0000',
            name: 'กระเป๋าผ้าแคนวาส พรีเมี่ยม',
            description: 'กระเป๋าผ้าแคนวาสคุณภาพสูง ทนทาน เป็นมิตรต่อสิ่งแวดล้อม',
            price: '280-420 บาท',
            image: '/images/products/bags/BA0000/H218d15b1f22f46d092167aa0ad557099t.jpg',
            features: [
                'ผ้าแคนวาสหนา 12oz',
                'ทนทานใช้งานได้นาน',
                'เป็นมิตรต่อสิ่งแวดล้อม',
                'ขนาด 38x42cm'
            ],
            materials: ['100% Cotton Canvas', 'Reinforced Handles'],
            customization: ['สกรีนโลโก้', 'ปักโลโก้', 'พิมพ์ดิจิทัล'],
            minOrder: 50,
            category: 'bags',
            images: []
        },
        {
            id: 'BA0001',
            name: 'กระเป๋าเป้ ใส่แล็ปท็อป',
            description: 'กระเป๋าเป้ใส่แล็ปท็อปสำหรับนักธุรกิจ ดีไซน์เรียบหรู',
            price: '950-1,450 บาท',
            image: '/images/products/bags/BA0001/H1ff2cd8dd6b342f9a5f82a5047998183V.png',
            features: [
                'ช่องใส่แล็ปท็อป 15.6 นิ้ว',
                'ผ้ากันน้ำ',
                'ช่องใส่ของหลากหลาย',
                'สายสะพายนุ่มสบาย'
            ],
            materials: ['Water-resistant Polyester', 'YKK Zippers', 'Padded Compartment'],
            customization: ['ปักโลโก้', 'แปะโลโก้', 'พิมพ์ชื่อ'],
            minOrder: 25,
            category: 'bags',
            images: []
        },
        {
            id: 'BA0002',
            name: 'กระเป๋าเดินทาง รีไซเคิล',
            description: 'กระเป๋าเดินทางจากวัสดุรีไซเคิล เป็นมิตรต่อสิ่งแวดล้อม ใช้งานได้หลากหลาย',
            price: '650-950 บาท',
            image: '/images/products/bags/BA0002/H4819472bfaab4a9cb7713bc9c26b6e46T.avif',
            features: [
                'วัสดุรีไซเคิล 100%',
                'กันน้ำได้ดี',
                'มีล้อลากสะดวก',
                'ขนาด 45 ลิตร'
            ],
            materials: ['Recycled Polyester', 'Water-proof Coating', 'Heavy-duty Wheels'],
            customization: ['ปักโลโก้', 'สกรีนโลโก้', 'แปะแพทช์'],
            minOrder: 30,
            category: 'bags',
            images: []
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
            category: 'hats',
            images: []
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
            category: 'hats',
            images: []
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
            category: 'luggage',
            images: []
        }
    ],
    gadgets: [
        {
            id: 'GG0000',
            name: 'พาวเวอร์แบงค์ ชาร์จไร้สาย',
            description: 'พาวเวอร์แบงค์ชาร์จไร้สายพร้อมดิสเพลย์ LCD แสดงเปอร์เซ็นต์',
            price: '890-1,290 บาท',
            image: '/images/products/gadgets/GG0000/H1624465bf9ad4733b46769e3033b314eE.jpg',
            features: [
                'ความจุ 10,000 mAh',
                'ชาร์จไร้สาย 10W',
                'ดิสเพลย์ LCD',
                'ชาร์จได้ 3 เครื่องพร้อมกัน'
            ],
            materials: ['Lithium Polymer Battery', 'ABS Plastic', 'Tempered Glass'],
            customization: ['พิมพ์โลโก้', 'แกะเลเซอร์', 'สกรีนสี'],
            minOrder: 25,
            category: 'gadgets',
            images: []
        },
        {
            id: 'GG0001',
            name: 'ลำโพงบลูทูธ พกพา',
            description: 'ลำโพงบลูทูธพกพา เสียงคุณภาพสูง กันน้ำ IPX7',
            price: '1,200-1,800 บาท',
            image: '/images/products/gadgets/GG0001/H0120eefe090d4b1fb5ec42e3eb7507c6y.jpg',
            features: [
                'เสียงคุณภาพสูง HD',
                'กันน้ำระดับ IPX7',
                'แบตเตอรี่ใช้งาน 12 ชั่วโมง',
                'เชื่อมต่อ 2 เครื่องพร้อมกัน'
            ],
            materials: ['Aluminum Alloy', 'Waterproof Fabric', 'Lithium Battery'],
            customization: ['แกะเลเซอร์โลโก้', 'สกรีนสี', 'พิมพ์ UV'],
            minOrder: 20,
            category: 'gadgets',
            images: []
        },
        {
            id: 'GG0002',
            name: 'หูฟังบลูทูธ TWS',
            description: 'หูฟังบลูทูธไร้สาย True Wireless เสียงใส คุณภาพสูง',
            price: '650-950 บาท',
            image: '/images/products/gadgets/GG0002/H0274b6069458401baa51ae750926efb9N.avif',
            features: [
                'เสียงเบสหนัก คุณภาพสูง',
                'ระยะเชื่อมต่อ 10 เมตร',
                'แบตเตอรี่ใช้งาน 8 ชั่วโมง',
                'กล่องชาร์จพกพา'
            ],
            materials: ['ABS Plastic', 'Silicone Ear Tips', 'Lithium Battery'],
            customization: ['แกะโลโก้', 'สกรีนสี', 'พิมพ์บนกล่อง'],
            minOrder: 30,
            category: 'gadgets',
            images: []
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
            category: 'gift-sets',
            images: []
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
            category: 'keychains',
            images: []
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
            category: 'stationery',
            images: []
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
            category: 'stationery',
            images: []
        }
    ]
}; 