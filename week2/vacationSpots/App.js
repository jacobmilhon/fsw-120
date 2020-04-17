import React from 'react';
import vacationSpots from './vacationSpots';
import Spot from './Spot'

function App() {
  const vacationSpotsComponents = vacationSpots.map(vacation => <Spot place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />)
  return (
    <div>
        {vacationSpotsComponents}
    </div>
  )
}

export default App;
