
import API from "./index"; // Use the protected instance

export const googleLogin = async (idToken) => {
  const res = await API.post("/api/auth/google", { idToken });
  return res.data;
};