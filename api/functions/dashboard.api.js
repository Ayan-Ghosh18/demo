import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const userdashboard = async (userId) => {
    try {
        const response = await axiosInstance.get
        (`${endPoints.cms.userdashboard}/${userId}`);
        return response?.data; // Return the full data object
    } catch (error) {
        console.log("Error in user dashboard", error);
        throw error; // Re-throw the error to be caught in the query function
    }
};