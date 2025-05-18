// Brute Force
function maxProfit(prices: number[]): number {
  let mp = 0;

  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j < prices.length) {
      mp = Math.max(mp, prices[j] - prices[i]);
      j++;
    }
  }

  return mp;
}

function maxProfitDP(prices: number[]): number {
  let minBuy = prices[0];
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    maxP = Math.max(maxP, prices[i] - minBuy);
    minBuy = Math.min(minBuy, prices[i]);
  }

  return maxP;
}
