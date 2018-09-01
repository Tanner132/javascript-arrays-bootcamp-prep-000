var chocolateBars 
= ["snickers",
"hundred grand",
"kitkat",
"skittles"
];

 function addElementToBeginningOfArray(array, element) {
  return [element,...array];
 }

 function destructivelyAddElementToBeginningOfArray(array,element) {
   array.unshift(element);
    return array;
 }
 
 function addElementToEndOfArray(array, element) {
   return [...array,element];
 }
 
 function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
 }
 
function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
 return array.slice(1)
=======
  return array.slice(1);
>>>>>>> c442cad6955c50427ece6650100a70d70b07ccbb
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
    return array
}

function removeElementFromEndOfArray(array){
<<<<<<< HEAD
 return array.slice(0, array.length - 1);
=======
  array.slice(3);
    return array;
>>>>>>> c442cad6955c50427ece6650100a70d70b07ccbb
}