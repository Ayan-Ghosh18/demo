import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const createcomment = async (data) => {
    console.log('data is',data);
    
      try {
        const response = await axiosInstance.post(endPoints.cms.createcomment, data);
        return response?.data;
      } catch (error) {
        console.log('Error in creating comment:', error);
        throw error;
      }
    };