//package net.javaguides.ems.mapper;
//
//import net.javaguides.ems.dto.DepartmentDto;
//import net.javaguides.ems.entity.Department;
//
//public class DepartmentMapper {
//    //convert department JPA entity into  department Dto.
//    public static DepartmentDto mapToDepartmentDto(Department department) {
//        return new DepartmentDto(
//                department.getId();
//                department.getDepartmentName();
//                department.getDepartmentDescription();
//        );
//    }
//
//    public static Department mapToDepartment(DepartmentDto departmentDto){
//        return new Department(
//                departmentDto.getId();
//                departmentDto.getDepartmentName();
//                departmentDto.getDepartmentDescription();
//        );
//    }
//}
package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department) {
        if (department == null) {
            return null;
        }

        DepartmentDto departmentDto = new DepartmentDto();
        departmentDto.setId(department.getId());
        departmentDto.setDepartmentName(department.getDepartmentName());
        departmentDto.setDepartmentDescription(department.getDepartmentDescription());
        return departmentDto;
    }

    public static Department mapToDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null) {
            return null;
        }

        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        return department;
    }
}
