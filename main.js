// This is a simple random adventure game created in JavaScript. 

// ZOMBIE APOCALYPSE 3.0

// Declare a variable to store the outcome of the game.
var outcome;

// Alert the player with the Introduction to the story and game.
window.alert("The world has come to an end, and is now infested with the walking dead. There is no hope, no cure, only survival. Will you survive?");

// Create a character OBJECT
var character = {
    health: 5,
    strength: 5,
    stealth: 5,

    // Ask the player to choose a NAME
    name: window.prompt("What is your name?"),

    // Ask the player to choose a CLASS for their character
    characterClass: window.prompt("Surviving in a zombie apocalypse is tough. Your previous life may bring some advantages. What were you before the apocalypse??? (Choose from: Soldier, Doctor, ")

}


// Provide the player with a random beginning scerario. Create an array of several options.
var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek into the hall. There are zombies everywhere! Do you search for a WEAPON, HIDE, or RUN?", "You are sitting in the living room of your boarded up house. Your father and brother have gone out scavenging, but have yet to return...", "You are running down a long road surrounded on each side by trees. There is a horde of zombies chasing you. Suddenly, you trip...", "You are locked in a prison cell, forgotten and left to die. A zombie guard is about to walk by. You can see the keys to the cells on his belt...", ""];

// Random number function that generates a whole number between 0 and RANGE
function randomNumber(range) {
    "use strict";

}