import React from 'react'

const EmployeeDisplay = (props) => {
    return (
        <table className="table">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
            </tr>
            {props.employees.map(employee => (
                <tr>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>{employee.salary}</td>
                </tr>
            ))}
        </table>
    )
}

export default EmployeeDisplay;