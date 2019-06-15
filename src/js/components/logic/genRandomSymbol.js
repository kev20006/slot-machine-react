const genSymbol = () => {
  // function to randomly generate symbol and coefficient
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  switch (true) {
    case randomNumber <= 45:
      return { symbol: 'A', coefficient: 4 };
    case randomNumber > 45 && randomNumber <= 80:
      return { symbol: 'B', coefficient: 6 };
    case randomNumber > 80 && randomNumber <= 95:
      return { symbol: 'P', coefficient: 8 };
    case randomNumber >= 95:
      return { symbol: '*', coefficient: 0 };
    default:
      return 0;
  }
};

export default genSymbol;
