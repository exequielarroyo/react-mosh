import { useState } from "react";
// import styles from './ListGroup.module.css'
import styled from 'styled-components'

const List = styled.ul`
 list-style: none;
 padding: 0;
`

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
 padding: 0;
 background: ${props => props.active ? 'blue' : 'none'}
`

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
            <List>
            {items.length === 0 && <p>No items</p>}
            {items.map((i, index)=>(
                        <ListItem key={i} 
                        onClick={()=>{setSelectedIndex(index); onSelectItem(i)}} active={index === selectedIndex}
                        style={{fontWeight: 800}}>
                        {i}
                        </ListItem>
                        ))}
            </List>
            </>
           );
}
