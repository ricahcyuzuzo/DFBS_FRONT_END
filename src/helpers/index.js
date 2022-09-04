import { toast } from "react-toastify";

export const handleAuthError = (error) => {
  if (error?.response?.status == 401) {
    window.location = "/logout";
  }
};

export const randomNumber = () => {
  const max = 99999;
  const min = 11111;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const toastMessage = (type, message) => {
  if (type == "info") {
    toast.info(message);
  }
  if (type == "error") {
    toast.error(message);
  }
  if (type == "success") {
    toast.success(message);
  }
};

export const errorHandler = (error) => {
  if (error?.response?.data?.msg) {
    toastMessage("error", error.response.data.msg);
  } else {
    toastMessage("error", error.message);
  }
  handleAuthError(error);
};
