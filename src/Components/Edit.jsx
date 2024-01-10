import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  const[empid,setId]=useState("")
  const[empname,setName]=useState("")
  const[empage,setAge]=useState("")
  const[empdesignation,setDesignation]=useState("")
  const[empsalary,setSalary]=useState("")

  const base_url = `http://localhost:8000`
 
  //get a particular id of an employee from the url
  const {id}=useParams()
  console.log(id);
  

  //get a particular details of an employee
  const fetchdata=async(id)=>{
    const result=await axios.get(`${base_url}/view-employee/${id}`)
   
    setId(result.data.employee_det.id);
    setName(result.data.employee_det.name);
    setAge(result.data.employee_det.age);
    setDesignation(result.data.employee_det.designation);
    setSalary(result.data.employee_det.salary);
  }


  useEffect(() => {
    fetchdata(id);
  }, []);


const location=useNavigate()
  
  const UpdateEmployee=async(e)=>{
    e.preventDefault()
    const body={
      id:empid,
      name:empname,
      age:empage,
      designation:empdesignation,
      salary:empsalary
    }
    const result=await axios.post(`${base_url}/update-employee/${id}`,body)
    alert(result.data.message) //employee added successfully
       location('/')
      
    }

  return (
    <div> 
      <div className="container text-center">
        <h1>Edit Employee Details</h1>
        <form className='p-5 m-5  shadow rounded-4'>
        <MDBInput onChange={(e)=>setId(e.target.value)} value={empid} label='Id' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setName(e.target.value)} value={empname} label='Name' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setAge(e.target.value)} value={empage} label='Age' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setDesignation(e.target.value)} value={empdesignation} label='Designation' id='formControlLg' type='text' size='lg' /><br />
        <MDBInput onChange={(e)=>setSalary(e.target.value)} value={empsalary} label='Salary' id='formControlLg' type='text' size='lg' /><br />
        <div>
        <button onClick={(e)=>UpdateEmployee(e)} className='btn btn-success m-4 w-25'>Update</button>
    </div>
    </form>
  </div></div>
  )
}

export default Edit