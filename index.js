let str='ili';
let arr=str.split('');
let revArr= arr.reverse();
let revStr= revArr.join('');
console.log(revStr); 
// if(str===revStr) {
//   console.log('strings are equal');
// } else  {
//   console.log('strings are not equal');
// }
let equality = str===revStr ?'strings are equal' :'strings are not equal';
console.log(equality);