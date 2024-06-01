
// let size = prompt("Your Popcorn size : ");
// if(size == 'XL'){
//     console.log("price is Rs. 250");
// }else if(size == 'L'){
//     console.log("price is Rs. 200");
// }else if(size == 'M'){
//     console.log("price is Rs. 100");
// }else if(size == 'S'){
//     console.log("price is Rs. 50");
// }else{
//     console.log("Invalid");
// }
// console.error("Not available this size");

                 //<-------------------- JavaScript Part 2 Assignment Apna College  ------------->>
// Ans 1 : ----------
// let num=20;
// if(num % 10 == 0){
//     console.log("Good");
// }else{
//     console.log("bad");
// }

// Ans 2 : --------
// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// alert(`${name} is ${age} years old`);

// switch statement Ans 3: ---------
// let quarater =4;
// switch (quarater) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//       console.log("October, November, December");
//     break;
//     default:
//         console.log("Invalid input");
//         break;
// }

                // Ans 4: 
                // let str = 'Anmol';
                // if((str[0] === 'A' || str[0] ==='a') &&(str.length > 5) ){
                //     console.log("Golden string");
                // }else{
                //     console.log("not a golden string");
                // }

// Ans 6  : if 2 numbers have the same last digit
// i wrong this question 
// let num1 =2115;
// let num2=785215;
// if((num1%10)== (num2%10)){
//     console.log("Last digit is same");
// }else{
//     console.log("last digit is not same");
// }

                //<---------- JS part 3 Practice Question --------->

                // Ans : 1
                // let arr =[7,9,0,-2];
                // let n = 3;
                // console.log(arr.slice(0,n));

                // Ans 2 : 
                // let arr =[7,9,0,-1];
                // let n =3;
                // console.log(arr.slice(arr.length-n))

                // Ans 3 : 
                // let string = prompt("Enter the string : ");
                // if(string.length == 0){
                //     console.log("string is blank");
                // }

                // Ans 4 : 
                // let char ='F';
                // if(char.toLowerCase() === char){
                //     console.log("Character is lower case");
                // }else{
                //     console.log('not lower case');
                // }

                // Ans 5 : 
                // let string =" hello   ";
                // console.log(string.trim());

                // Ans 6 : 
            //     let arr =[3,4,5,6];
            //    let item = 5;
            //    if(arr.indexOf(item) != -1){
            //     console.log("Element exist in array");
            //    }else{
            //     console.log("Element does not exist in array");
            //    }


            // Udemy Gussing Game
          /*  let maximum =parseInt(prompt("Enter the maximum number : "));
            while(!maximum){
                maximum = parseInt(prompt("Enter the valid number : "));
            }
            const targetnum =Math.floor(Math.random() * maximum) + 1;
            console.log(targetnum); 

            let guess =prompt("Enter your first guess (Enter 'q' for Quit ) : ");
            let attempts =1;
            while(parseInt(guess) !== targetnum){
                if(guess ==='q') break;
                guess = parseInt(guess);
                if(guess > targetnum){
                    guess = prompt("Too high! Enter a new guess:");
                    attempts++;
                }else if(guess < targetnum){
                    guess = prompt("Too low! Enter a new guess:");
                    attempts++;
                }else{
                    guess = prompt("Invalid Guess! Enter number or 'q' for quit");
                }
            }
            if(guess === 'q'){
                console.log(`OK YOU QUITTING!`);
            }else{
                console.log("YOU WIN!");
                console.log(`YOU GOT IT! ITS TAKE ${attempts} guess`);
            }*/
          
                    //  TO-DO LIST APP IN Console
                /*    let input =prompt("What you want to do : ");
                    const todo =['Eat'];
        
                    while(input !== 'quit' && input !== 'q'){
                        input =prompt("What you want to do : ");

                        if(input === 'list'){
                            console.log("*********");
                           for(let i=0; i<todo.length; i++){
                            console.log(`${i}: ${todo[i]}`);
                           }
                            console.log("************");
                        }else if(input === 'new'){
                            const newtodo = prompt("What you want to add : ");
                            todo.push(newtodo);
                            console.log(`${newtodo} added to the list!`);
                        }else if(input === 'delete'){
                            const index= parseInt(prompt("Enter an index to delete :"));
                            if(!Number.isNaN(index)){
                                const deleted = todo.splice(index,1);
                                console.log( `deleted ${deleted[0]}`);
                            }else{
                                console.log("Unknown index");
                            }                           
                        }
                    }
                    console.log("OK YOU QUIT APP");*/

                    // Multiplication table of 5
                    // for(let i=1; i<=10; i++){
                    //     console.log(`5 * ${i} = ${5*i}`);
                    // }

                    //Generating Random number
                   
                    //Assignment 4 JS:
                    //ANS 1 : 
                    let arr =[1,2,3,4,5,6,2,3]
                    let num =2;
                    for(let i=0; i<arr.length; i++){
                        if(arr[i] == num){
                           arr.shift(i);
                        }else if(arr[i] == num){
                            arr.shift(i);
                        }
                       
                    }

                    for(let i=0; i<arr.length; i++){
                        console.log(arr[i] + " ");
                    }
                    