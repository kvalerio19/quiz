import { RSA_NO_PADDING } from 'constants';
import React, {useState} from 'react';
import {Plants} from './data';
import styled from 'styled-components';


// interface CardProps extends Plants {
// 	addPlant?:()=> void;
// 	removePlant?: () => void;
// }

export const Card:React.FC<Plants> = ({title, description, quantity, imgURL}) => {
	const [plantQuantity, setPlantQuantity] = useState<number>(quantity);

	const addPlant = () => {
		setPlantQuantity((previousQuantity) => previousQuantity+1);
	};

	const removePlant = () => {
		setPlantQuantity((previousQuantity) => previousQuantity-1);
       if (quantity === 0){
           console.log('No negative');
       }
     
	}
	return <Container>
		<h1>{title}</h1>
		<p>{description}</p>
		<Image src={imgURL} alt={title} />
		<span>{plantQuantity}</span>
		<button onClick={()=>addPlant()}>+</button>
		<button onClick={()=>removePlant()}>-</button>
	</Container>

    
}

const Container = styled.div`
background: #014691;
text-align: center;
color: fff;
padding: 10px 10px;
border-radius: 8px;
width: fit-content;
margin:20px 0;
	
`;

const Image = styled.img`
	width: 500px;
	height: 500px;
	border-radius: 50%;
`;



