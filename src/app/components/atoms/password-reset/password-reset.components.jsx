  import {PasswordReset,VerificationButton} from "./password-reset.styles";

export const PasswordResetConfirmation = () => {
    return (
      <PasswordReset>
        <p class="notification-paragrapgh">We sent a password reset link to your email. 
        Please click the link to reset your password</p>
        <p class="notification-paragraph-two">Don’t receive the email?  <span class="span-element">Click to Resend link</span>
        </p>
        <VerificationButton>Back to Login</VerificationButton>
      </PasswordReset>
    );
  };