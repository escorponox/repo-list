import React, { useEffect } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

export const AuthCallback: React.FC<RouteComponentProps> = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const accessToken = urlParams.get('access_token');
    const state = urlParams.get('state');

    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      navigate(state || '/');
    } else {
      navigate('/not-allowed');
    }
  }, []);

  return null;
};
