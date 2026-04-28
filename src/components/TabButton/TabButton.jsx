import './TabButton.css';

export default function TabButton({ children, isSelected, onSelect, ...props }) {
    console.log("Tab Button is Rendered");
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect} {...props}>
                {children}
            </button>
        </li>
    );
}