const alpha = 'άλφα';
const LAMBDA_SYMBOL = 'λ';

let currentSymbol;

for (let i = 0; i < alpha.length; i += 1) {
  currentSymbol = alpha[i];

  if (currentSymbol === LAMBDA_SYMBOL) {
    console.log(`${alpha} содержит ${LAMBDA_SYMBOL}`);
    break;
  }
}
export {
  alpha as al,
  LAMBDA_SYMBOL as lambda,
  currentSymbol as symbol
};