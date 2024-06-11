//Exercise 1: Temperature check

//if-statement
let temp = 16

if(temp < 0)
{
    console.log("Temp: "+temp + ", It is freezing")
}
else if(temp >= 0 && temp <= 15)
{ 
    console.log("Temp: "+temp +", It is cold ")
}
else if(temp >=16 && temp <= 25)
{
    console.log("Temp: "+temp +", It is mild ")
}
else if( temp >25)
{
    console.log("Temp: "+temp +", It is warm")
}

//switch statement

let temperature = 34
switch(true)
{
    case temperature < 0:
        console.log("Temperature: "+temperature +", It is freezing") 
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("Temperature: "+temperature +", It is cold ")
        break;
    case temperature >=16 && temperature <= 25:
        console.log("Temperature: "+temperature +", It is mild ")
        break;
    case temperature >25:
        console.log("Temperature: "+temperature +", It is warm")
        break;
    default:
        console.log("Temperature: "+temperature +", Not A valid Temperature")
        break;
}

//Exercise 2: Divisibility Check

//if statement
let number = 30

if( number /2 && number /3)
{
    console.log(number+ " is Divisible")
}
else if(number /2)
{
    console.log(number + " is Divisisble by 2")
}
else if(number /3)
{
    console/log(number + "is Divisible by 3")
}
else{
    console.log(number + " is Not Divisible by 2 or 3")
}

//switch statement

let num = 0
switch(true)
{
    case num/2 && num/3:
        console.log(num +" is Divisible")
        break;
    case num /2:
        console.log(num +" is Divisisble by 2")
        break;
    case num /3:
        console/log(num +" is Divisible by 3")
        break;
    default:
        console.log(num+ " is Not Divisible by 2 or 3")
        break;
    
}

//Exercise 3: For loops

for(let i=1;i<=10;i++)
{
    console.log(i)
}


for(let i= 1;i<=20;i++)
{
   if(i % 2 == 0)
   {
    console.log(i)
   }
}


sum= 0
for(let i=1;i<=100;i++)
{
    sum += i
}
console.log(sum)


const Numbers =[1,2,3,4,5]
for(let i=0;i < Numbers.length;i++)
{
    console.log("Index["+i+"]: "+ Numbers[i])
 
}

let numArray = [3, 7, 2, 5, 10, 6];
let largest = numArray[0]; // Initialize with the first element

for ( i = 0; i < numArray.length; i++) {
    if (numArray[i] > largest) {
        largest = numArray[i];
    }
}
console.log("The largest number is:", largest);

//Exercise 4: While loops

var i= 1
while(i <=10 )
{
    console.log(i)
    i++
}


var i=1
while(i<=20)
{
   if(i % 2 == 0)
   {
    console.log(i)
   }
   i++
}

let _i=1
let _sum=0
while(i<=100)
{
    _sum+= i
    i++
}
console.log("The sum is: "+ _sum)

var i=1

while(i<=50)
{
    if( i % 5==0)
    {
        console.log(i+ " ")
    }
    i++
}

//Exercise 5: Do While loops

/*
1. Print numbers from 1 to 10.
2. Calculate the sum of all numbers from 1 to 100 and print the 
result.
3. Prompt the user to enter a number greater than 10. Keep 
asking untilthey enter a valid number.
4. Create a simple guessing game where the user must guess a 
number between 1 and 10. The game continues until the user 
guesses the correct number
*/
i=1
do
{
    console.log(i)
    i++
}while(i<=10)


i=1
sum=0
do
{

    sum=sum+i
    i++
}while(i<=100)
console.log("Sum: "+ sum)

let _number
do
{
    _number=prompt(" Enter a number greater than 10: ")

    if(_number <=10)
    {
        _number=prompt(" Enter a valid number(greater than 10: ")
    }
    else{
        break;
    }
    

}while(_number <= 10)


 let GuessNum
 let ArrGame =['1','2','3','4','5','6','7','8','9','10']
do
{
    GuessNum =prompt('Guess a number between ( 1 and 10): ')

        if(GuessNum == ArrGame[5])
        {
            console.log("BINGO! BINGO! CORRECT GUESS!")
        }
        else
        {
            GuessNum =prompt('Guess a number between ( 1 and 10): ')
        }
    
}while(GuessNum != ArrGame[5])