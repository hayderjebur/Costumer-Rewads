export const accumulator = (items) => {
  return items.reduce(
    (previousValue, currentValue) => previousValue + currentValue['purchase'],
    0
  );
};

export const calculateTotalPointsPerMonth = (array) => {
  const totalSpended = accumulator(array);

  const totalPointsPerMonth = (totalSpended - 100) * 2;

  return totalPointsPerMonth;
};
