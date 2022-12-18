import { ForgetPassword, ResetPasswordButton } from "./forget-password.styles";
import EmailIcon from "app/assets/svg/emailIcon.svg";
import { InputComponent } from "./forget-password.styles";

export const ForgetPasswordConfirmation = () => {
    return (
        <ForgetPassword>
            <div className='contains-content'>
                <div className='reset-form'>
                    <p className='contains-content-text'>
                        Enter the email associated with your account and we’ll <br />
                        send an email with instruction to reset your password
                    </p>
                </div>
                <form action="">
                    <label htmlFor="email" className='reset-form-label'>Email</label> <br />
                    <InputComponent>
                        <img src={EmailIcon} className = "email-icon"/>
                        <input type="email" name='email' id='email' placeholder='Enter your email' className='reset-form-input' />
                    </InputComponent>
                    <ResetPasswordButton>Reset Password</ResetPasswordButton>
                </form>
                <input type="submit" value="Back To Login" name='Back To Login' className='back-to-login-btn' />
            </div>
        </ForgetPassword>
    )
}