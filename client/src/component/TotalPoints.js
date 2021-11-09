import React from 'react';
import { calculateTotalPointsPerMonth } from '../utils';

export default function TotalPoints({ user }) {
  let pointsPerMonth = user.purchaseHistory.map((purchaseByMonth) => {
    const totalPointsPerMonth = calculateTotalPointsPerMonth(
      purchaseByMonth.transitions
    );

    return totalPointsPerMonth;
  });
  return (
    <div>
      Total:
      {pointsPerMonth.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )}
    </div>
  );
}
