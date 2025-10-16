//emailService.js
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

/**
 * Send an email using AWS SES
 */
export const sendEmail = async (to, subject, text) => {
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Charset: 'UTF-8', Data: text },
      },
      Subject: { Charset: 'UTF-8', Data: subject },
    },
    Source: process.env.SES_VERIFIED_EMAIL,
  };

  try {
    await ses.sendEmail(params).promise();
    console.log(`Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error("❌ SES send error:", error);
    return false;
  }
};