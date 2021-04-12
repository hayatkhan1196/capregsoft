import React, { Component } from 'react'
import "./Getdata.css";

export class Getdata extends Component {

   constructor(){
     super();
     this.state={
       users:[]
     }
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
        res.json().then((result)=>{
          let {users}= this.state
          console.log(result)
          users = result
          this.setState({users: users})
        })
     })
   }



  render() {
    console.log(this.state.users);
    return (
      <div id="item_table">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">Address</th>
            <th scope="col">street</th>
            <th scope="col">suite</th>
            <th scope="col">website</th>
           
          </tr>
        </thead>
        <tbody>
          {this.state.users&&
          this.state.users.map((element, i) => (
            <tr>
              <th>{element.id}</th>
              <td>{element.name }</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>{element.address.city}</td>
              <td>{element.address.street}</td>
              <td>{element.address.suite}</td>
              <td>{element.website}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  
  
  }
}

export default Getdata
