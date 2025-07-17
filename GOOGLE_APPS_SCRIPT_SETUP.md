# คู่มือการตั้งค่า Google Apps Script สำหรับฟอร์มติดต่อ RUKA

## ขั้นตอนการตั้งค่า

### 1. สร้าง Google Sheet

1. ไปที่ [Google Sheets](https://sheets.google.com)
2. สร้าง Spreadsheet ใหม่
3. ตั้งชื่อ Sheet เป็น "RUKA Contact Form Submissions"
4. คัดลอก ID ของ Google Sheet จาก URL
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```

### 2. สร้าง Google Apps Script

1. ไปที่ [Google Apps Script](https://script.google.com)
2. คลิก "New Project"
3. ลบโค้ดเก่าออกทั้งหมด
4. คัดลอกโค้ดจากไฟล์ `google-apps-script.js` ไปวาง
5. แก้ไข `SPREADSHEET_ID` ให้เป็น ID ของ Google Sheet ที่สร้างไว้
   ```javascript
   const SPREADSHEET_ID = "YOUR_ACTUAL_SHEET_ID_HERE";
   ```

### 3. ตั้งค่า Permissions

1. คลิก "Save" (Ctrl+S)
2. ตั้งชื่อโปรเจกต์เป็น "RUKA Contact Form API"
3. คลิก "Review Permissions" เมื่อระบบถาม
4. เลือก Google Account ของคุณ
5. คลิก "Advanced" → "Go to RUKA Contact Form API (unsafe)"
6. คลิก "Allow"

### 4. Deploy Web App

1. คลิก "Deploy" → "New Deployment"
2. คลิก gear icon ⚙️ และเลือก "Web app"
3. ตั้งค่าดังนี้:
   - **Description**: "RUKA Contact Form API v1.0"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. คลิก "Deploy"
5. คัดลอก **Web app URL** ที่ได้

### 5. อัพเดต Frontend Code

แก้ไขไฟล์ `src/app/contact/page.tsx`:

```typescript
const GOOGLE_SCRIPT_URL = "YOUR_WEB_APP_URL_HERE";
```

หรือสร้าง Environment Variable:

1. เพิ่มในไฟล์ `.env.local`:

   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
   ```

2. แก้ไข code เป็น:
   ```typescript
   const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
   ```

### 6. ทดสอบระบบ

1. ทดสอบ API โดยไปที่ Web App URL ในเบราว์เซอร์
2. ควรเห็นข้อความ: "RUKA Contact Form API is working!"
3. ทดสอบส่งฟอร์มจากเว็บไซต์
4. ตรวจสอบว่าข้อมูลถูกบันทึกใน Google Sheet

## การแก้ไขปัญหา

### ปัญหา CORS

- ตรวจสอบว่า `doOptions` function มีอยู่ใน script
- ตรวจสอบ CORS headers ใน response

### ข้อมูลไม่เข้า Google Sheet

- ตรวจสอบ SPREADSHEET_ID ให้ถูกต้อง
- ตรวจสอบ permissions ของ Google Apps Script
- ดู execution logs ใน Google Apps Script

### Frontend Error

- ตรวจสอบ Web App URL ให้ถูกต้อง
- ตรวจสอบว่า deploy แล้ว
- ดู Console errors ในเบราว์เซอร์

## การใช้งาน Console Logs

ดู logs ใน Google Apps Script:

1. ไปที่ [Google Apps Script](https://script.google.com)
2. เปิดโปรเจกต์
3. คลิก "Executions" ในแถบด้านซ้าย
4. คลิกดู execution logs

## การอัพเดต Script

เมื่อต้องการแก้ไข script:

1. แก้ไขโค้ดใน Google Apps Script
2. Save (Ctrl+S)
3. Deploy ใหม่:
   - "Deploy" → "Manage Deployments"
   - คลิก pencil icon ✏️
   - เลือก "New Version"
   - คลิก "Deploy"

## ข้อมูลที่เก็บใน Google Sheet

| คอลัมน์        | ประเภทข้อมูล | ตัวอย่าง               |
| -------------- | ------------ | ---------------------- |
| วันที่/เวลา    | DateTime     | 25/12/2567, 14:30:00   |
| ชื่อ           | Text         | "สมชาย"                |
| นามสกุล        | Text         | "ใจดี"                 |
| อีเมล          | Email        | "somchai@email.com"    |
| เบอร์โทรศัพท์  | Text         | "082-123-4567"         |
| บริษัท/องค์กร  | Text         | "บริษัท ABC จำกัด"     |
| มีข้อมูลบริษัท | Text         | "มี" หรือ "ไม่มี"      |
| TAX ID         | Text         | "1234567890123"        |
| ที่อยู่บริษัท  | Text         | "123 ถนนสุขุมวิท..."   |
| หมวดหมู่สินค้า | Text         | "เครื่องมือช่าง"       |
| ไอคอนหมวดหมู่  | Emoji        | "🔧"                   |
| ชื่อสินค้า     | Text         | "ชุดไขควง"             |
| ราคาสินค้า     | Text         | "1,500 บาท"            |
| จำนวน          | Number       | "5"                    |
| ข้อความ        | Text         | "ต้องการใบเสนอราคา..." |

## Security Notes

- Google Apps Script ทำงานภายใต้ Google Account ของคุณ
- ข้อมูลถูกเก็บใน Google Sheet ที่คุณเป็นเจ้าของ
- Web App สามารถเข้าถึงได้จากทุกคน (Anyone) แต่จะทำได้เฉพาะส่งข้อมูลเท่านั้น
- ไม่มีการเก็บ sensitive data ใน frontend code
