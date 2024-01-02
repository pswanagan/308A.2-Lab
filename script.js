/** 
 * Part One: Humble Beginnings
*/

// Model a simple adventurer with basic properties such as health and an inventory

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
        
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    };

    // Access Robin's inventory using a combination of dot notation and square bracket syntax

    console.log(adventurer.inventory[0]);

// Create a loop that logs each item in Robin's inventory

for (const key in adventurer.inventory) {
    console.log(adventurer.inventory[key]);
}

// Test Dice Roll method a few times

adventurer.roll();
adventurer.roll();
adventurer.roll();




/**
 * Part Two: Class Fantasy
 */


//Create basic Character Class

class Character {
    constructer (name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

// Recreate Robin using Character Class

const robin = new Character("Robin");
robin.inventory =["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Rolls using Characters

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

/