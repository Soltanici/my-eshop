// pages/profile.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import axios from 'axios'; // Import axios for API requests

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Assuming you have an API endpoint for user data
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>User Profile</h1>
      {userData ? (
        <div>
          {userData.isAdmin ? (
            <div>
              <h2>All Users</h2>
              <ul>
                {userData.users.map((user, index) => (
                  <li key={index}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Display other user information */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              {/* Display other user information */}
            </div>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
