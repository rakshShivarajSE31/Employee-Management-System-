import axios from "axios"

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments';

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

// Add Department - connect REACT to [ADD DEPARTMENT REST API]
// In DepartmentService write a code to call ‘Add Department’ REST API using Axios:
export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);

// Update connect REACT APP to “Get Department” REST API:
// In Department Service, write a code to call “GET DEPT REST API” using Axios:
export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);

// Connect React App to “Update Department REST API”:
// We will write a rest client code to call update Department API using Axios.
export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId, department);

//Delete Dept Feature in REACT app:
export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);



