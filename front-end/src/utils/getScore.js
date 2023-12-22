export function getScore(maxScore, evalScore) {
  if (maxScore === 0)
  {
    throw new Error('Maximum score cannot be zero.');
  }
  if (evalScore === 0)
  {
    return '0';
  }

  const percentage = (evalScore / maxScore) * 100;

  if (percentage <= 12.5) return '1';
  else if (percentage <= 25) return '2';
  else if (percentage <= 37.5) return '3';
  else if (percentage <= 50) return '4';
  else if (percentage <= 62.5) return '5';
  else if (percentage <= 75) return '6';
  else if (percentage <= 87.5) return '7';
  else return '8';
}