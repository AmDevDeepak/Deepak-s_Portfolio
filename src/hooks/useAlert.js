import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });
  const showAlert = ({ text, type = "danger" }) => {
    setAlert({ text, type, show: true });
  };
  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "danger" });
  };
  return {
    alert,
    showAlert,
    hideAlert,
  };
};

export default useAlert;
