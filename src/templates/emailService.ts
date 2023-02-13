import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(
  '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' as string
);

interface IEmailParams {
  subject: string;
  text: string;
  to: string;
  from: string;
}

const sendEmail = async (emailParams: IEmailParams) => {
  const email = {
    to: emailParams.to,
    from: emailParams.from,
    subject: emailParams.subject,
    text: emailParams.text,
  };

  try {
    await sendgrid.send(email);
  } catch (error) {
    throw new Error('Email could not be sent, Please try again later');
  }
};

export { sendEmail };
