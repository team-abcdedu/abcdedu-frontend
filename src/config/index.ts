export const BASE_URL =
  import.meta.env.MODE === 'development'
    ? '/api/v1'
    : `${import.meta.env.VITE_API_ROOT as string}/api/v1`;
