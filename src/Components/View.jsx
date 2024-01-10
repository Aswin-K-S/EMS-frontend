import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function View() {

  const {id} = useParams()

  const base_url = `http://localhost:8000/view-employee/${id}`
  const[viewemployee,setViewemployee]=useState([])

  const fetchdata=async()=>{
    const result=await axios.get(base_url)
    setViewemployee(result.data.employee_det)
    console.log(viewemployee);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
     <div  className="card " style={{display:'flex',padding:'20px',margin:'3vw'}}>
     <h1 style={{textAlign:'center'}}>EMPLOYEE INFO</h1><br />
    <MDBTable striped >
      
      <MDBTableBody style={{height:'40vh'}}>
       
        <tr>
          <th scope='row' >ID</th>
          <th scope='row' >{viewemployee.id}</th>
          
        </tr>
        <tr>
          <th scope='row'   >NAME</th>
          <th scope='row' >{viewemployee.name}</th>
        </tr>
        <tr>
          <th scope='row' >AGE</th>
          <th scope='row' >{viewemployee.age}</th>
        </tr>
        <tr>
          <th scope='row'  >DESIGNATION</th>
          <th scope='row' >{viewemployee.designation}</th>
        </tr>
        <tr>
          <th scope='row' >SALARY</th>
          <th scope='row' >{viewemployee.salary}</th>
        </tr>
        
      </MDBTableBody>
      
    </MDBTable>
    <div style={{textAlign:'center'}}>
      <Link to='/'>  <button className='btn btn-primary'>Back to home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default View