///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\

//input: an array & a number of times rotated
//output: an array after rotation
//purpose: to rotate the items in an array 

//pop will grab the the last thing off the end of an array
//.unshift will add it to the beginning
//Use a for loopto loop through the array for rotation number of times.
//we need to pop the last element of the array off
//Save the output of .pop to a variable
//unshift (add to the beginning) the variable to the beginning of the array
//return the array
function cyclicRotation(arr, rotation) {
    for (var i = 0; i< rotation; i++){
        var drop = arr.pop();
        arr.unshift(drop);
    }
    return arr;
}

var result = cyclicRotation([3, 8, 9, 7, 6], 1);
console.log(result);
//variable - will be an empty array

