import PopupLayout from "app/layouts/popup.layout/index.jsx";
import { ForgetPasswordConfirmation } from "app/components/atoms/forget-password/forget-password.components";
export const ForgetPassword = () => {
    return (
        <PopupLayout title="Forget Password">
            <ForgetPasswordConfirmation />
        </PopupLayout>
    )
}
