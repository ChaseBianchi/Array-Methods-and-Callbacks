import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
function searchFifa(year, stage, searchStr){
    for(let i=0;i<fifaData.length;i++){
    if(fifaData[i]['Year']===year){
        if(fifaData[i]['Stage']===stage){
            return fifaData[i][searchStr];
        }
    }
}
}

// I could do a different way if i were to use a method like .filter or .includes to make a new array or object for 2014 world cup final, then console.log items in the array for Task a,b,c,etc.  I initially built a function because I wasnt sure if i was going to need to reuse it. If I knew i was only working with data from 2014 finals, I'd have probably used a method to isolate the data.


//(a) Home Team name for 2014 world cup final
console.log(searchFifa(2014,'Final','Home Team Name'));

//(b) Away Team name for 2014 world cup final
console.log(searchFifa(2014,'Final','Away Team Name'));
//(c) Home Team goals for 2014 world cup final
console.log(searchFifa(2014,'Final','Home Team Goals'));
//(d) Away Team goals for 2014 world cup final
console.log(searchFifa(2014,'Final','Away Team Goals'));
//(e) Winner of 2014 world cup final */
if(searchFifa(2014,'Final','Home Team Goals')>searchFifa(2014,'Final','Away Team Goals')){
    console.log(`${searchFifa(2014,'Final','Home Team Name')} is the winner of 2014 world cup finals!`)}
    else{
        console.log(`${searchFifa(2014,'Final','Away Team Name')} is the winner of 2014 world cup finals!`)
    }


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {
   return array.filter(func => func['Stage']==='Final');
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array,cb) {
    const years =[];
    for(let i=0;i<cb(array).length;i++){
        years.push(cb(array)[i]['Year']);
    }
    return years;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, cb) {
    const winners=[];
    for(let i=0;i<cb(array).length;i++){
    if(cb(array)[i]['Home Team Goals']>cb(array)[i]['Away Team Goals']){
        winners.push(cb(array)[i]['Home Team Name']);
    }else{
        winners.push(cb(array)[i]['Away Team Name']);
    }
}
    return winners;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, cbYear, cbWin) {
    const newArr=[];
    for(let i=0;i<cbYear(array, getFinals(array)).length;i++){
        newArr.push(`In ${cbYear(array, getFinals(array))[i]}, ${cbWin(array,getFinals(array))[i]} won the world cup!`)
    }
    return newArr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
