// utils/s3.js
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadToS3 = async (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  const key = `verificationDocs/${uuidv4()}-${path.basename(filePath)}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: 'image/jpeg', // or image/png
  };

  try {
    const result = await s3.upload(params).promise();
    fs.unlinkSync(filePath); // Clean up temp file
    return result.Location; // ✅ Public URL
  } catch (error) {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    throw error;
  }
};