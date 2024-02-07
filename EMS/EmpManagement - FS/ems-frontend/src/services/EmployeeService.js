import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);


//Add Employee Feature – Connect React to “add Employee REST API”: Development Steps:
//In EmployeeService, write a code to call AddEmployee REST API using axios:Go to EmployeeService.js
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

//Update Employee Feature – Connect React App to “Get EMPLOYEE REST API”:
//GET is nothing but update function. 
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

//Update Employee Feature – connect REACT APP to update Employee REST API:
//In EmployeeService, write a code to call Update Employee REST API using AXIOS:
//Now if you enter details in update page and submit, this has to show in the employee page
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

//Delete Employee Feature in REACT app:
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);

