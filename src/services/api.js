import axios from "axios";
import { attachAuthInterceptor } from "./authInterceptor";
  const api = axios.create({
    baseURL: "https://api.netcao.com.br/api",
    withCredentials: true
  });
  attachAuthInterceptor(api);
  export default api;

 
  //  import axios from "axios";
  //  const api = axios.create({
  //   baseURL: "/api",
  //   withCredentials: true
  //  });
  // export default api;
//alterar quando for para produção, para o endereço do backend, e retirar o proxy do package.json