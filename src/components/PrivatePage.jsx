import axios from 'axios';
import React, { useEffect, useState } from 'react';

import routes from '../routes.js';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const PrivatePage = () => {
// BEGIN (write your solution here)
  const [content, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(routes.usersPath(), { headers: getAuthHeader() });
      setData(data);
    };

    fetchData();
  }, []);
  return (content && <div>{content}</div>);
// END
};
export default PrivatePage;
