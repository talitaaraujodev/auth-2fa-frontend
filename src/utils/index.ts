import { toast } from 'react-toastify';

export const utils = {
  getToken() {
    return localStorage.getItem('token');
  },
  setToken(token: string) {
    return localStorage.setItem('token', token);
  },
  successMessage(message: string) {
    toast.success(message);
  },
  errorMessage(message: string) {
    return toast.error(message);
  },
};
