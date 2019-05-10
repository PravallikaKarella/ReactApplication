import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
//import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

function searchingFor(term) {
    return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
 }

export default class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            empname : '',
            empage: '',
            empdesigantion : '',
            term: '',
            emp: [{
                name: "Smith",
                age: "20",
                designation: "Developer"
            },{
                name: "Allen",
                age: "30",
                designation: "Tester"
            },{
            name: "Martin",
            age: "40",
            designation: "Manager"}
            ]}
    }
    cname = (event) => {
        this.setState({
            empname: event.target.value,
        })
    }
    cage = (event) => {
        this.setState({
         empage: event.target.value,
        })
    }
    cdesignation = (event) => {
        this.setState({
            empdesignation: event.target.value,
        })
    }
    changeval = (event) => {
        var newObject= {
            name : this.state.empname,
            age: this.state.empage,
            designation: this.state.empdesignation
        }
        this.setState({
            emp: [...this.state.emp,newObject]
        })
    }
    
    delval = (id) => {
        const emp = this.state.emp.splice(id)
        this.setState({
            emp: emp})
   }
   searchHandler = (event) => {
       this.setState({
           term: event.target.value
       })

   }
   EmployeeDetailsPage = () => {
     return(<div>Employee Details Page</div>);
}

   
    render() {
                        return (<div>
                          To Filter:  <input type="text" onChange={this.searchHandler} value={this.state.term}></input>
                        <br></br><br></br>
                        <label>
                            Name: <input type="text"  onChange={this.cname}></input>
                            Age:<input type="text"  onChange={this.cage}></input>
                            Designation:<input type="text"  onChange={this.cdesignation}></input>               
                        <input type ="button" value="Click to Add Employee" onClick={this.changeval}></input>
                        </label>
                        
                        
                        {this.state.emp.filter(searchingFor(this.state.term)).map((e,id) => { 
                                    return (
                                    <Router><ul>
                                           <>
                                                <li>ID:{id}</li>
                                                <li>Name:<Link to="/EmployeeDetailsPage">{e.name}</Link></li>
                                                <li>Age:{e.age}</li>
                                                <li>Designation:{e.designation}</li>
                                                </>
                                     <br></br><input type="button" value="Remove" onClick={() => this.delval(id)}></input>
                                    </ul></Router>)
                         } 
                        )} 
                        </div>)
}
}