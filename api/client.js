import { create } from "apisauce";

const apiClient = create({
  baseURL: "localhost:9000/api",
});

export default apiClient;
