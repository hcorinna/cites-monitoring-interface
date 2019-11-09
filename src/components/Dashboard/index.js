import React from 'react';
import ScreenHeader from '../ScreenHeader';

const Dashboard = ({plants}) => {
  return (
    <div>
      <ScreenHeader title="Dashboard"/>
      <p>What's worse than one illegally trafficked plant? 5000 illegally trafficked plants!</p>
      <p>Welcome to the CITES endangered species monitoring tool!</p>
      <img
      src="https://hips.hearstapps.com/esq.h-cdn.co/assets/15/08/1424204090-tumblr_m4g0ddotsx1qa1w9bo1_1280.jpg?resize=480:*"
      alt="Li'l Sebastian"
      />
      <p>We currently have {plants.length} plants in our database.</p>
    </div>
  );
}

export default Dashboard;
