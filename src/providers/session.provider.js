import ReLoginModal from "app/components/atoms/modal/relogin-modal.component";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "store/reducers/auth/authSlice";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const sessionTimeout = useSelector(authSelectors.sessionTimeout);
  const email = useSelector(authSelectors.email);

  useEffect(() => {
    if (sessionTimeout) {
      setOpen(true);
    }
  }, [sessionTimeout]);

  return (
    <SessionContext.Provider value={{ email }}>
      {children}
      <ReLoginModal setOpen={setOpen} open={open} email={email} />
    </SessionContext.Provider>
  );
};
