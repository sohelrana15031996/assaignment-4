function calculateMoney(soldTicket) {
  if (soldTicket > 0) {
    const lossOrProfit = (soldTicket * 120) - (500 + (50*8));
    return lossOrProfit;
  }else{
    return "Please input correct number."
  }
}

// console.log(calculateMoney(-1055));