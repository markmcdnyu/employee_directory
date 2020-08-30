import React, { Component } from "react";
import Employee from "./components/employee";
import employeeList from "./data/employeeList.json";
import Form from "./components/form";

class App extends Component {
    state = {
        sorted: employeeList,
        firstName: "",
        lastName: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let findFirstName = new Array(...employeeList)
        console.log(findFirstName)

        let filtersReturnNewArrays = findFirstName.filter(employee => {
            return employee.firstName.includes(this.state.firstName)
                || employee.lastName.includes(this.state.firstName)
        })
        console.log(filtersReturnNewArrays)

        this.setState({ sorted: filtersReturnNewArrays })

        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    sortName = () => {
        let unsorted = new Array(...employeeList)
        console.log(unsorted)

        let sortof = unsorted.sort((a, b) => {
            console.log(a.firstName, b.lastName)
            console.log(b.firstName, a.lastName)
            return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
        })
        console.log(sortof)
        this.setState({ sorted: sortof })
    }



}

export default App;