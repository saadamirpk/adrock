import type { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../templates/emailService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only post request allowed' });
  }
  try {
    const message = req.body;

    // send email to admin
    const emailSubject = 'New Input from Adrock';

    const emailBody = message;

    const emailParam = {
      to: 'sweetscottyt@gmail.com' as string,
      from: 'sweetscottyt@gmail.com' as string,
      subject: emailSubject,
      text: emailBody,
    };

    sendEmail(emailParam);

    return res.status(200).json({ message: 'Contact Email Sent Successfully' });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ message: errorMessage });
  }
  return '';
}
