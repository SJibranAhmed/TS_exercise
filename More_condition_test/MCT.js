// Testing for equality and inequality
var num = 10;
num == 10 ? console.log('True') : console.log('False');
num != 10 ? console.log('True') : console.log('False');
//testting for lowercase function
var user_name = 'SULAIM';
user_name.toLowerCase() == 'sulaim' ? console.log('true') : console.log('false');
user_name.toLowerCase() == 'Sulaim' ? console.log('true') : console.log('false');
//Numerical test
var num2 = 18;
//* for equal
num2 == 18 ? console.log('true') : console.log('false');
num2 == 19 ? console.log('true') : console.log('false');
//* for unequal
num2 != 18 ? console.log('true') : console.log('false');
num2 != 19 ? console.log('true') : console.log('false');
//* for less than or equal to
num2 <= 17 ? console.log('true') : console.log('false');
num2 <= 20 ? console.log('true') : console.log('false');
//* for greater than or equal to
num2 >= 18 ? console.log('true') : console.log('false');
num2 >= 17 ? console.log('true') : console.log('false');
//testing using AND(&&) , OR(||) operator 
var want_To = 'GenAI developer';
// for AND operator 
var result_true = want_To == 'GenAI developer' || want_To == 'Solopreneur' ? 'true' : 'false';
console.log(result_true);
var result_false = want_To == 'Audacious' || want_To == 'Sir Zia' ? 'true' : 'false';
console.log(result_false);
// for AND operator  
var user_name1 = 'Jibran';
var password = 'jib123';
user_name1 == 'Jibran' && password == 'jib123' ? console.log('welcome') : console.log('error');
user_name1 == 'jibran' && password == 'sal123' ? console.log('welcome') : console.log('error');
//testing an item is an array
var test_items = [1, 2, 3, 4, 5];
if (test_items.includes(3)) {
    console.log('yes');
}
else {
    console.log('no');
}
//testing an item is not in an array
var test_item = [1, 2, 3, 4, 5];
if (!test_item.includes(1)) {
    console.log('yes');
}
else {
    console.log('no');
}
