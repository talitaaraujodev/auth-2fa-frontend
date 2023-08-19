import fetch from '../../helpers/ApiConfig';

export const userService = {
  async createUser(
    name: string,
    email: string,
    password: string,
    secret: any,
    token: any
  ) {
    const data = {
      name,
      email,
      password,
      secret,
      token,
    };
    console.log('dataaaa', data);
    return fetch('POST', '/users', data);
  },
  async generateSecret() {
    return fetch('GET', '/mfa');
  },
};
