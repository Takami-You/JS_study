var n1 = 10;
var n2 = 20;

var n= n1++;
console.log('n = '+n); //10
console.log('n1 = '+n1); //11
//n1++没变，所以n也没变，但是n1变了。

var n = ++n1;
console.log('n = '+n); //12
console.log('n1 = '+n1); //12
//在上一运算结果n1=11上进行运算，因为是++n1，所以不仅n1变了，++n1也变了，所以n也变了。

var n = n2--;
console.log('n = '+n); //20
console.log('n2 = '+n2); //19
//理由上同

var n = --n2;
console.log('n = '+n); //18
console.log('n2 = '+n2); //18
//理由上同