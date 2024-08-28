import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const personalcare = async () => {
  try {
    const response = await axiosInstance.get(
        endPoints.cms.personalcare, 
    );
    return response?.data?.data[0]?.doctor_id;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
