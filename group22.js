var _ = {
   map: function(arr, callback) {
     //code here;
     for (var i = 0; i < arr.length; i++ ){
       arr[i] = callback(arr[i]);
     }
   },
   reduce: function(arr, callback, sum) {
     var el = 0;
     if(!sum){
       sum = arr[0];
       el =1;
     }
     for (var i = el; i < arr.length; i++){
       sum  = callback(arr[i], sum)
     }
     return sum;
   },
   find: function(arr, callback) {
     for (var i = 0; i < arr.length; i++ ){
       if (callback(arr[i])){
         return arr[i];
       }
     }
   },
   filter: function(arr, callback) {
     var output = [];
     for (var i = 0; i < arr.length; i++ ){
       if (callback(arr[i])){
         temp.push(arr[i]);
       };
     }
     return output;
   },
   reject: function(arr, callback) {
     var output = [];
     for (var i = 0; i < arr.length; i++ ){
       if (callback(arr[i])){
         temp.push(arr[i]);
       };
     }
     return output;
   }
 }

var array = [3,4,5]
_.map(array, function callback(x){return x * 5;});
console.log(array);

console.log(_.reduce(array, function callback(x, memo){return x + memo;}));

console.log(_.find(array, function callback(x){return x == 15;}));

_.filter(array, function(x){return x > 20;})
console.log(array);
