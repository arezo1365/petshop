import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function useGetAPI(URL) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const response = await axios(URL);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.response.status);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, data, error };
}
