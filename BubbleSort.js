function bubbleSort(array) {
  // change code below this line
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length-i-1; j++){
      if(array[j]>array[j+1]){
        swap(j, j+1,array)
      }
    }
  }
  return array;
  // change code above this line
}
function swap(i, j,array){
  let temp = array[i];
  array[i]=array[j];
  array[j]=temp;
}
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
