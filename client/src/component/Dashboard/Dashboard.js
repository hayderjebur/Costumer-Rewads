import React from 'react';
import CostumerItem from '../CostumerItem/CostumerItem';

export default function Dashboard({ costumers }) {
  return (
    <div className='d-flex justify-content-center '>
      {costumers.map((user) => (
        <div className='m-3 p-5' key={user.account}>
          <CostumerItem key={user.account} user={user} />
        </div>
      ))}
    </div>
  );
}
