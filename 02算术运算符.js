 /*
    运算符也叫操作符
    通过运算符可以对一个或多个值进行运算，并获取返回结果
    比如：typeof就是运算符，可以来获得一个值的类型
    它会将该值的类型以字符串的形式返回
    number string Boolean undefined object
*/
var a = 123;
var result = typeof a;
console.log(typeof result);

/*
  算术运算符
    当对非number类型的值进行运算时，会将这些值转换为number然后再运算
    + 可以对两个值进行加法运算，并将结果返回
        如果对两个字符串进行加法运算，则会做拼串，会将两个字符串拼接为一个字符串，并返回
        任何的值和字符串做加法运算，都会先转换为字符串，然后和字符串左拼串的操作
    - 可以对两个值进行减法运算，并将结果返回
    * 可以对两个值进行乘法运算，并将结果返回
    / 可以对两个值进行除法运算，并将结果返回
    % 取模运算（取余数）
*/
var b = 123;
var result = a + 1; //124
//var result = ture + 1; //2 
//var result = null + 2; //2
var result = NaN + 5; //NaN
var result = "123" + "456"; //123456 写长字符串换行用
var result = 1 + "123"; //1123
//var result = ture + "hello"; //turehello
console.log(result);

/**
 * 可以利用特性，来将任意一个数据类型转换为string
 * 这是一种隐式的类型转换，由浏览器自动完成，实际上也是调用的string()函数
 */
var c = 123;
c = c + ""; 
console.log("c = " + c);
console.log(typeof c);


var result = 100 - "1"; //99 除加法外都是转换成number类型
console.log("result = " + result);