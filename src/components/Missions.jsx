import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((item, index) => {
            const { name, year, country, destination } = item;
            return (<MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ index }
            />);
          })
        }
      </div>
    );
  }
}

export default Missions;
