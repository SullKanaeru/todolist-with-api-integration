import { useEffect, useState } from "react";
import { apiService } from "../services/apiService";

export const useGet = () => {
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await apiService.getAll();

      setGetData(response.data);
    } catch (e) {
      setIsError(true);
      console.log("error: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    getData,
    setGetData,
    isError,
    isLoading,
    refetch: fetchData
  };
};
