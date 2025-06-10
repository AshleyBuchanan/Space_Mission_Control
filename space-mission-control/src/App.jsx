import { useState } from 'react';
import MissionControl from './MissionControl.jsx';
import MissionFilter from './MissionFilter.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import Button from './Button.jsx';
import MissionCard from './MissionCard.jsx';
import './css/App.css';

function App ()
{
    const INITIAL_MISSIONS = [
		{id: 1, name: "Mars Rover",                 status: "Planned",      crew: ["Alice",     "Bob"]},
		{id: 2, name: "Moon Base",                  status: "Active",       crew: ["Charlie",   "Dave"]},
		{id: 3, name: "Venus Observatory",          status: "Planned",      crew: ["Eve",       "Frank"]},
		{id: 4, name: "Jupiter Moons Survey",       status: "Completed",    crew: ["Grace",     "Hank"]},
		{id: 5, name: "Asteroid Belt Mining",       status: "Active",       crew: ["Ivy",       "John"]},
		{id: 6, name: "Saturn Ring Research",       status: "Planned",      crew: ["Karen",     "Leo"]},
		{id: 7, name: "Deep Space Probe",           status: "Completed",    crew: ["Mia",       "Nolan"]},
		{id: 8, name: "Interstellar Observatory",   status: "Planned",      crew: ["Olivia",    "Pete"]},
		{id: 9, name: "Neptune Atmospheric Study",  status: "Active",       crew: ["Quinn",     "Rachel"]},
		{id: 10, name: "Pluto Reclamation",         status: "Planned",      crew: ["Sam",       "Tina"]}
	];
    
    const [missions, setMissions] = useState(INITIAL_MISSIONS);
    const updateMissionStatus = (name, newStatus) => {
        setMissions(missions =>
            missions.map(m =>
                m.name === name ? { ...m, status: newStatus} : m
            )
        )
    }

    const [filter, setFilter] = useState('All');
    const filteredMissions = missions.filter(mission => filter ==='All' || mission.status === filter);

	return (
		<>
            <MissionControl>
                <MissionFilter>
                    <ButtonGroup>
                        <Button label="All"       color="red" active={filter === 'All'}       onClick={() => setFilter('All')}></Button>
                        <Button label="Planned"   color="red" active={filter === 'Planned'}   onClick={() => setFilter('Planned')}></Button>
                        <Button label="Active"    color="red" active={filter === 'Active'}    onClick={() => setFilter('Active')}></Button>
                        <Button label="Completed" color="red" active={filter === 'Completed'} onClick={() => setFilter('Completed')}></Button>
                    </ButtonGroup>
                </MissionFilter>
                {filteredMissions.map(mission => (
                    <MissionCard 
                        key={mission.id}
                        name={mission.name} 
                        status={mission.status}
                        crew={mission.crew.join(', ')}
                        onStatusChange={updateMissionStatus}
                    />
                ))}
            </MissionControl>
		</>
	);
}

export default App;
