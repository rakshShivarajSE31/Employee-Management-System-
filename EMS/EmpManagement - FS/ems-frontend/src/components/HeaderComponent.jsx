import React from 'react'
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div style={{ marginTop: '10px' }}>
        <header >
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <a className="navbar-brand" href="https://www.javaguides.net" 
                style={{ marginLeft: '60px' }}>EMPLOYEE  MANAGEMENT  SYSTEM</a> 


                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to ='/employees'>Employees</NavLink>
                      </li>

                      <li className='nav-item'>
                        <NavLink className='nav-link' to ='/departments'>Departments</NavLink>
                      </li>

                    </ul>
                  </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent 