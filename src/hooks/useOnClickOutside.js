import { useEffect, useRef, useState } from "react";

export function useOnClickOutside(initialState) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialState);
  const [refs, setRefs] = useState({
    parentClientWidth: 0,
    parentClientHeight: 0,
  });

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) setVisible(false);
  };

  useEffect(() => {
    if (ref.current) {
      setRefs({
        parentClientWidth: ref.current.parentElement.clientWidth,
        parentClientHeight: ref.current.parentElement.clientHeight,
      });
    }
    document.addEventListener("click", handleOutsideClick, true);
    return () =>
      document.removeEventListener("click", handleOutsideClick, true);
  }, [ref]);

  return {
    visible,
    setVisible,
    ref,
    ...refs,
  };
}

