import { phoneProvider } from "../config/firebase";

const sendVerification = async (phoneNumber, recaptchaVerifier) => {
  console.log("onLogin", phoneProvider);
  try {
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );
    return true;
  } catch (error) {
    return false;
    console.log(error.message);
  }
};
export default sendVerification;
