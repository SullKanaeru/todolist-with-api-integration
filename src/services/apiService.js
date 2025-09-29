import apiClient from "./apiClient";

export const apiService = {
  getAll: () => apiClient.get("/todo"),
  getAllById: (id) => apiClient.get(`/todo/${id}`),

  create: (data) => apiClient.post("/todo", data),
  update: (id, data) => apiClient.put(`todo/${id}`, data),
  delete: (id) => apiClient.delete(`/todo/${id}`),
};
