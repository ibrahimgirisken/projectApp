import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5070/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
if (typeof window !== 'undefined' && !(api as any).__interceptorsAdded) {
  api.interceptors.response.use(
    (r) => r,
    async (err) => {
      if (err?.response?.status === 401) {
        try {
          await fetch('/api/logout', { method: 'POST' });
        } catch {}
        const current = location.pathname + location.search;
        location.href = `/login?callbackUrl=${encodeURIComponent(current)}`;
      }
      return Promise.reject(err);
    }
  );
  (api as any).__interceptorsAdded = true;
}

export default api;
