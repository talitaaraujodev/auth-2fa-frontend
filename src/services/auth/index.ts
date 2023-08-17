import fetch from '../../helpers/ApiConfig';

export const authService = {
  async auth(email: string, password: string, code: string) {
    const data = {
      email,
      password,
    };
    return fetch('POST', '/login', data);
  },
};
