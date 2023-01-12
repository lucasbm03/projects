import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((ele) => (
            <MissionCard
              key={ ele.name }
              name={ ele.name }
              year={ ele.year }
              country={ ele.country }
              destination={ ele.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
