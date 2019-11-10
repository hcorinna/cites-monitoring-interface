import React from 'react';
import ScreenHeader from '../ScreenHeader';
import './Dashboard.css';

const Dashboard = ({details}) => {
  return (
    <div className="Home">
    <div className="Background" style={{backgroundImage: 'url("./plants.jpg")' }}></div>
    <div className="Home-text">
      <ScreenHeader id="home-header" title="Li'l Sebastian's CITES Monitor"/>
      <p>What's worse than one illegally trafficked plant? 5000 illegally trafficked plants!</p>
      <p>Welcome to Li'l Sebastian's CITES monitoring tool!</p>
      <img
      src="./android-chrome-192x192.png"
      alt="Li'l Sebastian"
      />
      <p>
        To scale down the overall demand of trafficked plants, this tool identifies sellers and offers of CITES listed plant species through popular e-commerce sites. It intends to reduce the amount of manual labour performed by law enforcement individuals and CITES staff.
      </p>
      <p>We currently have {details.length} plants in our database.</p>
      </div>
    </div>
  );
}

export default Dashboard;
