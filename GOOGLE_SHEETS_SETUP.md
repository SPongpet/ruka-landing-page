# วิธีการตั้งค่า Google Sheets สำหรับฟอร์มติดต่อ

> **⚠️ คู่มือนี้ถูกย้ายแล้ว**
>
> กรุณาใช้คู่มือใหม่ที่ปรับปรุงแล้ว: **[GOOGLE_APPS_SCRIPT_SETUP.md](./GOOGLE_APPS_SCRIPT_SETUP.md)**
>
> คู่มือใหม่มีการปรับปรุง:
>
> - ✅ แก้ไขปัญหา CORS
> - ✅ ปรับปรุง Error Handling
> - ✅ เพิ่ม Logging และ Debugging
> - ✅ รองรับ Environment Variables
> - ✅ คำแนะนำแก้ไขปัญหาที่ครบถ้วน

---

## Quick Start

1. ไปที่ **[GOOGLE_APPS_SCRIPT_SETUP.md](./GOOGLE_APPS_SCRIPT_SETUP.md)**
2. ทำตามขั้นตอนการตั้งค่า
3. ใช้โค้ด Google Apps Script ที่ปรับปรุงใหม่จากไฟล์ `google-apps-script.js`

---

## สำหรับผู้ที่เคยตั้งค่าแล้ว

หากคุณเคยใช้คู่มือนี้แล้ว แต่ยังมีปัญหา กรุณา:

1. อัปเดต Google Apps Script ด้วยโค้ดใหม่จาก `google-apps-script.js`
2. Deploy ใหม่
3. ตรวจสอบ Environment Variables ใน `.env.local`

---

## ต้องการความช่วยเหลือ?

ดูคำแนะนำการแก้ไขปัญหาใน **[GOOGLE_APPS_SCRIPT_SETUP.md](./GOOGLE_APPS_SCRIPT_SETUP.md)** ในหัวข้อ "การแก้ไขปัญหา"

---

<details>
<summary>เอกสารเดิม (เลิกใช้แล้ว)</summary>

## ขั้นตอนเดิม (ไม่แนะนำให้ใช้)

```javascript
/**
 * Google Apps Script สำหรับรับข้อมูลจากฟอร์มติดต่อ RUKA
 */

// ใส่ ID ของ Google Sheet ที่นี่
const SPREADSHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";

function doPost(e) {
  try {
    // อ่านข้อมูลจาก request (รองรับทั้ง JSON และ form data)
    let data;
    if (e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else {
      // Form data
      data = e.parameter;
    }

    // เปิด Google Sheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    // ตรวจสอบว่ามี header row หรือไม่
    if (sheet.getLastRow() === 0) {
      // สร้าง header row
      const headers = [
        "วันที่/เวลา",
        "ชื่อ",
        "นามสกุล",
        "อีเมล",
        "เบอร์โทรศัพท์",
        "บริษัท/องค์กร",
        "มีข้อมูลบริษัท",
        "TAX ID",
        "ที่อยู่บริษัท",
        "หมวดหมู่สินค้า",
        "ไอคอนหมวดหมู่",
        "ชื่อสินค้า",
        "ราคาสินค้า",
        "จำนวน",
        "ข้อความ",
      ];
      sheet.appendRow(headers);
    }

    // เพิ่มข้อมูลลงใน sheet
    const rowData = [
      data.timestamp,
      data.name,
      data.surname,
      data.email,
      data.phone,
      data.company,
      data.hasCompany,
      data.taxId,
      data.address,
      data.categoryName,
      data.categoryIcon,
      data.productName,
      data.productPrice,
      data.quantity,
      data.message,
    ];

    sheet.appendRow(rowData);

    // ส่ง response กลับพร้อม CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว",
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  } catch (error) {
    console.error("Error:", error);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  }
}

// เพิ่มฟังก์ชันสำหรับ handle OPTIONS request (CORS preflight)
function doOptions(e) {
  return ContentService.createTextOutput("").setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
}

function doGet(e) {
  // สำหรับทดสอบว่า Web App ทำงานได้หรือไม่
  return ContentService.createTextOutput("RUKA Contact Form API is working!")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}
```

4. **แก้ไข SPREADSHEET_ID**:
   - เปลี่ยน `YOUR_GOOGLE_SHEET_ID_HERE` เป็น ID ของ Google Sheet ที่คุณสร้างในขั้นตอนที่ 1
5. **บันทึกโปรเจค**:
   - กด Ctrl+S หรือ ⌘+S
   - ตั้งชื่อโปรเจค เช่น "RUKA Contact Form Handler"

## ขั้นตอนที่ 3: Deploy Web App

1. ใน Google Apps Script คลิก **"Deploy"** > **"New deployment"**
2. คลิกไอคอน **⚙️ (settings)** ข้างๆ "Type"
3. เลือก **"Web app"**
4. ตั้งค่าดังนี้:
   - **Description**: RUKA Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
5. คลิก **"Deploy"**
6. **อนุญาต permissions**:
   - คลิก "Authorize access"
   - เลือกบัญชี Google ของคุณ
   - คลิก "Advanced" > "Go to [project name] (unsafe)"
   - คลิก "Allow"
7. **คัดลอก Web app URL**:
   - คัดลอก URL ที่ขึ้นต้นด้วย `https://script.google.com/macros/s/...`

## ขั้นตอนที่ 4: ตั้งค่า Environment Variables

1. สร้างไฟล์ `.env.local` ในโฟลเดอร์หลักของโปรเจค
2. เพิ่มบรรทัดนี้ในไฟล์:

```bash
# Google Apps Script Web App URL
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. **แทนที่ URL** ด้วย URL ที่คุณคัดลอกจากขั้นตอนที่ 3

## ขั้นตอนที่ 5: ทดสอบระบบ

1. รีสตาร์ท development server:

   ```bash
   npm run dev
   # หรือ
   yarn dev
   ```

2. ไปที่หน้า Contact และลองกรอกฟอร์มทดสอบ

3. ตรวจสอบใน Google Sheet ว่ามีข้อมูลเข้ามาหรือไม่

## การแก้ไขปัญหาที่เกิดขึ้นบ่อย

### ❌ ปัญหา: "ระบบยังไม่พร้อมใช้งาน"

**แก้ไข**: ตรวจสอบว่าไฟล์ `.env.local` ถูกสร้างและมี URL ที่ถูกต้อง

### ❌ ปัญหา: "เกิดข้อผิดพลาดในการส่งข้อความ"

**แก้ไข**:

1. ตรวจสอบว่า Google Apps Script deployed เป็น Web app
2. ตรวจสอบว่า permissions ถูกอนุญาตแล้ว
3. ตรวจสอบ SPREADSHEET_ID ในโค้ด Google Apps Script
4. **อัปเดต Google Apps Script** ด้วยโค้ดใหม่ที่มี CORS headers (ดูข้างบน)

### ❌ ปัญหา: ข้อมูลไม่เข้า Google Sheet

**แก้ไข**:

1. ตรวจสอบ SPREADSHEET_ID อีกครั้ง
2. ตรวจสอบว่า Google Sheet ไม่ถูกลบหรือเปลี่ยน permissions

### ❌ ปัญหา: CORS Error ในเบราว์เซอร์

**แก้ไข**:

1. ตรวจสอบว่าได้อัปเดต Google Apps Script ด้วยโค้ดใหม่ที่มี CORS headers
2. Deploy Google Apps Script ใหม่
3. ตรวจสอบว่า "Who has access" ตั้งเป็น "Anyone"

## วิธีการ Debug

### 1. ทดสอบ Google Apps Script

เปิด URL นี้ในเบราว์เซอร์:

```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

ควรแสดง: "RUKA Contact Form API is working!"

### 2. ตรวจสอบ Console ใน Browser

- กด F12 → Console tab
- ดู error messages

### 3. ตรวจสอบ Network tab

- กด F12 → Network tab
- ส่งฟอร์มและดู response:
  - Status: 200 = สำเร็จ
  - Status: 403 = ปัญหา permissions
  - Status: 500 = ปัญหาโค้ด Google Apps Script

### 4. ตรวจสอบ Google Apps Script Logs

- เปิด Google Apps Script
- ไปที่ "Executions" tab
- ดู logs และ errors

## ข้อมูลที่จะถูกบันทึกใน Google Sheet

ระบบจะบันทึกข้อมูลเหล่านี้:

1. **วันที่/เวลา** - เวลาที่ส่งฟอร์ม
2. **ชื่อ** - ชื่อผู้ติดต่อ
3. **นามสกุล** - นามสกุลผู้ติดต่อ
4. **อีเมล** - อีเมลติดต่อ
5. **เบอร์โทรศัพท์** - เบอร์โทรติดต่อ
6. **บริษัท/องค์กร** - ชื่อบริษัทหรือองค์กร
7. **มีข้อมูลบริษัท** - มี/ไม่มี ข้อมูลบริษัท
8. **TAX ID** - เลขประจำตัวผู้เสียภาษี
9. **ที่อยู่บริษัท** - ที่อยู่สำหรับออกใบเสร็จ
10. **หมวดหมู่สินค้า** - หมวดหมู่สินค้าที่สนใจ
11. **ไอคอนหมวดหมู่** - ไอคอนของหมวดหมู่
12. **ชื่อสินค้า** - ชื่อสินค้าที่เลือก
13. **ราคาสินค้า** - ราคาสินค้าที่เลือก
14. **จำนวน** - จำนวนที่ต้องการ
15. **ข้อความ** - ข้อความเพิ่มเติม

## Security และ Privacy

- ✅ ข้อมูลจะถูกส่งผ่าน HTTPS
- ✅ Google Apps Script ทำงานภายใต้บัญชี Google ของคุณ
- ✅ เฉพาะคุณเท่านั้นที่เข้าถึง Google Sheet ได้
- ⚠️ ควรตั้งค่า backup Google Sheet สำรองไว้

## การอัพเดทในอนาคต

หากต้องการเพิ่มฟิลด์ใหม่:

1. เพิ่มฟิลด์ใน React form
2. เพิ่มข้อมูลใน `submitData` object
3. เพิ่ม header ใหม่ใน Google Apps Script
4. เพิ่มข้อมูลใน `rowData` array
5. Deploy Google Apps Script ใหม่

</details>
