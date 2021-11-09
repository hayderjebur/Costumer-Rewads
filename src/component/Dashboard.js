import React from 'react';
import CostumerItem from './CostumerItem/CostumerItem';

const Dashboard = ({ costumers }) => {
  return (
    <div className='container '>
      <div className='row'>
        {costumers.map((user) => (
          <div className='col col-lg-4 col-md-6 p-4' key={user.account}>
            <CostumerItem key={user.account} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
