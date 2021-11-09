import React from 'react';
import { calculateTotalPointsPerMonth } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import TotalPoints from '../TotalPoints';

export default function CostumerItem({ user }) {
  return (
    <div className='card p-5 d-flex justify-content-center align-items-center'>
      <div className='card-body'>
        <h5 className='card-title'>Costumer Name: {user.name}</h5>
      </div>
      {user.purchaseHistory.map((purchaseByMonth) => {
        const monthName = purchaseByMonth.month;
        const totalPointsPerMonth = calculateTotalPointsPerMonth(
          purchaseByMonth.transitions
        );

        return (
          <div className='d-flex justify-content-center m-3' key={uuidv4()}>
            <p>
              {monthName}: <strong>{totalPointsPerMonth}</strong> Points
            </p>
          </div>
        );
      })}
      <div>
        <TotalPoints user={user} />
      </div>
    </div>
  );
}
