// import { response } from 'express'
// import React, {useState} from 'react'
// import { useEffect } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import React, { useState, useEffect } from 'react';

//button onclick:
import { useNavigate } from 'react-router-dom'



const ListEmployeeComponent = () => {
 
    const [employees, setEmployees] = useState([])

    const navigator =  useNavigate();

    useEffect(() => {
        //call the method to list all the employees
        getAllEmployee();
    }, [])

    // function getAllEmployee(){
    //     listEmployees().then((response) => {
    //         setEmployees(response.data);
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }

    function getAllEmployee() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('Error response:', error.response);
                // Handle the error as needed (e.g., show an error message to the user)
            });
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        //call deleteEmployee from EmployeeService
        deleteEmployee(id).then((response) => {
            getAllEmployee();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container' style={{ backgroundColor: '#e6f7ff', padding: '20px' }}>
        <h2 className='text-center mt-4 mb-5'>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <div className='table-responsive'>
        <table className='table table-hover table-bordered 'style={{ backgroundColor: '#f2f2f2' }}>
            <thead className='thead-dark'>
                <tr>
                    <th scope='col'>Employee Id</th>
                    <th scope='col'>Employee First Name</th>
                    <th scope='col'>Employee Last Name</th>
                    <th scope='col'>Employee Email ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick = {() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} 
                                style={{marginLeft:'10px'}}>Delete</button>
                                
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListEmployeeComponent