import { environment } from '../environments';
import { utils } from '../utils';

const baseUrl = environment.apiURL;

const request = async (method: string, sufix: string, body?: object) => {
  try {
    const headersConfig = new Headers();
    headersConfig.set('Content-Type', 'application/json');

    const fetchConfig: RequestInit = {
      method: method,
      headers: headersConfig,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    };
    if (body) {
      fetchConfig.body = JSON.stringify(body);
    }
    const token = utils.getToken();
    if (token) {
      headersConfig.set('Authorization', `Bearer ${token}`);
    }
    const response = await fetch(baseUrl + sufix, fetchConfig);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export default request;
