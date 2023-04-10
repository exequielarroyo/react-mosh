import { useState } from "react";

export default function ListGroup() {
    let items = ['Cavinti', 'Sta. Cruz' ,'Pagsanjan'];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
            <ul className="list-group">
            {items.length === 0 && <p>No items</p>}
            {items.map((i, index)=>(
                        <li key={i} 
                        onClick={()=>setSelectedIndex(index)} 
                        className={`list-group-item ${selectedIndex === index && "active"}`}>{i}
                        </li>
                        ))}
            </ul>
           );
}
