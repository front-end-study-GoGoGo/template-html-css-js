// console.log(a)
// {
//   var a = 1
// }
// console.log(a)

//#region 00 new.target
function King(){
  if(!new.target){
    throw 'King must be instantiated using "new"'
  }
  console.log('King instantiated using "new"',new.target);
}
// King();
new King();

//#endregion

//#region 01 js中this、apply、call、bind 之间的理解与使用

//#endregion


//#region 02 执行上下文栈
if(!(b in window)){
  var b = 1;
}
console.log(b);
//#endregion