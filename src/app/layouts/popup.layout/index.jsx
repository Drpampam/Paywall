import { PopupContainer } from "./popup.styles";

const PopupLayout = (props) => {
  const { icon, title, children } =
    props;
  return (
    <PopupContainer>
      <div class="verification-popup-container">
        <div class="verification-container">
          {icon && <img src={icon} alt="Email-view" class="vector-view" />}
          <h1 class="notification-header">{title}</h1>
          {children}
        </div>
      </div>
    </PopupContainer>
  );
};

export default PopupLayout;
