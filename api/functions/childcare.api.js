import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const childcare = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.childcare, 
    );
    return response?.data?.data[0]?.doctor_id;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};