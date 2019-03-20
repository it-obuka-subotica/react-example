import React,{Component} from 'react';
import phonesData from './phones.json';
class Phones extends Component{
	state={
		phones: phonesData 
	}


	render(){

		let list=this.state.phones.map((phone, index)=>(
			<li key={index}>
			{phone.brand} {phone.type} - Price: {phone.price} EUR
			</li>
		))

		return(
			<div>
         <h1>Telefoni iz JSON file-a</h1>
			<ul> {list} </ul>
			</div>
		)
	}
}

export default Phones;

