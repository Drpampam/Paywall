import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import FormInputTwo from "app/components/atoms/form-input-two/form-input-two.component";
import PageTitle from "app/components/atoms/page-title/page-title.component";
import FormCard from "app/components/molecules/form-card/form-card.component";
import DashboardLayout from "app/layouts/dashboard/dashboard-layout.component";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

const Profile = () => {
  const {authStore, walletStore} = useStore()
  let navigate = useNavigate();

  return (
    <DashboardLayout>
      <PageTitle text="PROFILE" />
      <FormCard>
        <BackArrow handleReturn={() => navigate(-1)} />
        <div>
          <FormInputTwo
            disabled
            label="First Name"
            name="firstName"
            placeholder="First Name"
            type="text"
            value={authStore.user.firstName}
          />
          <FormInputTwo
            disabled
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={authStore.user.lastName}
          />
          <FormInputTwo
            disabled
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            value={authStore.user.email}
          />
          <FormInputTwo
            disabled
            label="Wallet Code"
            name="code"
            placeholder="Wallet Code"
            type="code"
            value={walletStore.wallet.code}
          />
        </div>
      </FormCard>
    </DashboardLayout>
  );
};
export default Profile;
