export const endPoints = {
    auth: {
        login: "/login",
        register: "/register"
    },
    cms: {
        create: "/createcontact",
        all_doctor_department: "/alldoctordepartment",
        appointment: "/createappointment",
        departmentidwisedoctor: "/departmentidwisedoctor",
        featured: "/featured",
        details: "/doctordetails",
        personalcare: "/personalcare",
        childcare: "/childcare",
        alldepartment: "/alldepartment",
        userdashboard: "/userdash",
        allblog: "/allblog",
        recentblog: "/recentblog",
        blogsearch: "/blogsearch",
        singleblog: "/singleblog",
        createcomment: "/createblogcomment",
        getblogcomment: '/getblogcomment'
    }
};

export const endPointsPath = [
    endPoints.auth.login,
    endPoints.auth.register,
    endPoints.cms.create,
    endPoints.cms.all_doctor_department,
    endPoints.cms.appointment,
    endPoints.cms.departmentidwisedoctor,
    endPoints.cms.featured,
    endPoints.cms.details,
    endPoints.cms.personalcare,
    endPoints.cms.childcare,
    endPoints.cms.alldepartment,
    endPoints.cms.userdashboard,
    endPoints.cms.allblog,
    endPoints.cms.recentblog,
    endPoints.cms.blogsearch,
    endPoints.cms.singleblog,
    endPoints.cms.createcomment,
    endPoints.cms.getblogcomment
]
