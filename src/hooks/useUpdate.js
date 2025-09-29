import { useState } from "react";
import { apiService } from "../services/apiService";

export const useUpdate = () => {
  const [isMutating, setIsMutating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const putData = async (id, updateData) => {
    try {
      setIsMutating(true);
      setIsError(false);

      const response = await apiService.update(id, updateData);
      return response;
    } catch (e) {
      setIsError(true);
    } finally {
      setIsMutating(false);
    }
  };

  const getTodoById = async (id) => {
    try {
      setIsMutating(true);
      setIsError(false);

      const response = await apiService.getAllById(id);
      setSelectedData(response.data);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsMutating(false);
    }
  };

  return {
    putData,
    getTodoById,
    selectedData,
    isError,
    isMutating,
  };
};
