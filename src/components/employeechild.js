import React from "react";

export default class EmployeeChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp1: {
                name:this.props.name,
                age:this.props.age,
                designation:this.props.designation
            }
        }
    }
    render() {
            return (<div>
                <label>Name:{this.props.emplist.name}</label>
                <label>Age:{this.props.emplist.age}</label>
                <label>Designation:{this.props.emplist.designation}</label></div>)
          }
        }
