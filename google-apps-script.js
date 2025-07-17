/**
 * Google Apps Script สำหรับรับข้อมูลจากฟอร์มติดต่อ RUKA
 * เวอร์ชันปรับปรุงใหม่ที่แก้ไขปัญหา CORS และการรับส่งข้อมูล
 */

// ใส่ ID ของ Google Sheet ที่นี่
const SPREADSHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";

function doPost(e) {
  try {
    console.log("Received POST request:", e);
    
    // อ่านข้อมูลจาก request
    let data;
    
    if (e.postData) {
      const contentType = e.postData.type || "";
      console.log("Content type:", contentType);
      
      if (contentType.includes("application/json")) {
        // JSON data
        data = JSON.parse(e.postData.contents);
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        // Form data - ลองแปลง JSON ที่ส่งมาในรูป form data
        try {
          data = JSON.parse(e.postData.contents);
        } catch (jsonError) {
          // ถ้าแปลง JSON ไม่ได้ ใช้ parameter แทน
          data = e.parameter;
        }
      } else {
        // Default to parameter
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    console.log("Parsed data:", data);

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!data.name || !data.email || !data.phone) {
      throw new Error("ข้อมูลไม่ครบถ้วน: กรุณากรอกชื่อ อีเมล และเบอร์โทรศัพท์");
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
    const timestamp = data.timestamp || new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "2-digit", 
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const rowData = [
      timestamp,
      data.name || "",
      data.surname || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.hasCompany || "",
      data.taxId || "",
      data.address || "",
      data.categoryName || "",
      data.categoryIcon || "",
      data.productName || "",
      data.productPrice || "",
      data.quantity || "",
      data.message || "",
    ];

    sheet.appendRow(rowData);

    console.log("Data saved successfully:", rowData);

    // ส่ง response กลับพร้อม CORS headers
    const response = {
      success: true,
      message: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว",
      timestamp: timestamp,
    };

    const output = ContentService.createTextOutput(JSON.stringify(response));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;

  } catch (error) {
    console.error("Error:", error);

    const errorResponse = {
      success: false,
      error: error.toString(),
      message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    };

    const errorOutput = ContentService.createTextOutput(JSON.stringify(errorResponse));
    errorOutput.setMimeType(ContentService.MimeType.JSON);
    return errorOutput;
  }
}

// เพิ่มฟังก์ชันสำหรับ handle OPTIONS request (CORS preflight)
function doOptions(e) {
  console.log("Received OPTIONS request for CORS preflight");
  
  const optionsOutput = ContentService.createTextOutput("");
  return optionsOutput;
}

function doGet(e) {
  // สำหรับทดสอบว่า Web App ทำงานได้หรือไม่
  const testResponse = {
    status: "OK",
    message: "RUKA Contact Form API is working!",
    timestamp: new Date().toISOString(),
    version: "2.0",
  };

  const getOutput = ContentService.createTextOutput(JSON.stringify(testResponse));
  getOutput.setMimeType(ContentService.MimeType.JSON);
  return getOutput;
}

// ฟังก์ชันเสริมสำหรับทดสอบการเชื่อมต่อ Google Sheets
function testGoogleSheets() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const testData = [
      new Date().toLocaleString("th-TH"),
      "Test",
      "User", 
      "test@example.com",
      "0000000000",
      "Test Company",
      "มี",
      "1234567890123",
      "Test Address",
      "Test Category",
      "🔧",
      "Test Product",
      "1,000 บาท",
      "1",
      "This is a test message",
    ];
    
    sheet.appendRow(testData);
    console.log("Test data added successfully");
    return "SUCCESS: Test data added to sheet";
  } catch (error) {
    console.error("Test failed:", error);
    return "ERROR: " + error.toString();
  }
} 