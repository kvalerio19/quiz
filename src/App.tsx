import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Plant } from './Plant';
//import { Item } from './Item';
import { PLANTS_DATA } from './data';
import { title } from 'process';

export type Pln ={
  id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number
}

const App:React.FC = () =>{
  //const plants: [] = [{id:'' , title:'' , description:'', imgURL:'', quantity:'' }]
  // return <div>
  //   <Plant name={'Orquidea'} image={''} description={'Roja'} amount={0}  />
    {plants.map(pln=>{
      return(
        <li key={pln.id}>
          

        </li>
      )
    })}
    
 // </div>
  
}

export default App;
