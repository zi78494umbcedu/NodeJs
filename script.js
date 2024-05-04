//Fundamentals of Javascript
//arrays and objects
//functions return
//async js coding

var arr = [1,2,3,4];
arr.forEach(function(val){
    return val+12;
})
var ans = arr.map(function(val){
    return 12;
});
var fil = arr.filter(function(val){
    if(val>3)return true;
})
var find = arr.find(function(val){
    if(val==3)return val;
})
console.log(arr.indexOf(2));
console.log(find);
console.log(fil);
console.log(ans);
console.log(arr);

var obj = {
    name:"Ashwin"
}
Object.freeze(obj)

obj.name = "Kemchi"
console.log(obj.name);
console.log(obj['name']);
console.log(obj)

console.log(typeof function(){})
function abc(a, b, c){}
console.log(abc.length)
console.dir(abc)
 

var blob = await fetch(`https://randomuser.me/api/`);
var res = await blob.json();
console.log(res);