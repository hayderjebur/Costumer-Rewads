import React, { useMemo } from 'react';
import { calculateTotalPointsPerMonth } from '../utils';

const TotalPoints = ({ user }) => {
  let pointsPerMonth = user.purchaseHistory.map((purchaseByMonth) => {
    const totalPointsPerMonth = calculateTotalPointsPerMonth(
      purchaseByMonth.transitions
    );

    return totalPointsPerMonth;
  });
  return (
    <div>
      <span>Total points: </span>
      <strong>
        {useMemo(
          () =>
            pointsPerMonth.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            ),
          [pointsPerMonth]
        )}
      </strong>
    </div>
  );
};
export default TotalPoints;
