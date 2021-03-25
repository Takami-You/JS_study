/**
 * JavaScript提供了三种逻辑运算符
 * ！ 非
 *  -！可以用来对一个值进行非运算
 *  -所谓非运算就是值对一个布尔值进行取反操作
 *      true变false false变true
 *  -如果对一个值进行两次取反，它不会变化
 *  -如果对非布尔值进行此操作，则会将其转换为布尔值，然后再取反
 *      所以可以利用该特点，将一个其他数据类型转换为布尔值，原理和Boolean()函数一样
 * 
 * && 与
 *  -&&可以对符号两侧的值进行与运算并返回结果
 *  -运算规则
 *      -两个值中只要有一个值为false就返回false，
 *          只有两个值都为true时，才会返回true
 *      -JS中的与属于短路的与，如果第一个值为false，则不会看第二个值
 * 
 * || 或
 *  -||可以对符号两侧的值进行或运算并返回结果
 *  -运算规则
 *      -两个值只要有一个true，就返回true
 *          只有两个值都为false时，才会返回false
 *  -JS中的与属于短路的与，如果第一个值为true，则不会看第二个值
 */

 var a = true;
 a = !a;
 console.log('a = '+a); //a = false

 var b = 4;
 b = !b;
 console.log('b = '+b); //false
 console.log(typeof b); //boolean


 var result = true && true; //true
 //只要有一个false就返回false
 result = true && false; //false
 result = false && true; //false
 result = false && false; //false
 console.log("result = "+result);


 var result = true || true; //true
 //只要有一个true就返回true，和&&相反
 result = true || false; //true
 result = false || true; //true
 result = false || false; //false
 console.log("result = "+result);

 //true || alert('123'); //不会提示123
//false || alert("123"); //会提示123
//&&相反


/**
 * && || 非布尔值的情况***
 *  -对于非布尔值进行与或运算时，会将其转换为布尔值，然后再运算，并且返回原值
 *  -与运算：
 *      -如果第一个值为true，则必然返回第二个值
 *      -如果第一个值为false，则必然返回第一个值
 *  -或运算
 *      -如果第一个值为true，则必然返回第一个值
 *      -如果第一个值为false，则必然返回第二个值
 */

 //true &&false
 //与运算：如果两个值都为true，则返回后边的
 var result = 5 && 6;

 //与运算：如果两个值中有false，则返回靠前的false
 //false && true
 result = 0 && 2; //0
 result = 2 && 0; //0
 console.log(result);

  //false && false
  result = 0 && NaN; //0
  result = NaN && 0; //Nan
  console.log(result);

  result = '' && 'hello'; //返回空  ''为空串，false
  console.log(result);


 //true || true
 result = 1 || 2; //1
 result = 2 || 1; //2
 console.log(result);

 //false || true
 result = 0 || 2; //2
 console.log(result);

 result = '' || 'hello'; //hello  ''为空串，false
 console.log(result);