export default function ({ $axios }) {
  $axios.interceptors.request.use((config) => {
    const token = process.env.TOKEN;
    console.log(process.env);
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}
