import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Icon from '../../icons/icons';

function GoogleLogin() {
  const [token, setToken] = useState('');
  const url = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + token; 
  
  const login = useGoogleLogin({
    onSuccess: tokenResponse => setToken(tokenResponse.access_token),
  });
 
  useEffect(() => {
    if (token.length != 0) {
        axios.get(url)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Hata:', error);
        });
    }
  }, [token])

  return (
    <>
      <button
        className='border flex items-center justify-center rounded-full w-60 h-8 hover:bg-gray-extraLight'
        onClick={() => login()}>
        <Icon name="googleLogo" size={16}/> 
        <span className='text-xs font-bold ml-2'>Google ile kaydol</span>
      </button>
    </>
  );
}

export default GoogleLogin;
