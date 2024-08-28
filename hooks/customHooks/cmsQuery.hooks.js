import { useMutation, useQuery } from "@tanstack/react-query";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { details, GetLandingPageDetails } from "@/api/functions/details.api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { all_doctor_department } from "@/api/functions/all_doctor_department.api";
import { personalcare } from "@/api/functions/personalcare.api";
import { doctorbydeptid, getDoctorsByDepartment } from "@/api/functions/doctor_by_dept.api";
import { featured } from "@/api/functions/featured.api";
import { Cookies } from "react-cookie";
import {  createappointment } from "@/api/functions/appointment.api";
import { childcare } from "@/api/functions/childcare.api";
import { create } from "@/api/functions/create.api";
import { alldepartment } from "@/api/functions/alldepartment.api";
import { allblog } from "@/api/functions/allblog.api";
import { recentblog } from "@/api/functions/recentblog.api";
import { useRouter } from "next/router";
import { userdashboard } from "@/api/functions/dashboard.api";
import { createcomment } from "@/api/functions/createcomment.api";
import { searchblog } from "@/api/functions/searchblog.api";
import { getblogcomment } from "@/api/functions/getblogcomment.api";
import { singleblog } from "@/api/functions/singleblog.api";

export const useCreateMutation = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: create, 
    onSuccess: (response) => {
      const {
        token,
        status,
        message,
        data: { name },
      } = response || {};

      if (status === 200) {
        cookies.set("token", token, {
          path: "/",
          sameSite: "None",
          secure: true,
        });
        cookies.set("name", name, { path: "/" });
      

        toast.success(message);
        // router.push("/cms/alldoctor");
      } else {
        toast.error(message);
      }

      queryClient.invalidateQueries(["USERSSS"]);
    },
    onError: (error) => {
      toast.error("An error occurred");
      
    },
  });
};

export const useCreateAppoinment = () => {
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: createappointment,
    onSuccess: (response) => {
      const { status, message } = response || {};
      if (status === 200) {
        toast.success(message);
      } else {
        toast.success(message);
      }
      queryClient.invalidateQueries({ queryKey: ['create appointment'] });
    },
    onError: (error) => {
      console.log('Error in create appointment', error);
      toast.error(error.response.data.message);
    },
  });
};


export const useGetalldoctors = (page, perPage) => {
  return useQuery({
    queryKey: ["alldoctordepartment", page, perPage],
    queryFn: () => all_doctor_department({ page, perPage }),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetDoctordetail = (id) => {
  return useQuery({
    queryKey: ["doctordetail"],
    queryFn: () => details(id),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetDepartmentwisedoctor = (departmentId)=>{
  return useQuery({
    queryKey:["department wise doctor",departmentId],
    queryFn:()=>getDoctorsByDepartment(departmentId),
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export const useGetpersonalcare = () => {
  return useQuery({
    queryKey: ["personalcare"],
    queryFn: () => personalcare(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetDoctorfeatured = () => {
  return useQuery({
    queryKey: ["doctorfeatured"],
    queryFn: () => featured(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};
export const useGetchildcare = () => {
  return useQuery({
    queryKey: ["doctorchildcare"],
    queryFn: () => childcare(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetalldepertment = () => {
  return useQuery({
    queryKey: ["alldepartment"],
    queryFn: () => alldepartment(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetuserdashboard = (userId) => {
  return useQuery({
      queryKey: ['userdash', userId],
      queryFn: () => userdashboard(userId), // Pass the userId to the function
      keepPreviousData: true,
      staleTime: 5000,
      enabled: !!userId, 
  });
};

export const useGetallblog = () => {
  return useQuery({
    queryKey: ["allblog"],
    queryFn: () => allblog(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};


export const useGetrecentblog = () => {
  return useQuery({
    queryKey: ["recentblog"],
    queryFn: () => recentblog(),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetsearchblog = (searchTerm)=>{
  return useQuery({
    queryKey:['search blog',searchTerm],
    queryFn:()=>searchblog(searchTerm),
    keepPreviousData: true,
    staleTime: 5000,
    enabled: !!searchTerm,
  })
}

export const useCreateComment = () => {
  const queryClient = useGlobalHooks();

  return useMutation({
    mutationFn: createcomment,
    onSuccess: (response) => {
      const { status, message } = response || {};
      if (status===200) {
        console.log('reponse',response);
        
        toast.success('Comment created successfully');
        queryClient.invalidateQueries("getblogcomment");
      } 
      // queryClient.invalidateQueries("getBlogComments");
     
    },
    onError: (error) => {
      console.log('Error in creating comment:', error);
      toast.error('Failed to create comment');
    },
  });
};

export const useGetComment = (id) => {
  return useQuery({
    queryKey: ['getblogComment', id],
    queryFn: () => getblogcomment(id),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useGetsingleBlog = (id) => {
  return useQuery({
    queryKey: ['getBlogComments', id],
    queryFn: () => singleblog(id),
    keepPreviousData: true,
    staleTime: 5000,
  });
};
