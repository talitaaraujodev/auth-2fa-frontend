export const utils = {
  getToken() {
    return localStorage.getItem('token');
  },
  setToken(token: string) {
    return localStorage.setItem('token', token);
  },
};
