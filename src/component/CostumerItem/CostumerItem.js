import React from 'react';
import { calculateTotalPointsPerMonth } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import TotalPoints from '../TotalPoints';
import './costumerItem.css';

const CostumerItem = ({ user }) => {
  return (
    <div className='card d-flex justify-content-center align-items-center p-5 width23'>
      <div className='card-body'>
        <h5 className='card-title'>Costumer: {user.name}</h5>
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
};
export default CostumerItem;
