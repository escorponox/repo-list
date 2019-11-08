import { config } from 'Config';

const redirectToLogin = () => {
  window.location.href = `${config.authUrl}/authorize?client_id=${config.clientId}&redirect_uri=${config.gatewayUrl}/callback/grant&state=${window.location.pathname}`;
};

const mustAuthencicate = async (res: any) => {
  const json = await res.clone().json();
  return (
    json.errors &&
    json.errors.some((r: any) => r.extensions.code === 'UNAUTHENTICATED')
  );
};

const getTokenFromStorage = () => localStorage.getItem('access_token');

const setHeaders = (fetchOptions: any) => ({
  ...fetchOptions,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getTokenFromStorage()}`
  }
});

const fetchProxy = ({ method }: { method: string }) =>
  new Proxy(fetch, {
    async apply(target, thisArg, args) {
      const [url, fetchOptions] = args;
      const options = setHeaders({ ...fetchOptions, method });
      const res = await target(url, options);

      if (await mustAuthencicate(res)) {
        redirectToLogin();
      } else {
        return res;
      }
    }
  });

export const api = {
  get: fetchProxy({ method: 'GET' }),
  post: fetchProxy({ method: 'POST' }),
  put: fetchProxy({ method: 'PUT' }),
  patch: fetchProxy({ method: 'PATCH' }),
  delete: fetchProxy({ method: 'DELETE' })
};
