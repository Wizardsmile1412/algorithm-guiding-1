const romanToInt = function (s) {
  const romanNum = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  //Start coding here
  let total=0;
  let prevValue=0;

  for ( let i=s.length-1; i>=0; i--){
    let currentValue = romanNum[s[i]]
    // console.log(currentValue)
    if(currentValue<prevValue){
      total = total - currentValue;
      // console.log(total);
    } else {
      total = total + currentValue;
      // console.log(total);
    }
    prevValue = currentValue
  }
  return total;
};

// if-else loop object

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
