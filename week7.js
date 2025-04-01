//SECTION - loops 

/**
 * in programing to carry out repetitive task we use diffrent kind of loops 
 */

//NOTE -  for loop 

/*
for (init value; condition; increment/decrement){
//code
}
*/

// for(let i = 0; i<= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i<= 0; i--){
//     console.log(i)
// }
// let arr = [100,45,67,80,12,420]

// console.log(arr)
// console.log(arr[1])
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]+1)
// }

// //note -while loop 
// let j = 0 
// while(j <= 5) {
//     console.log(j)
//     j++
// }

// //NOTE - do whole loop 
// //let k = 0 
// // do{
// //     console.log(K)
// //     k++
// // } while (k <= 5)

//     // iterate 0 to 10 using loop, do the same  using while and do while loop 

//     // iterate 10 to 0 using for loop, do the same using while and do while loop 

//     // write a loop that makes seven calls to console.log to output the following triangle:

//     /*
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######


//     */

//     let x = ""

//     for(let i =0; i <7; i++){
//         x +="#"
//         console.log(x)
//     //console.log('#.repeat(i))
//     }


//     //ES6
//     [...Array(7)].forEach((_,i) => {
//         console.log('#'.repeat(i +1))
//     })
    
//     //use  for loop to iterate from 0 to 100 and print only evan numbers 
//     //use  for loop to iterate from 0 to 100 and print only odd  numbers 
//     for(let i = 0; i<= 100; i++){
//         if(i % 2 != 0)
//          {console.log(i)}
//      }
//     //use  for loop to iterate from 0 to 100 and print the sum of all numbers 
    
//     for(let i = 0; i<= 100; i++){
//        if(i % 2 == 0)
//         {console.log(i)}
//     }
    /*
    in contrast to variables array can store multiple values 
    each value in an array has an index and each index  has a refrance  in a memory adress 
    each value can be accessed bt using there indexs 
    the index of an array  starts from zero and the last element is less by one from the length of the array 
    */

    // bracker notation []

    //delcare an empty array  
    const emptyArray=[]

    //declare an array more then 5 times 
    const numbers = [10,20,30,40,50]

    //find the lenght of numbers array 
    console.log('length: ', numbers.length)

    //get the first item the middle item and the last item of the number array 
    console.log('first:', numbers[0])
    console.log('middle: ', numbers[Math.floor(numbers.length/2)])
    console.log('last: ', numbers[numbers.length-1]) 

    //declare a mixed data types arrays 
    const mixedDatatypes = ['hello',42,true,null, {name: 'js'},[1,2,3]]
    console.log('mixed data types: ', mixedDatatypes)
    console.log('length: ', mixedDatatypes.length)

    //declare IT companies 
    let itcompanies = ['facebook', 'google', 'microsoft','apple', 'IBM','oracle', 'amazon']

    //print the array 
    console.log('itcompanies :', itcompanies )

    //print the number of companies 
    console.log('number of companies: ', itcompanies.length)

    //print first, middle and last 
    console.log(itcompanies[0])
    console.log(itcompanies[Math.floor(itcompanies.length/2)])
    console.log(itcompanies[itcompanies.length-1])
    
    //print out each 
    itcompanies.forEach(company => console.log(company))

    //change each company to uppercase and print 
    itcompanies.forEach(company => console.log(company.toUpperCase()))

    //print as a sentance 
    console.log('${itcompanies.join(',')} are big tech companies.')

    //check if a certain company exists 
    const companycheck = 'facebook'
    console.log(
        itcompanies.includes(companycheck) ? companycheck : 'company is not found!'
    )

// filter out companys with more then one 'o' (no filter method )
const companieswithsingleO = []
for(let company of itcompanies){
    const count = company.toLowerCase().split('o').length-1
    if(count <= 1)companieswithsingleO.push(company)
} 
console.log('companies with one or no o: ', companieswithsingleO)

//sort the array ES6 

const sortTEchCompanies = [...itcompanies].sort()
console.log('sorted: ', sortTEchCompanies)

//reverse the array without using reverse ()
const manualReverse = []
for(let i = itcompanies.length -1; i >= 0; i--){
    manualReverse.push(itcompanies[i])
}
console.log('manually reversed: ',manualReverse)

//reverse using the reverse() ES6
const reversecompines = [...itcompanies].reverse()
console.log('reversed: ', reversecompines)

//const iterable 
const str = 'hello'
const letters = [...str]
console.log(letters)

//merge arrays 
const a = [1, 2]
const b = [3, 4]
const merge = [...a, ...b]
console.log(merged)
