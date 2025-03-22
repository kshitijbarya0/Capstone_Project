import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user and token from localStorage when the app starts
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser)); // Parse user data only if a token exists
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("user"); // Clear invalid data
        localStorage.removeItem("token"); // Remove token if user data is corrupted
      }
    }

    setLoading(false);
  }, []);

  // 🟢 Register Function
  const register = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post("http://localhost:4001/api/user/register", userData);

      // Store token & user if registration is successful
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return { success: true, message: "Registered successfully!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed!"
      };
    }
  };

  // 🟢 Login Function
  const login = async (credentials) => {
    try {
      const { data } = await axios.post("http://localhost:4001/api/user/login", credentials, {
        withCredentials: true, // if using cookies for authentication
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return { success: true, message: "Login successful!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed!"
      };
    }
  };

  // 🔵 Forgot Password Function
  const forgotPassword = async (email) => {
    try {
      const { data } = await axios.post("http://localhost:4001/api/user/forgotPassword", { email });
      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Failed to send reset email!" };
    }
  };

  // 🔵 Reset Password Function
  const resetPassword = async (otp, newPassword, confirmPassword) => {
    try {
      const { data } = await axios.post("http://localhost:4001/api/user/resetPassword", {
        otp,
        password: newPassword,
        confirmPassword,
      });

      return { success: true, message: data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Password reset failed!"
      };
    }
  };

  // 🔴 Logout Function
  const logout = async () => {
    try {
      await axios.post("http://localhost:4001/api/user/logout", {}, { withCredentials: true });

      setUser(null); // Clear user state
      localStorage.removeItem("user"); // Remove user from localStorage
      localStorage.removeItem("token"); // Remove token from localStorage

      return { success: true, message: "Logged out successfully!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Logout failed!"
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, register, login, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
