import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(prev=>!prev);
    }
    return <>
        <Alert show={show} handleShow={handleShow}>Hello <span className="text-light">world</span></Alert>
        <Button color="success" onClick={()=>handleShow()}>Click me!</Button>
        </>
}
