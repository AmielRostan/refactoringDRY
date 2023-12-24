function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;

  bigNum = compare(num1, num2, 'bigger');
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;

  bigNum = compare(num1, num2, 'bigger');
  return bigNum / 3;

}

function eatMostTacos(sum1, sum2) {
  let bigNum;

  bigNum = compare(sum1, sum2, 'bigger');
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;

  smallDog = compare(weight1, weight2, 'smaller');
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// Helper:

function compare(num1, num2, chosen) {
  if(chosen === 'bigger') {
    if(num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    if(num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
