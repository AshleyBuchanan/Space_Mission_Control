import ButtonGroup from './ButtonGroup.jsx';
import Button from './Button.jsx'
import './css/MissionCard.css';

const MissionCard = ({name, status, crew, onStatusChange}) => {
    return (
        <div className="MissionCard">
            <div className="Data">
                <h2>{name}</h2>
                <p>Status: <span className="value">{status}</span></p>
                <p>Crew: <span   className="value">{crew}</span></p>
            </div>
            <div className="Data">
                <ButtonGroup className="ButtonGroup" direction="column">
                    <Button label="Launch"   color="green" status={status} onClick={() => onStatusChange(name, 'Active')}></Button>
                    <Button label="Complete" color="green" status={status} onClick={() => onStatusChange(name, 'Completed')}></Button>                    
                </ButtonGroup>
            </div>
        </div>
    )
}

export default MissionCard;
