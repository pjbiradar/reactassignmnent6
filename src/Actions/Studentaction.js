
export const addstudent = (data)=>{
    return{
        type:"ADD_STUDENT",
        payload: data
        
    }
}

export const updatestudent = (data)=>{
    return{
        type:"UPDATE_STUDENT",
        payload: data
        
    }
}