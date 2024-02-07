
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
// Using React-router-dom lib:
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

function App() {
  
  return (
    <>
    <BrowserRouter >
      <HeaderComponent />
        <Routes>
          {/* //http:localhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponent/>} > </Route>

          {/* //http:localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeeComponent />}></Route>

          {/* Now after a user clicks on 'Add Employee' button --> a method called onclick - addNewEmployee function */}
          {/* //http:localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <EmployeeComponent />}></Route>

          {/* Add Route for Update Employee in APP component: */}
          {/* //http:localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent />}></Route>

          {/* //http:localhost:3000/department */}
          <Route path='/departments' element = { <ListDepartmentComponent />}></Route>

{/* ------------------------------------------------------------------------------------------------------------------------- */}

          {/* Add “Add department” button in a List DepartmentComponent: */}
          {/* http://localhost:3001/add-department */}
          <Route path='/add-department' element = {<DepartmentComponent />}></Route>

          {/* Add route for updateDepartment function: */}
          <Route path='/edit-department/:id' element = { <DepartmentComponent /> }></Route>



        </Routes>
      <FooterComponent />
      </BrowserRouter>
    </>
  )
}
export default App
