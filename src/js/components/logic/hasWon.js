const hasWon = row => {
  // function to determine if a Row has won
  const totals = {};
  row.forEach(element => {
    totals[element.symbol] = totals[element.symbol] ? totals[element.symbol] + 1 : 1;
  });
  if (Object.keys(totals).length === 1 || (Object.keys(totals).length === 2 && totals['*'])) {
    return true;
  }
  return false;
};

export default hasWon;
