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
