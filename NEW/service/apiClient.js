const baseUrl = process.env.REACT_APP_API_BASE_URL;

const apiClient = {
  // User Authentication
  signup: async (userData) => {
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/signup`,
      userData
    );
    return response.data;
  },
  login: async (credentials) => {
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/login`,
      credentials
    );
    return response.data;
  },

  // User Profile
  getUserProfile: async (userId) => {
    const response = await axios.get(`${baseUrl}/api/v1/users/${userId}`);
    return response.data;
  },
  updateUserProfile: async (userId, userData) => {
    const response = await axios.patch(
      `${baseUrl}/api/v1/users/${userId}`,
      userData
    );
    return response.data;
  },
  // ... other API functions for health data, daily updates, etc.
};

export default apiClient;
