import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
    const [show, setShow] = useState(false);
    const handleShow = (visible: boolean) => {
        setShow(visible);
    }
    return <>
        {show && <Alert onClose={()=>handleShow(false)}>Hello world</Alert>}
        <Button color="success" onClick={()=>handleShow(true)}>Click me!</Button>
        </>
}
