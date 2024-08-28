// import axiosInstance from "../axios/axios";
// import { endPoints } from "../endPoints/endPoints";

// export const doctorbydeptid = async (id) => {
//   try {
//     const response = await axiosInstance.get(
//        `${endPoints.cms.doctorbydeptid}/${id}`,
    
//     );
//     return response?.data?.data;
//   } catch (error) {
//     console.log("Contact Form error", error);
//   }
// };

import axiosInstance from "../axios/axios";
import { endPoints } from "../endPoints/endPoints";

export const getDoctorsByDepartment = async (departmentId) => {
    try {
        const response = await axiosInstance.get(`${endPoints.cms.departmentidwisedoctor}/${departmentId}`);
        return response?.data?.data;
    } catch (error) {
        console.log("Error fetching doctors by department", error);
        throw error;
    }
};