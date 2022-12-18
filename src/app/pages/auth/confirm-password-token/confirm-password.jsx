import PopupLayout from "app/layouts/popup.layout/index.jsx";
import EmailIcon from "app/assets/img/Vector.png";
import { PasswordTokenVerification } from "app/components/atoms/passwordTokenConfirmation/token-verification.components";



const passwordToken = () => {
  return (
    <PopupLayout icon={EmailIcon} title="Verify your mail">
      <PasswordTokenVerification />
    </PopupLayout>
  );
};

export default passwordToken; 