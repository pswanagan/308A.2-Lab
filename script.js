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
    roll: function(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};


    // Access Robin's inventory using a combination of dot notation and square bracket syntax

    console.log(adventurer.inventory[0]);

// Create a loop that logs each item in Robin's inventory

adventurer.inventory.forEach(item => {
    console.log(item);
});


// Test Dice Roll method a few times

adventurer.roll();
adventurer.roll();
adventurer.roll();




/**
 * Part Two: Class Fantasy
 */


//Create basic Character Class

class Character {
    constructor (name){
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
/*
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Rolls using Characters

robin.roll();
robin.companion.roll();
robin.companion.companion.roll(); */

/**
 *  Part Three - Class Features
 */

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.stamina = 100;
        this.skills = [];
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    equipItem(item) {
        console.log(`${this.name} is equipping ${item}.`);
        // Additional logic to equip the item
    }

    rest() {
        console.log(`${this.name} is resting.`);
        this.health = 100;
        this.stamina = 100;
        // Additional logic for resting
    }

    addSkill(skill) {
        this.skills.push(skill);
        console.log(`${this.name} has learned ${skill}.`);
    }
}


class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.loyalty = 100;
        this.specialAbility = "";
    }

    follow() {
        console.log(`${this.name} is now following.`);
    }

    assist() {
        console.log(`${this.name} is assisting.`);
    }

    setSpecialAbility(ability) {
        this.specialAbility = ability;
        console.log(`${this.name} has the special ability: ${ability}`);
    }
}

const robin = new Adventurer("Robin", "Scout");
robin.addSkill("Archery");

const leo = new Companion("Leo", "Cat");
leo.setSpecialAbility("Night Vision");

const frank = new Companion("Frank", "Flea");
frank.setSpecialAbility("Stealth");

robin.companion = leo;
leo.companion = frank;

robin.scout();
robin.rest();
robin.equipItem("sword");

leo.follow();
leo.assist();

frank.follow();
frank.assist();

