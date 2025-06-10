import './css/Button.css';

const Button = ({label, color, active, status, onClick}) => {
    const isDisabled = label === 'Complete'
        ? status === 'Completed' || status === 'Planned'
        : label === 'Launch'
        ? status === 'Active' || status === 'Completed'
        : false;

    return (
        <div 
        className={`Button 
            ${color} 
            ${active ? 'active' : ''} 
            ${isDisabled ? 'disabled' : ''}`} 
            onClick={onClick}
            disabled={isDisabled}>
        {label}
        </div>
    )
}

export default Button;