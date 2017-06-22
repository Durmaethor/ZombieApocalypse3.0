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
    characterClass: window.prompt("Surviving in a zombie apocalypse is tough. Your previous life may bring some advantages. What were you before the apocalypse??? (Choose from: SOLDIER, DOCTOR, THIEF, SCIENTIST, ATHLETE").toUpperCase();

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
var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek into the hall. There are zombies everywhere! Do you search for a WEAPON, HIDE, or RUN?", "You are sitting in the living room of your boarded up house. Your father and brother have gone out scavenging, but have yet to return...", "You are running down a long road surrounded on each side by trees. There is a horde of zombies chasing you. Suddenly, you trip...", "You are locked in a prison cell, forgotten and left to die. A zombie guard is about to walk by. You can see the keys to the cells on his belt...", ""];

// Random number function that generates a whole number between 0 and RANGE
function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

// Assign random beginningScenario via following function
window.prompt(beginningScenarios[randomNumber(beginningScenarios.length -1)]).toUpperCase();