import ListGroup from "./components/ListGroup";

export default function App() {
    const handleSelectItem = (item: string) => {
         console.log(item);
    }
    return <>
        <ListGroup heading="Laguna" onSelectItem={handleSelectItem} items={['Cavinti', 'Sta. Cruz', 'Pagsanjan']}/>
        </>
}
