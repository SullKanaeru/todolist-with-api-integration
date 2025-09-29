import { useEffect, useState } from "react";
import { apiService } from "../services/apiService";

export const useCreate = () => {
  const [isMutating, setIsMutating] = useState(false);
  const [isError, setIsError] = useState(false);

  const postData = async (todoData) => {
    try {
      setIsMutating(true);
      setIsError(false);

      const response = await apiService.create(todoData);
    } catch (e) {
      setIsError(true);
      console.log("error: ", e);
    } finally {
      setIsMutating(false);
    }
  };

  return {
    postData,
    isError,
    isMutating,
  };
};
