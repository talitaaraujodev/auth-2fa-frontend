import fetch from '../../helpers/ApiConfig';

export const userService = {
  async createUser(name: string, email: string, password: string) {
    const data = {
      name,
      email,
      password,
    };
    return fetch('POST', '/users', data);
  },
};
