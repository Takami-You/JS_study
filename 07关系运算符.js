/**
 * 通过关系运算符可以比较两个值之间的大小关系
 *  如果关系成立它会返回true，如果关系不成立则返回false
 * 
 * > 大于号
 *  -判断符号左侧的值是否大于右侧的值
 *  -如果关系成立，返回true，不成立为false
 * 
 * >=  <  <= 同理
 * 
 * 非数值的情况
 *  -对于非数值进行比较时，会将其转换为数字然后再比较
 *  -如果符号两侧的值都是字符串时，不会将其转化为数字进行及比较而会分别比较字符串的Unicode编码
 */

var resule = 5 > 10; //false
console.log(resule);

console.log(1 != NaN); //true

console.log(1 > true); //false
console.log(1 >= true); //true
console.log(1 > '0');//true
console.log(10 > null); //true

//任何值和NaN做任何比较都是false
console.log(10 > 'hello'); //false string转换为number为NaN

var l = Number('hello');
console.log(l); //NaN

console.log(false < true); //true
console.log('1' < '5'); //true
//比较两个字符串时，比较的是字符串的字符编码
console.log('a' < 'b'); //true
//比较字符编码时是一位一位进行比较
console.log('abc' < 'b'); //true
//如果两位一样，则比较下一位，所以适用于英文排序，汉字也可以但是意义不大
console.log('bac' < 'b'); //false
console.log('bdc' > 'b'); //true
console.log('你' < '我'); //true

//如果比较的两个字符串类型的数字，可能会得到不可预期的结果
//所以在比较两个字符串类型的数字时，一定一定一定要转型
console.log('123123123123123' < '5'); //true 错误答案
console.log('123123123123123' < +'5'); //false
