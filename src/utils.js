const accumulator = (items) => {
  return items.reduce(
    (previousValue, currentValue) => previousValue + currentValue['purchase'],
    0
  );
};

export const calculateTotalPointsPerMonth = (array) => {
  const totalSpendedPerMonth = accumulator(array);
  const grossPoints = totalSpendedPerMonth - 100;

  const totalPointsPerMonth =
    grossPoints > 0 ? grossPoints * 2 + (totalSpendedPerMonth - 50) : 0;

  return totalPointsPerMonth;
};
