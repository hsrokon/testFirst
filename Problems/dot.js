const tree = {
     name : "kaktus",
     height : "10 inches ",
     'its-color' : 'Green',
     4 : 'four'
}
console.log(tree.height);//10 inches
console.log(tree['height']);//10 inches
console.log(tree["its-color"]);//Green
console.log(tree['4']);//four

const var1 = 'height';
console.log(tree[var1]); //10 inches