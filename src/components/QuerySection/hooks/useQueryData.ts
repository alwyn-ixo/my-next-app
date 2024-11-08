"use client";

import axios from "axios";
import { useState } from "react";

export const useQueryData = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://ixo-rpc.ibs.team/${endpoint}`);
      setData(response.data);
      setShow(!show);
    } catch (error) {
      console.error(`Error querying ${endpoint}:`, error);
    }
  };

  return { data, show, fetchData };
};
