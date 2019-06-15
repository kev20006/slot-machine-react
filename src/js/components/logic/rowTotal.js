const rowTotal = row => {
  // return total coefficient for a row
  const reducer = (accumulator, element) => {
    return accumulator + element.coefficient;
  };
  const total = row.reduce(reducer, 0);
  return total;
};

export default rowTotal;
