import './css/MissionControl.css'

const MissionControl = ({children}) => {
    return (
        <>
            <div id="MissionControl">
                <h1 id="MissionControl-header">Space Mission Control</h1>
                {children}
            </div>
            
        </>
    );
}

export default MissionControl;