//otpService.js

import { sendEmail } from './emailService.js';

const otpStore = new Map();
const OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * Generate and send OTP via AWS SES
 */
export const sendOTPViaSES = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiresAt = Date.now() + OTP_EXPIRY_TIME;
  otpStore.set(email, { otp, expiresAt });

  const subject = "Your OTP for Registration";
  const text = `Your OTP is ${otp}. It is valid for 5 minutes.`;

  return await sendEmail(email, subject, text);
};

/**
 * Verify OTP for given email
 */
export const verifyOTPValue = (email, otp) => {
  const data = otpStore.get(email);
  if (!data) return false;

  const { otp: storedOtp, expiresAt } = data;

  if (Date.now() > expiresAt) {
    otpStore.delete(email);
    return false;
  }

  const isMatch = storedOtp.toString() === otp;
  if (isMatch) otpStore.delete(email);

  return isMatch;
};