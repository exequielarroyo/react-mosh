import { useState } from "react";
import './ListGroup.css'

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

export default function ListGroup({ heading, items, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
            <>
            <h1>{heading}</h1>
            <ul className="list-group">
            {items.length === 0 && <p>No items</p>}
            {items.map((i, index)=>(
                        <li key={i} 
                        onClick={()=>{setSelectedIndex(index); onSelectItem(i)}} 
                        className={`list-group-item ${selectedIndex === index && "active"}`}>{i}
                        </li>
                        ))}
            </ul></>
           );
}
