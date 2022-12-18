import PopupLayout from "app/layouts/popup.layout/index.jsx";
import EmailIcon from "app/assets/img/Vector.png";
import { PasswordResetConfirmation } from "app/components/atoms/password-reset/password-reset.components";

const PasswordReset = () => {
  return (
    <PopupLayout icon={EmailIcon} title="Check your mail">
      <PasswordResetConfirmation />
    </PopupLayout>
  );
};

export default PasswordReset;
