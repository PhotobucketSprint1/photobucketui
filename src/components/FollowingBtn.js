import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowingCount = () => {
  const [followingCount, setFollowingCount] = useState(0);
  const userid = sessionStorage.getItem("userid");

  useEffect(() => {
    const fetchFollowingCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userid}/following`);
        setFollowingCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFollowingCount();
  }, [userid]);

  return (
    <div>
      <p>Following Count: {followingCount}</p>
    </div>
  );
};

export default FollowingCount;
