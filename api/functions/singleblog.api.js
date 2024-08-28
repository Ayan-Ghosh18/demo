import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const singleblog = async (id) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.singleblog}/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log('Error in getting blog comments:', error);
      throw error;
    }
  };