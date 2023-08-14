const baseUrl = 'http://127.0.0.1:8000';
// const baseUrl = 'https://apimocha.com/open-word-dev';

const api = {
  post: (url: string, data: any) =>
    fetch(`${baseUrl}${url}`, { method: 'POST', body: data }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    }),
  get: (url: string) =>
    fetch(`${baseUrl}${url}`, { method: 'GET' }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    }),
  put: (url: string, data: any) =>
    fetch(`${baseUrl}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    }),
  delete: (url: string) =>
    fetch(`${baseUrl}${url}`, { method: 'DELETE' }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(res);
    })
};

export default api;
