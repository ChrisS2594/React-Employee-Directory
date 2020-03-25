import React, {Component} from 'react'
import Header from "../components/Header";
import Main from "../components/Main";
import EmployeeDisplay from "../components/EmployeeDisplay";
import employeeArray from "../employees.json";

class Home extends Component {
    state = {
        search: ""
    }

    handleSearchInput = e => {
        this.setState({search: e.target.value});
    }

    render(){
        let filteredEmployees = employeeArray.filter(employee => (
            employee.fullName.toLowerCase().includes(this.state.search.toLowerCase())
        ))

        return(
            <div className="container">
                <h1 className="display-4 text-center my-3">Employee Tracker</h1>
                <div className="form">
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by name"
                        onChange={this.handleSearchInput}
                        value={this.state.search}/>
                        <p>Your search: {this.state.search}</p>
                    </div>
                    <EmployeeDisplay employees={filteredEmployees}/>
                </div>
            </div>
        )
    }
}

export default Home;