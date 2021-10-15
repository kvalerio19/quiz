import React, {useState} from "react";



interface CardProps {
    name: string;
    image: string;
    description: string;
    amount: number;

}

export const Plant: React.FC<CardProps> = ({name, image, description}) =>{
    const [amount, setCount] = useState(0);

    return <div>
        <ul>
            <li>Name: {name}</li>
            <li>Image: {image}</li>
            <li>Description: {description}</li>
            <li>Amount: {amount}</li>
        </ul>
        {/*<p>You clicked {amount} times</p>*/}
        <button onClick={() => setCount(amount + 1)}>
        Add
      </button>
      <button onClick={() => setCount(amount + -1)}>
        Remove
      </button>
    </div>
}