
import React from 'react'
import { useState } from 'react'
import { createDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService'

//to navigate from 1 page to another page
import { useNavigate } from 'react-router-dom'

// Change page title dynamically (add and update):
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



const DepartmentComponent = () => {

    const [departmentName, setDepartmentName] = useState('')
    const [departmentDescription, setDepartmentDescription] = useState('')

    const navigator =  useNavigate();

    //to chnage page title:
    const {id} = useParams();

    //Use useEffect Hook to populate the dept data in the form for update:
    useEffect(() => {
        getDepartmentById(id).then((response) => {
            setDepartmentName(response.data.departmentName);
            setDepartmentDescription(response.data.departmentDescription);
        }).catch(error => {
            console.error(error);
        })
    }, [id])

    function saveOrUpdateDepartment(e){
        e.preventDefault();
        const department = { departmentName, departmentDescription}
        console.log(department);
        if(id){
            updateDepartment(id, department).then((response) => {
                console.log(response.data);
                navigator('/departments')
            }).catch(error => {
                console.error(error);
        })
        }else {
            createDepartment(department).then((response) => {
                console.log(response.data);
        
                navigator('/departments')
        
            }).catch(error => {
                console.error(error);
            })
        }
    }
  

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Departement</h2>
        } else {
            return <h2 className='text-center'>Add Departement</h2> 
        }
    }

  return (
    <div className='container'><br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body col-md-6 offset-md-3 offset-md-3'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Department Name</label>
                            <input
                                type='text'
                                name='departmentName'
                                placeholder='Enter Department Name'
                                value={departmentName}
                                onChange={(e) => setDepartmentName(e.target.value)}
                                className = 'form-control'
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Department Description</label>
                            <input
                                type='text'
                                name='departmentDescription'
                                placeholder='Enter Department Description'
                                value={departmentDescription}
                                onChange={(e) => setDepartmentDescription(e.target.value)}
                                className = 'form-control'
                            />
                        </div>
                        <button className='btn btn-success' onClick={(e) => saveOrUpdateDepartment(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DepartmentComponent