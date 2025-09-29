import { useState } from "react";
import { apiService } from "../services/apiService";

export const useDelete = () => {
  const [isError, setIsError] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const deleteData = async (id) => {
    try {
      setIsMutating(true);
      setIsError(false);
      const response = await apiService.delete(id);
      return response;
    } catch (e) {
      setIsError(true);
      throw e;
    } finally {
      setIsMutating(false);
    }
  };

  return {
    deleteData,
    isError,
    isMutating,
  };
};
