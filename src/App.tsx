import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

export default function App() {
    const [show, setShow] = useState(false);
    const handleShow = (visible: boolean) => {
        setShow(visible);
    }
    return <>
        <ListGroup items={["Cavinti", 'Pagsanjan']} heading="Hello" onSelectItem={()=>console.log('hello')}/>
        {/* {show && <Alert onClose={()=>handleShow(false)}>Hello world</Alert>} */}
        {/* <Button color="success" onClick={()=>handleShow(true)}>Click me!</Button> */}
        </>
}
