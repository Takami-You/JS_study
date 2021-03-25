/**
 * 一元运算符，只需要一个操作数
 *  + 正号 不会对数字产生任何影响
 *  - 负号 可以对数字进行负号的取反
 * 
 * 对于非number类型的值
 *  它会先转换为number，然后再运算
 *  可以对一个其他数据类型使用+，来将其转换为number
 *  原理和number()函数相同
 */

 var a = 123;
 a = -a;
console.log("a = "+a); //-123

var b = true;
b = +b;
console.log("b = "+b); //1
console.log(typeof b); //number


var e = 10;
e = e++;
console.log(e++);