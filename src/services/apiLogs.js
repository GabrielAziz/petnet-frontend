import axios from "axios";
import { attachAuthInterceptor } from "./authInterceptor";

const apiLogs = axios.create({
  baseURL: import.meta.env.VITE_API_LOGS_BASE_URL,
  withCredentials: true, // envia o cookie JWT automaticamente
});

attachAuthInterceptor(apiLogs);

export default apiLogs;