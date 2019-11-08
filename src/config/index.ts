export const config: {
  env?: string;
  gatewayUrl: string;
  authUrl: string;
  clientId: string;
} = {
  env: process.env.NODE_ENV,
  gatewayUrl: process.env.GATEWAY_URL || 'http://localhost:3001',
  authUrl: process.env.AUTH_URL || 'https://github.com/login/oauth',
  clientId: process.env.CLIENT_ID || 'da3339c99cf8d8c23df0'
};
