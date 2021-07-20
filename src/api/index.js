import axios from 'axios';

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((accumulator, currentValue) => {
      const [title, value] = currentValue.split('=');
      accumulator[title] = value;
      return accumulator;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  console.log('in get, result.data', result.data);
  return result.data;
};

export const post = async (url, params) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  console.log('in post, result.data', result.data);
  return result.data;
};
