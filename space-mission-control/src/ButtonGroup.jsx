import './css/ButtonGroup.css';

const ButtonGroup = ({children, direction}) => {
    return (
        <div className={`ButtonGroup ${direction}`}>
            {children}
        </div>
    )
}

export default ButtonGroup;
