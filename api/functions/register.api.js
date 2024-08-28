import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const register = async (payload) => {
  try {
    const response = await axiosInstance.post(
        endPoints.auth.register, 
        payload
    );
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};