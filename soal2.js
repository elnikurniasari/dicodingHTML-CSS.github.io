var arr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
console.log(arr);
var  arr1 = arr.slice(0,11);
console.log ('arr1 :' + arr1);
var  arr2 = arr.slice(11,22);
console.log ('arr2 :' + arr2);
var  arr3 = arr.slice(22,32);
console.log ('arr3 :' + arr3);

arr1.sort(function(a,b) {
  return a-b;
});
console.log(arr1);
console.log('nilai max :' + Math.max.apply(null,arr1));
console.log('nilai min :' + Math.min.apply(null,arr1));

arr2.sort(function(a,b) {
  return a-b;
});
console.log(arr2);
console.log('nilai max :' + Math.max.apply(null,arr2));
console.log('nilai min :' + Math.min.apply(null,arr2));


arr3.sort(function(a,b) {
  return a-b;
});
console.log(arr3);
console.log('nilai max :' + Math.max.apply(null,arr3));
console.log('nilai min :' + Math.min.apply(null,arr3));

var total1 = arr1.reduce((a,b)=>{
  return a+b
});
console.log('rata-rata array kelompok 1: ' + total1/arr1.length);


var total2 = arr2.reduce((a,b)=>{
  return a+b
});
console.log('rata-rata array kelompok 2: '+total2/arr2.length);

var total3 = arr2.reduce((a,b)=>{
  return a+b
});
console.log('rata-rata array kelompok 3: '+total3/arr3.length);