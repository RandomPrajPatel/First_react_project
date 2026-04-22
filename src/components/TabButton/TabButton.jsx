import './TabButton.css';
function handleClick() {

}
export default function TabButton({ children, onSelect }) {
    // function handleClick() {
    //     console.log("hello World");
    // }
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}