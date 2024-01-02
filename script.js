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
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
        }
        static MAX_HEALTH = 100;
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
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
        this.stamina = 100;
        this.skills = [];
        this.inventory.push("bedroll", "50 gold coins");
    }
    duel(opponent) {
        if (!(opponent instanceof Adventurer)) {
            console.log("Invalid opponent. Must be an Adventurer.");
            return;
        }

        console.log(`${this.name} has challenged ${opponent.name} to a duel!`);

        while (this.health > 50 && opponent.health > 50) {
            const myRoll = this.roll();
            const opponentRoll = opponent.roll();

           // let oppHealth = opponent.health;
            //let myHealth = this.health;

            if (myRoll > opponentRoll) {
                opponent.health = opponent.health - 1;
                console.log(`${this.name} strikes ${opponent.name}! (${myRoll} vs ${opponentRoll})`);
            } else if (myRoll < opponentRoll) {
                this.health = this.health - 1;
                console.log(`${opponent.name} strikes ${this.name}! (${opponentRoll} vs ${myRoll})`);
            } else {
                console.log("The duelists parry each other's blows!");
            }

            console.log(`${this.name} Health: ${this.health}, ${opponent.name} Health: ${opponent.health}`);
        }

        const winner = this.health > opponent.health ? this.name : opponent.name;
        console.log(`The winner of the duel is ${winner}!`);
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
    static ROLES = ["Fighter", "Healer", "Wizard", "Scout"];
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

/**
 * Part Four - Class Uniforms   It was completed in above in it's respective classes
 */



/**
 * Part Five - Gather your Party
 */

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin2 = healers.generate("Robin");

  /**
   * Part Six - Developing Skills
   */

const luna = new Adventurer("Luna", "Wizard");

robin.duel(luna);