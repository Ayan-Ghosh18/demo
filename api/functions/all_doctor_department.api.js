import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const all_doctor_department = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.all_doctor_department, 
    );
    return response?.data?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};