console.log("Rushikesh");

const accountId = 12345; // we can not change the value of const.
let accountEmail = "shinderushi327@gmail.com"; //
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;


//accountId = 123;//not allowed.
accountEmail = "rushi@gmail.com";
accountPassword = "7890"
accountCity = "Delhi";
accountState = "Kerla";



//dont use var because of block scope and functional scope.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



// function greet() {
//     var a = 'hello';
//     var a = 'world'; // This is allowed
//     let b = 'world';
//     let b = 'hello'; // This is not allowed
//     console.log(a + ' ' + c);
//   }
  
//   greet();