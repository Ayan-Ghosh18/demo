import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getblogcomment = async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.getblogcomment}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log('Error in getting blog comments:', error);
      throw error;
    }
  };