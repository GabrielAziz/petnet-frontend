export function attachAuthInterceptor(instance) {
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (
        error.response?.status === 401 &&
        window.location.pathname !== "/conta"
      ) {
        window.location.href = "/conta";
      }
      return Promise.reject(error);
    }
  );
}
