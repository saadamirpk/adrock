const nodemailer = require('nodemailer');

export default function handler(req: any, res: any) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'mail.adrockbuys.com',
    auth: {
      user: 'info@adrockbuys.com',
      pass: 'S4M]V9.&ta?;',
    },
    secure: true,
  });
  const mailData = {
    from: 'info@adrockbuys.com',
    to: 'sweetscottyt@gmail.com',
    subject: 'You Got a New Submission',
    text: `Address: ${req.body.info}`,
    html: `<div>${req.body.info}</div>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
