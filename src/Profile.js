import React, { Component } from 'react'

export class Profile extends Component {
    constructor(){
        super()
        this.state={
         show:false
,
        // list:[
        //    { name:'hayat',last_name:'safi',email:'hayatlhan1196@gmail'},
        //    { name:'asad',last_name:'safi',email:'asadlhan1196@gmail'},
        //    { name:'ali',last_name:'safi',email:'alilhan1196@gmail'},
        //    { name:'usman',last_name:'safi',email:'usmanlhan1196@gmail'}
        // ]

        }
        //update set
    }
    setUpdate()
    { 
         this.setState({show:!this.state.show})
    }


       

    
   
    render() {
       
        return (
           <div>
               {


            //  this.state.list.map((user)=>
            //      <div>{user.name}<br/>
            //      {user.email}<br/>
            //      {user.last_name}
            //      </div>
            //  ),
                   this.state.show?
                   
                  <form>
                      <label>hayat khan</label><br/>
                      <input size='20px' placeholder='enter your name :'></input><br/>
                      <input size='20px' placeholder='enter your lastname :'></input><br/>
                      <button>press me</button>
                  </form>
                   :null
               } 

               <button onClick={()=>{this.setUpdate()}}>click me </button>
           
           
        
            </div>
        )
        
    }
    

}

export default Profile


