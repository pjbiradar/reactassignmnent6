import React, {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addstudent,updatestudent } from '../Actions/Studentaction';


const Addstudent = () => {

    const student = useSelector(state => state.Addstudentreducer)
    const dispatch = useDispatch()
    const navigte = useNavigate();

    const { id } = useParams();
    const [info, setInfo] = useState({
        Id: "",
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    })

    useEffect(async() => {
        
        await student.filter((val) => val.Id === id).map((vall) => setInfo(vall))

    }, [])

    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInfo({ ...info, [name]: value })


    }

    const submit = (e) => {
        e.preventDefault();
        if (info.Name ===''|| info.Age === ''|| info.Batch=== '' || info.Course === '') {
            alert("pls fill the data")
        }
        else{

        if (!id == "") {
            const newdata = { ...info, Id: id }
            dispatch(updatestudent(newdata))

        }
        else {
            const newdata = { ...info, Id: `${student.length + 1}` }

            dispatch(addstudent(newdata))
        }
    }

        navigte('/students')

    }

    return (
        <div>
            <div>
                <label>Name</label>
                <input  onChange={change} name='Name' value={info.Name} /> <br />
                <label>Age</label>
                <input  name='Age' onChange={change} value={info.Age} />
            </div>
            <div>
                <label>Course</label>
                <input name='Course' onChange={change} value={info.Course} />
                <label>Batch</label>
                <input  name='Batch' onChange={change} value={info.Batch} />


            </div>
            <div>
                <button  onClick={submit}>Submit</button>

            </div>




        </div>
    )
}

export default Addstudent