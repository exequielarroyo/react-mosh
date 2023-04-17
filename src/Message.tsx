export default function Message() {
    let name = "";
    name = "Exequiel";
    return <h1>Hello {name || 'World'}!</h1>
}
