const nodemailer = require('nodemailer');

export default function handler(req: any, res: any) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'server.adrockbuys.com',
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
    text: `Address: ${req.body.info} Person: ${req.body.person}`,
    html: `<div>Address: ${req.body.info} <br/> Person: ${req.body.person}</div>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
