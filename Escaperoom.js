var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please? "); 

console.log(`Welcome ${playerName} to the Escape Room Game Simulation!`);

let isAlive = true; 
let hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn(`Press 1 to Put hand in hole, Press 2 to Find the key, or Press 3 to Open the door: `, {limit:'$<1-3>'});
    switch (menuOptions == 1){

        case '1':
        result (menuOptions == 1)    
        console.log(`${playerName}, you put hand in the hold. You are DEAD. Game is OVER!!!`);
        break;
        isAlive = false;

        case '2':
        result (menuOptions == 2 && hasKey == false)
        console.log(`${playerName}, you have found the key successfully! Please proceed to the next menu option to open the exit door!`);
        break;
        hasKey = true;
        
        case '2':
        result (menuOptions == 2 && hasKey == true)
        console.log(`${playerName}, you have already found the key before! Stop wasting your time and proceed to the next menu option to open the exit door!`);
        break;

        case '3':
        result (menuOptions == 3 && hasKey == false)
        console.log(`${playerName}, you have NOT found the key yet. Please use menu option 2 to locate the key first!`);
        break;
    
        case '3':
        result (menuOptions == 3 && hasKey == true)
        console.log(`${playerName}, Congratulations, you have found the key to the exit door. The exit door has opened successfully. Game is over.`);
        isAlive = false;
    };

}
