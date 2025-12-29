import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/auth`;

export const googleLogin = async (idToken) => {
  const res = await axios.post(`${API_URL}/google`, {
    idToken,
  });
  return res.data;
};
