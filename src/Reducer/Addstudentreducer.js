const listss = [{
    "Id": "1",
    "Name": "Pooja",
    "Age": "21",
    "Course": "MERN",
    "Batch": "december"
},

{
    "Id": "2",
    "Name": "neha",
    "Age": "24",
    "Course": "MERN",
    "Batch": "september"
},

{
    "Id": "3",
    "Name": "harry",
    "Age": "22",
    "Course": "MERN",
    "Batch": "may"
},

]

const Addstudentreducer = (state= listss, action)=>{
    switch (action.type) {
        case "ADD_STUDENT":
            return [...state,action.payload];

            case "UPDATE_STUDENT" :
                const latest = state.map((vall)=> vall.Id===action.payload.Id ? action.payload : vall)
                return latest ;

            
            
    
        default:
            return state;
    }
}

export default Addstudentreducer;