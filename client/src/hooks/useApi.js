import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = url => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(res => setApiData(res.data))
      .catch(err => console.error(err));
  }, []);

  return apiData;
};

export default useApi;
