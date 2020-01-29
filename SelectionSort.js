function selectionSort(array) {
  // change code below this line
  for(let i=0; i<array.length-1;i++){
    let min = i;
    for(let j=i+1; j<array.length; j++){
      if(array[min]>array[j]) min = j;
    }
    swap(i,min,array);
  }
  return array;
  // change code above this line
}
function swap(i,j,array){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
