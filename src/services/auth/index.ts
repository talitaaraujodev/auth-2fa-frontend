import fetch from '../../helpers/ApiConfig';

export const authService = {
  async auth(email: string, password: string, token: string) {
    const data = {
      email,
      password,
      token,
    };
    return fetch('POST', '/login', data);
  },
};
