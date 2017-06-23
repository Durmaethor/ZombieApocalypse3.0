// This is a simple random adventure game created in JavaScript. 

// ZOMBIE APOCALYPSE 3.0

// Declare a variable to store the outcome of the game.
var outcome;

// Alert the player with the Introduction to the story and game.
window.alert("The world has come to an end, and is now infested with the walking dead. There is no hope, no cure, only survival. Will you survive?");

// Let the player know that they will be creating a character
window.alert("Time to create your character");

// Create a character OBJECT
var character = {
    health: 5,
    strength: 5,
    stealth: 5,
    intelligence: 5,
    speed: 5,

    // Ask the player to choose a NAME
    name: window.prompt("What is your name?"),

    // Ask the player to choose a CLASS for their character
    characterClass: window.prompt("Surviving in a zombie apocalypse is tough. Your previous life may bring some advantages. What were you before the apocalypse??? (Choose from: SOLDIER, DOCTOR, THIEF, SCIENTIST, ATHLETE").toUpperCase()

};

// Check to see if the player entered a NAME. If not, give them another chance
if (!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself... Last chance. What is your name?");

    // If a name is still not entered, assign a name to the character
    if (!character.name) {
        window.alert("Well I did try to warn you... Jimmity McGibblets it is then!");
        character.name = "Jimmity McGibblets";
    }
}

// Check to see if the player chose a CLASS. If not, give them another chance
if (!character.characterClass) {
    character.characterClass = window.prompt("How will you survive if you don't know your skills? Please choose a CLASS. If you don't, you will regret it! (Choose from: SOLDIER, DOCTOR, THIEF, SCIENTIST, ATHLETE").toUpperCase();

    // If a class still is not chosen...
    if (!character.characterClass) {
        window.alert("Well I did try to warn you... CLOWN it is!")
        character.characterClass = "CLOWN";
    }
}

// Assign the various classes increases to valid stats

// Choose from: SOLDIER, DOCTOR, THIEF, SCIENTIST, ATHLETE

        //     health: 5,
        //     strength: 5,
        //     stealth: 5,
        //     intelligence: 5,
        //     speed: 5,

// If character is SOLDIER, change strength property from 5 to 10
if (character.characterClass === "SOLDIER") {
    character.strength = 10;
}
// If character is DOCTOR, change health property from 5 to 10
if (character.characterClass === "DOCTOR") {
    character.health = 10;
}
// If character is THIEF, change stealth property from 5 to 10
if (character.characterClass === "THIEF") {
    character.stealth = 10;
}
// If character is SCIENTIST, change intelligence from 5 to 10
if (character.characterClass === "SCIENTIST") {
    character.intelligence = 10;
}
// If character is ATHLETE, change speed property from 5 to 10
if (character.characterClass === "ATHLETE") {
    character.speed = 10;
}
// If character is CLOWN, change properties to the following
if (character.characterClass === "CLOWN") {
    character.health = 2;
    character.strength = 2;
    character.stealth = 2;
    character.intelligence = 2;
    character.speed = 2;
}

// Provide the player with a random beginning scerario. Create an array of several options.
var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. Your head hurts, and you are having a tough time remembering what happened to you. You know that your name is " + character.name + ", but aside from that know little else. You tiptoe to the door and peek into the hall. There are zombies everywhere! Do you search for a WEAPON, HIDE, or RUN?"/*, "You are sitting in the living room of your boarded up house. Your father and brother have gone out scavenging, but have yet to return. Suddenly you hear scratching noises coming from outside. Do you GO UPSTAIRS, SEARCH for a weapon, or LOOK outside?", "You are running down a long road surrounded on each side by trees. There is a horde of zombies chasing you. Suddenly, you trip... Do you GIVE UP and lay there, GET UP and continue running, or frantically LOOK AROUND you for a weapon?", "You are locked in a prison cell, forgotten and left to die. Before the apocalypse you were a " + character.characterClass + ", but that seems completely irrelevent now. The only thing that matters now is if you can survive, which is an impossibility locked in this cage. You go to the bars and look around for a way out. Suddenly you see your chance! A zombie guard is about to walk by and you can see the keys to the cells on his belt... Do you cry out to get it's ATTENTION, wait SILENTLY and try to grab them without being noticed, or look for another OPTION?", "Your name is General " + character.name + ". Before the apocalypse you were a renowned " + character.characterClass + ", but when the dead started walking you quickly joined the military as it had the best odds of survival. You have taken a platoon of men and are engaging some bandits that have attacked a small village of survivors. All the gunfire has attracted a large horde of zombies. You are now blocked on both sides by enemies. Do you give the order to RETREAT, FIGHT, or SACRIFICE your men and run?"*/];

// Random number function that generates a whole number between 0 and RANGE
function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

// Assign random beginningScenario via following function (and assign response to a new variable?)
var choice = window.prompt(beginningScenarios[randomNumber(beginningScenarios.length -1)]).toUpperCase();

// Create SWITCH CASES depending on the scenario and choice made to continue the player's story
switch(choice) {
    case 'WEAPON':
        var weapon = prompt("You look around the room and see a BONESAW, a NEEDLE, or a DEFIBRILLATOR").toUpperCase();
        if(weapon === 'BONESAW') {
            if(character.characterClass === 'SOLDIER') {
                window.alert("You grab the bonesaw and move towards the door. Suddenly a zombie bursts through the door and rushes you. You move to swing the bonesaw, but your arm stops mid-swing. You realize in horror that the bonesaw is plugged in, but fortunately in the previous world you were a " + character.characterClass + " and your strength is unmatched. You continue the swing, pulling the cord from the wall and hitting the zombie square in the forehead." );

                // Set outcome to SURVIVE
                outcome = 'survive';
            } 
            else {
                window.alert("You grab the bonesaw and move towards the door. Suddenly a zombie bursts through the door and rushes you. You move to swing the bonesaw, but your arm stops mid-swing. You realize in horror that the bonesaw is plugged in, but your chance is gone and the zombie is already upon you. You feel a sharp pain in your shoulder and realize that you have been bitten. You feel warm liquid running freely down your back and know that this is the end...");
                
                // Set outcome variable to DIE
                outcome = "die";
            }
        }
        else if(weapon === 'NEEDLE') {
            var stab = window.prompt("You grab the needle and position yourself behind the door. A zombie bursts into the room and walks right past you. You slowly move up behind the zombie and grab it from behind. Where do you stab the zombie? In the NECK, HEART, or EYE?").toUpperCase();
            if(character.characterClass === 'DOCTOR') {
                    window.alert("Your extensive knowledge of anatomy as a " + character.characterClass + " shows you that the only true way to kill anything is by killing the brain. Because of this, you slam the needle into the zombie's eye, penetrating it's brain. The zombie immediately drops to the ground, now truly dead.");

                    // set outcome to SURVIVE
                    outcome = "survive";
            }
            else if(stab === 'NECK') {
                window.alert("You are a fool and stab the zombie in the neck, lodging the needle into its spine where it gets stuck. The zombie shakes you off and turns on you...");
                
                //set outcome variable to DIE
                outcome = "die";
            }
            else if(stab === 'HEART') {
                window.alert("Your extensive knowledge of anatomy (or so you believe) leads you to plunge the needle into the zombie's heart. You know for sure this will kill the zombie. Unfortunately you are wrong. You scream in horror as you realize too late that this will not kill a zombie...");

                // set outcome to DIE
                outcome = "die";
            }
            else if(stab === 'EYE') {
                window.alert("You plunge the needle through the zombie's eye, penetrating the brain. The zombie immediately drops to the floor, truly dead. You breathe a sigh of relief, making a mental note of the best way to kill future zombies.");

                // set outcome to SURVIVE
                outcome = "survive";
            }
        }
        break; 
}

// Check to see if an outcome has been assigned and alert appropriate result
if (outcome === "die") {
    window.alert("You have died!");
}
else if (outcome === "survive") {
    window.alert("You have survived!");
}