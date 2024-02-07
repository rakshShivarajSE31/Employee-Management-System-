//
//package net.javaguides.ems.entity;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "departments")
//public class Department {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "department_name")
//    private String departmentName;
//
//    @Column(name = "department_description")
//    private String departmentDescription;
//
//    // Getter and setter methods for 'id' field
//    public Long getId() {
//        return this.id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    // Getter and setter methods for 'departmentName' field
//    public String getDepartmentName() {
//        return this.departmentName;
//    }
//
//    public void setDepartmentName(String departmentName) {
//        this.departmentName = departmentName;
//    }
//
//    // Getter and setter methods for 'departmentDescription' field
//    public String getDepartmentDescription() {
//        return this.departmentDescription;
//    }
//
//    public void setDepartmentDescription(String departmentDescription) {
//        this.departmentDescription = departmentDescription;
//    }
//}
package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "department_name")
    private String departmentName;  // Single declaration for departmentName

    @Column(name = "department_description")
    private String departmentDescription;

    // Getter and setter methods for 'id', 'departmentName', and 'departmentDescription'
    // (These methods should be properly generated)

    // Getter and setter methods for 'id' field
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter methods for 'departmentName' field
    public String getDepartmentName() {
        return this.departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    // Getter and setter methods for 'departmentDescription' field
    public String getDepartmentDescription() {
        return this.departmentDescription;
    }

    public void setDepartmentDescription(String departmentDescription) {
        this.departmentDescription = departmentDescription;
    }
}
