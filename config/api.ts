const baseUrl = 'http://127.0.0.1:8000';

const api = {
  post: (url: string, data: any) =>
    fetch(`${baseUrl}${url}`, { method: 'POST', body: data }),
  get: (url: string) => fetch(`${baseUrl}${url}`, { method: 'GET' }),
  put: (url: string, data: any) =>
    fetch(`${baseUrl}${url}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (url: string) => fetch(`${baseUrl}${url}`, { method: 'DELETE' })
};

export default api;
