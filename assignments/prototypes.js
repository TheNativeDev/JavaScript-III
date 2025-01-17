/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

// GAME OBJECT
function GameObject(gameAtt) {
  this.createdAt = gameAtt.createdAt;
  this.dimensions = gameAtt.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}

// CHARACTER OBJECT
function CharacterStats(charAtt) {
  GameObject.call(this, charAtt);
  this.hp = charAtt.hp;
  this.name = charAtt.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took some damage.`;
};

// HUMANOID OBJECT
function Humanoid(humAtt) {
  CharacterStats.call(this, humAtt);
  this.faction = humAtt.faction;
  this.weapons = humAtt.weapons;
  this.language = humAtt.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} said a greeting in ${this.language}`;
};

// HERO
function Hero(heroAtt) {
  Humanoid.call(this, heroAtt);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attackVillian = function () {
  let fightResult = theVillian.hp - this.attack;
  if (fightResult <= 0) {
    return `${this.theVillian} has been slain!`;
  } else {
    return `${this.theVillian} has ${fightResult} hp left`;
  }
};

// Villian
function Villian(villAtt) {
  Humanoid.call(this, villAtt);
}

Villian.prototype = Object.create(Humanoid.prototype);

// Characters
const theHero = new Humanoid({
  hp: 14,
  weapons: 'sword',
  attack: 8
});

const theVillian = new Humanoid({
  hp: 10,
  weapons: 'staff',
  attack: 9
});

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(theHero.attackVillian);
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


function Hero(good) {
  Humanoid.call(this, good);
}

Hero.prototype.smash = function (target) {
  target.hp -= Math.ceil(Math.random() * 5)
  return (`${this.name} smashed the ${target.name}!  ${target.name} now has ${target.hp} health points left`)
}

function Villian(bad) {
  Humanoid.call(this, bad);
}

const Superman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Superman',
  faction: 'Earth',
  weapons: [
    'Lazer',
    'Frost Breath',
  ],
  language: 'English',
})

const Penguin = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Peguin',
  faction: 'Earth',
  weapons: [
    'Thugs',
    'Kife cane',
  ],
  language: 'English',
})


console.log(Penguin.hp);

console.log(Superman.smash(Penguin))

console.log(Penguin.hp);