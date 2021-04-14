/*
Question 1
Define an array of numbers (use any random numbers). Write a program to print only 
the even numbers of the array. Do not use any library functions, need to do via for loops
 only
 */
printEven()
 //solution
 function printEven(){

    let arr = [23, 34, 3, 67, 24, 68, 99];

    // using modulo operator if any number%2 is zero then number is even
    /*
    for (number of arr){
        if(number % 2 == 0)
            console.log(number)
    }
    */
    // more efficient solution is to using the fact that the last bit of binary representation of even number is 0
    // for example
    /*
    1 - 0001
    2 - 0010
    3 - 0011
    4 - 0100 
    */ 
  
   for(number of arr){
       if((number & 1) == 0)
            console.log(number);
   }
 }
 //*********************************************************************************** */

/*
Question 2

Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

*/
countConsecutiveOnes("00110001001110")
countConsecutiveOnes("1000010001")

// solution
function countConsecutiveOnes(myString){
    var count = 0    
    var result = 0
    var i = 0

    while(i<myString.length){
        count = 0
        
        while(myString[i] == "1"){
            count++
            i++
        }
        result = count > result ? count:result
        i++
    }
    console.log(result)

}
// Time Complexity = O(length of String)
// Space Complexity = O(1) since we are not using any extra space


/******************************************************************* */

/*
Question 3
Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive.
 Each number only occurs once in the array except one number which occurs twice. Write a js code to find 
 the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);
*/
getRepeatedNumber([0,1,2,3,4,5,6,7,7,8,9,10])  //output = 7
getRepeatedNumber([0,1,2,3,4,5,6,7,8,9,10,11,12,13, 13, 14,15,16,17,18,19,]) // output = 13
getRepeatedNumber([0,1,2,3,4,5,6,7,8,9,10,11,12,13, 14,15,16,17,18,19,]) // output = No number is repeated

function getRepeatedNumber(arr){
    var i = 0
    var repeatedNumber = -1
    while(i<arr.length-1){

        // since array is sorted so we need to compare two consecutive number if both are same
        // then this number should be our answer
        if(arr[i] == arr[i+1]){
            repeatedNumber = arr[i]
            break  // break the loop if repeated number found
        }
        i++
    }
    console.log(repeatedNumber != -1 ? repeatedNumber:"No number is repeated")

}

// Time complexity O(n) where n is the length of array
// Space complexity O(1) since we are not using any extra space

/****************************************************************************************** */

/*
Question 4
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.
*/
//printDataFromApi()


// solution

function printDataFromApi(){
    const URL = "https://jsonplaceholder.typicode.com/todos/"
    fetch(URL)
    .then((resopnse) => resopnse.json())
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })

}

/********************************************************************** */ 

/*
Question 5
Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}

It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s

*/

var obj = [
    {
    id:  4, name : 'abc'},
    {id : 10, name : 'ab2'},
    {id : 5, name : 'abc3'},
    {id : 6, name : 'abc5'
   }]
sortById(obj)

function sortById(arr){
    arr.sort(compare)
    console.log(arr)
}


function compare( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }
  