import nodemailer from 'nodemailer';

export async function post({ request }) {
  try {
    const data = await request.json();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        user: 'huxiaoheng44@163.com',
        pass: 'YOUR_EMAIL_PASSWORD' // 需要替换为您的邮箱授权码
      }
    });

    const mailOptions = {
      from: 'huxiaoheng44@163.com',
      to: 'huxiaoheng44@163.com',
      subject: '新的课程咨询',
      html: `
        <h2>新的咨询信息</h2>
        <p><strong>姓名：</strong>${data.name}</p>
        <p><strong>电话：</strong>${data.phone}</p>
        <p><strong>咨询内容：</strong></p>
        <p>${data.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}