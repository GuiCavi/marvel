import _axios from 'axios';

const apiUrl = 'https://gateway.marvel.com:443';

export const axios = _axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
});

export default async ({
  method,
  url,
}) => {
  try {
    const response = await axios({
      url,
      method,
      params: {
        ts: +new Date(),
        apikey: process.env.REACT_APP_MARVEL_API_KEY,
      },
    });

    return new Promise((resolve) => resolve(response));
  } catch (error) {
    console.log(`%c${error.message}`, '');

    return {
      success: false,
      message: 'Tivemos um problema. Tente novamente mais tarde',
    };
  }
};
