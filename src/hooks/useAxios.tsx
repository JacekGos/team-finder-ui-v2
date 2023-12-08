import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_URL;

const useAxios = (axiosParams: AxiosRequestConfig) => {

  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || axiosParams.method === "get"
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    console.log('fetch data');
    try {
      const result = await axios.request(params);
      console.log('fetch result: ', result.data);
      setResponse(result);
    } catch (error) {
        console.log('fetch error: ', error);
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    console.log('sending data..');
    setLoading(true);
    setError(undefined);
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
