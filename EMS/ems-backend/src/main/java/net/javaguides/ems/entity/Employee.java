
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
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    // Many-to-One relationship with Department
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id")
//    private Department department;

    // Many-to-One relationship with Department
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", referencedColumnName = "id")
    private Department department;


    // Getter and setter methods for 'id' field
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter methods for 'firstName' field
    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter and setter methods for 'lastName' field
    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter and setter methods for 'email' field
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and setter methods for 'department' field
    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

//    public Long getDepartmentId() {
//        return this.department != null ? this.department.getId() : null;
//    }
}
