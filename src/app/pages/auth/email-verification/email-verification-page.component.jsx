import PopupLayout from "app/layouts/popup.layout/index.jsx";
import EmailIcon from "app/assets/img/Vector.png";
import { VerificationConfirmation } from "app/components/atoms/email-verification/email-verification.components";


const EmailVerification = () => {
  return (
    <PopupLayout icon={EmailIcon} title="Verify your mail">
      <VerificationConfirmation />
    </PopupLayout>
  );
};

export default EmailVerification; 