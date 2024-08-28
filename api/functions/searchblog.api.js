import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";


export const searchblog = async (searchTerm) => {
    try {
      const response = await axiosInstance.get(`${endPoints.cms.blogsearch}/${searchTerm}`);
      return response?.data?.data;
    } catch (error) {
      console.log('Error in search blog', error);
      throw error;
    }
  }