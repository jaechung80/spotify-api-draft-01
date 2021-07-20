import { useEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../api/index';

const RedirectPage = (props) => {
  useEffect(() => {
    const { history, location } = props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/home');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      console.log('in redirect, localStorage successful', localStorage);
      history.push('/home');
    } catch (error) {
      console.log('error in redirect catch', error);
      history.push('/');
    }
  });

  return null;
};

export default RedirectPage;
