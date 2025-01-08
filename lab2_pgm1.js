function mergeArrays(...arrays) {
    return [].concat(...arrays);
}
  
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2, 10], [3, 4, 5, 6]));  
const arr=[1,2,3,4,5];
const arr2=[1,3,4,5,6,7];
console.log(mergeArrays(arr,arr2));