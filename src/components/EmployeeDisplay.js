import React from 'react'

const EmployeeDisplay = (props) => {
    return (
        <table className="table">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
            </tr>
            {props.employees.map(e => (
                <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.fullName}</td>
                    <td>{e.role}</td>
                </tr>
            ))}
        </table>
    )
}

export default EmployeeDisplay;