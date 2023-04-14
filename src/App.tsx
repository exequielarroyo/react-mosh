import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

export default function App() {
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }
    return <>
        {/* <ListGroup heading="Laguna" onSelectItem={handleSelectItem} items={['Cavinti', 'Sta. Cruz', 'Pagsanjan']}/> */}
        <Alert>Hello <span className="text-light">world</span></Alert>
        <Button color="success" onClick={()=>console.log('helle')}>Click me!</Button>
        </>
}
