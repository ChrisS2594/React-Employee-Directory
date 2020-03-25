import React from 'react';
import EmployeeDisplay from "./EmployeeDisplay";
import employees from "../employees.json";

const Main = () => {
    return (
        <div className="form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search by name"/>
            </div>
            <EmployeeDisplay employees={employees}/>
        </div>
    )
}

export default Main;