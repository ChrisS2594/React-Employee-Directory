import React, {Component} from 'react'
import EmployeeDisplay from "../components/EmployeeDisplay";
import employeeArray from "../employees.json";

class Home extends Component {
    state = {
        filter: "",
        filterBy: "name",
        sortBy: "name"
    }

    handleFilterInput = e => {
        this.setState({filter: e.target.value});
    }

    handleFilterChange = e => {
        this.setState({filterBy: e.target.value});
    }

    handleSortChange = e => {
        this.setState({sortBy: e.target.value});
    }

    render(){
        let filteredEmployees;

        if (this.state.filterBy === "name"){
            filteredEmployees = employeeArray.filter(employee => (
                employee.name.toLowerCase().includes(this.state.filter.toLowerCase())
            ));
        } else if (this.state.filterBy === "role"){
            filteredEmployees = employeeArray.filter(employee => (
                employee.role.toLowerCase().includes(this.state.filter.toLowerCase())
            ));
        } else if (this.state.filterBy === "salary"){
            filteredEmployees = employeeArray.filter(employee => (
                employee.salary.toString().includes(this.state.filter)
            ));
        }

        return(
            <div className="container">
                <h1 className="display-4 text-center my-3">Employee Tracker</h1>
                <div className="form-row">
                    <div className="form-group col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={`Filter by ${this.state.filterBy}`}
                            onChange={this.handleFilterInput}
                            value={this.state.filter}
                        />
                    </div>
                    <label htmlFor="">Filter by: </label>
                    <div className="form-group col-3">
                        <select name="filterBy" className="form-control" onChange={this.handleFilterChange}>
                            <option value="name">Name</option>
                            <option value="role">Role</option>
                            <option value="salary">Salary</option>
                        </select>
                    </div>
                    <label htmlFor="">Sort by: </label>
                    <div className="form-group col-3">
                        <select name="sortBy" className="form-control" onChange={this.handleSortChange}>
                            <option value="name">Name</option>
                            <option value="role">Role</option>
                            <option value="salary">Salary</option>
                        </select>
                    </div>
                </div>
                <EmployeeDisplay employees={filteredEmployees}/>
            </div>
        )
    }
}

export default Home;