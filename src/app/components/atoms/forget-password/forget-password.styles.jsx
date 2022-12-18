import styled from "styled-components";
import Button from "../button/button.component";

export const ForgetPassword = styled.div`
.contains-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    margin: auto;
    gap: 16px;
}

.contains-content-text {
    opacity: 0.5;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
}

.reset-form-label {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

}

.reset-form-input {
    outline: none;
    height: 48px;
    width: 395px;
    left: 0px;
    top: 28px;
    border-radius: 6px;
    padding: 9px 16px 8px 40px;
    margin-bottom:20px;
}

.back-to-login-btn {
    border: 0;
    padding: 10px 24px;
    border-radius: 3px;
    cursor: pointer;
    transition: 300ms;
    margin-top: 20px;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    background: #0000000F;
}

.back-to-login-btn:hover {
    transform: translateY(-8px);
}
`;

export const ResetPasswordButton = styled(Button)`
    margin:auto;
    width: 100%;
    border-radius:6px;
`;
export const InputComponent = styled.div`
    position: relative;
    .email-icon {
        position: absolute;
        left: 15px;
        top: 18px;
    }
`