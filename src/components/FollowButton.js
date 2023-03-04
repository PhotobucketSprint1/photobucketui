import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowersCount = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const userid = sessionStorage.getItem("userid");

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userid}/followers`);
        setFollowersCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFollowersCount();
  }, [userid]);

  return (
    <div>
      <p>Followers Count: {followersCount}</p>
    </div>
  );
};

export default FollowersCount;
