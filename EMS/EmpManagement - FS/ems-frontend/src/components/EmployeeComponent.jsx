
import React, {useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllDepartments } from '../services/DepartmentService';




const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    //joining dept table to Empl table by taking departmentId
    const [departmentId, setDepartmentId] = useState('')
    const [departments, setDepartments] = useState([])


    useEffect(() => {
        getAllDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    const handleFirstName = (e) =>setFirstName(e.target.value);
  

    const handleLastName = (e) => setLastName(e.target.value);
    

    const handleEmail = (e) => setEmail(e.target.value);
    

    //Validation:
    //update Operation for using useParam hook from react-dom
    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })

    
    //usenavigate Hook - h.	Add Employee Feature – Connect React to “add Employee REST API” == 
    //Navigate to List Employee Page after form submission done:
    const navigator = useNavigate();
    //Use useEffect hook to populate the employee data in the form for update:
    //Update Employee Feature – Connect React App to “Get EMPLOYEE REST API”:
    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        //Valid Form on Submissions:
        if (validateForm()){
            const employee = {firstName, lastName, email, departmentId};
            console.log('Employee:', employee);

            //add both update and save logic:
            if(id){
                //got cut the below logic and pasted here., if validation form is true, then execute below.,
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                //call from EmployeeService. 
                createEmployee(employee).then((response) => {
                console.log(response.data);
                //Now call the navigator here
                navigator('/employees')
            }).catch(error => {
                console.error(error);
            })
            }   
        }
    }


    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors}
        if (firstName.trim()){
            errorsCopy.firstName = ''
        }
        else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if (lastName.trim()){
            errorsCopy.lastName = ''
        }
        else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }
        
        if (email.trim()){
            errorsCopy.email = ''
        }
        else {
            errorsCopy.email = 'Email is requires';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    // Update operation:
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee </h2>
        } else{
            return <h2 className='text-center'>Add Employee </h2>
        }
    }


    

  return (
    <div>
        <div className='container'>
            <br /> <br />
            <div className='card'>
                {/* <h2 className='text-center'>Add Employee </h2> -------- remove this*/} 
                {
                    pageTitle()
                }
                <div className='card-body col-md-6 offset-md-3 offset-md-3'>
                    <form> 
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name:'
                                name='firstName'
                                value={firstName} 
                                className={`form-control ${ errors.firstName ? 'is-invalid': ''}`}
                                onChange={handleFirstName}
                            />
                            {/* validation */}
                            { errors.firstName && <div className='invalid-feedback'> { errors.firstName } </div> }
                        </div> 

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name:'
                                name='lastName'
                                value={lastName} 
                                className={`form-control ${ errors.lastName ? 'is-invalid': ''}`}
                                onChange={handleLastName}
                            />
                            {/* validation */}
                            { errors.lastName && <div className='invalid-feedback'> { errors.lastName } </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Email:'
                                name='email'
                                value={email} 
                                className={`form-control ${ errors.email ? 'is-invalid': ''}`}
                                onChange={handleEmail}
                            />
                            {/* validation */}
                            { errors.email && <div className='invalid-feedback'> { errors.email } </div> }
                        </div>
                        {/* Joining departmentId to Empl form */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Select Department</label>

                            <select
                                className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                                value={departmentId}
                                onChange={(e) => setDepartmentId(e.target.value)}
                            >
                                <option value="Select Department">Select Department</option>
                                {
                                    departments.map(department =>
                                        <option key={department.id} value={department.id}>{department.departmentName}</option>
                                    )
                                }
                            </select>




                            {/* validation */}
                            { errors.department && <div className='invalid-feedback'> { errors.department } </div> }
                        </div>
                        {/* Joining departmentId to Empl form */}

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default EmployeeComponent