import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('📤 ข้อมูลที่รับมา:', body);

    // Log ข้อมูลที่รับมาเพื่อดู structure อย่างชัดเจน
    console.log('📋 === CONTACT FORM SUBMISSION ===');
    console.log('🕒 Timestamp:', new Date().toLocaleString('th-TH'));
    console.log('👤 Name:', `${body.name} ${body.surname}`);
    console.log('📧 Email:', body.email);
    console.log('📱 Phone:', body.phone);
    console.log('🏢 Company:', body.company || 'ไม่ระบุ');
    console.log('🏢 Has Company Info:', body.hasCompany);
    if (body.hasCompany === 'มี') {
      console.log('🆔 TAX ID:', body.taxId);
      console.log('📍 Address:', body.address);
    }
    if (body.categoryName) {
      console.log('📦 Category:', `${body.categoryIcon} ${body.categoryName}`);
      console.log('🛒 Product:', body.productName);
      console.log('💰 Price:', body.productPrice);
      console.log('🔢 Quantity:', body.quantity);
    }
    console.log('💬 Message:', body.message || 'ไม่มีข้อความเพิ่มเติม');
    console.log('=====================================');

    // ส่งข้อมูลไปยัง Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1Eshcdcp-uyIx7aWTq4u1wczGME56E2t66mPlz_islG4XFVLBsqIHzBjUufqW5-aJlA/exec';
    
    console.log('🔗 Calling Google Apps Script:', GOOGLE_SCRIPT_URL);
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('📥 Response status:', response);
    console.log('📥 Response status:', response.status);
    console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('📥 Raw response text:', responseText);
    
    // ตรวจสอบว่า response เป็น HTML error page หรือไม่
    if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
      console.error('❌ Received HTML response instead of JSON');
      throw new Error('Google Apps Script returned HTML instead of JSON - possibly misconfigured');
    }

    // ตรวจสอบว่า response status ไม่ใช่ 200
    if (!response.ok) {
      console.error('❌ Non-200 response from Google Apps Script');
      throw new Error(`Google Apps Script returned status ${response.status}: ${responseText}`);
    }

    let result;
    try {
      result = JSON.parse(responseText);
      console.log('✅ Parsed JSON response:', result);
    } catch (parseError) {
      console.error('❌ Failed to parse JSON response:', parseError);
      console.error('❌ Response text was:', responseText);
      throw new Error(`Invalid JSON response from Google Apps Script: ${responseText}`);
    }

    // ตรวจสอบว่า Google Apps Script ส่ง error กลับมาหรือไม่
    if (result.success === false) {
      console.error('❌ Google Apps Script returned error:', result);
      throw new Error(result.message || result.error || 'Unknown error from Google Apps Script');
    }

    console.log('✅ Data successfully sent to Google Sheets');

    // ส่ง response กลับไปยัง frontend
    return NextResponse.json(result, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });

  } catch (error) {
    console.error('❌ Error in API route:', error);
    console.error('❌ Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'เกิดข้อผิดพลาดในการส่งข้อมูล',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 