// import axiosInstance from "../axios/axios";
// import { endPoints } from "../endPoints/endPoints";

// export const appointment = async (payload) => {
//   try {
//     const response = await axiosInstance.post(
//         endPoints.cms.appointment, 
//         payload
//     );
//     return response?.data;
//   } catch (error) {
//     console.log("Contact Form error", error);
//   }
// };
import axiosInstance from '../axios/axios';
import { endPoints } from '../endPoints/endPoints';

export const createappointment = async (appointmentData) => {
  try {
    const response = await axiosInstance.post(endPoints.cms.appointment, appointmentData);
    return response?.data;
  } catch (error) {
    console.log('Error in creating appointment xyz', error);
    throw error;
  }
};
