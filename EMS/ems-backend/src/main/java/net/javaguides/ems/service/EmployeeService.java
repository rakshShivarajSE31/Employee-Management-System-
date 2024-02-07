package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

import java.util.List;

public interface EmployeeService {
    //Add Employee
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    //GET employee method:
    EmployeeDto getEmployeeById(Long employeeId); // this is the method.

    //GET All Employees
    List<EmployeeDto> getAllEmployees();

    //build Update Employee method:
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    //build Delete Employee method:
    void deleteEmployee(Long employeeId);

}
