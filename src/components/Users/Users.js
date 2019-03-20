import axios from 'axios';

import React,{Component} from 'react';
class Users extends Component{
	state={
		users: [] 
	}

    componentDidMount () {

        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
					const users =response.data;
    				console.log("response:"); console.log(response);console.log("");
                this.setState({users: users});
            } ); // END OF POST AXIOS
    }

	render(){

		let list=this.state.users.map((user, index)=>(
			<li key={index}>
			{user.name}
			</li>
		))

		return(
			<div>
         <h1>Korisnici iz API -a preko axios node.js modula</h1>
			<ul> {list} </ul>
			</div>
		)
	}
}

export default Users;
