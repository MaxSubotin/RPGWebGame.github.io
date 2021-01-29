
// Declaring Variables:
const htmlSoundtrack = document.getElementById('soundtrack');
const htmlMuteBtnImg = document.getElementById('muteMusicImg');
let isMusicPlaying = true;

const htmlSection1 = document.getElementById('section-start');
const htmlSection2 = document.getElementById('section-game');
const htmlSection3 = document.getElementById('section-end');

const htmlSection3EndGameText = document.getElementById('endGameText');
const htmlSection3NextGame = document.getElementById('nextGame');
const htmlSection3ClassSelect = document.getElementById('backClassSelect');

let htmlTurnNum = document.getElementById('turnsNumber');
let htmlWinNum = document.getElementById('winsNumber');

let winsNum = 0; // number of current wins

const htmlSelectWarClass = document.getElementById('warrior-card');
const htmlSelectRogClass = document.getElementById('rogue-card');
const htmlSelectMagClass = document.getElementById('mage-card');
let htmlClassImage = document.getElementById('classImg');
let htmlClassStats = document.getElementById('selectClassStats');
let htmlEnemyImage = document.getElementById('enemyImg');
let htmlEnemyStats = document.getElementById('enemyStats');

// player / enemy obj related variables
let playerClass;
let playerWarrior = {};
let playerRogue = {};
let playerMage = {};

let playerHp = document.getElementById('playerHp');
let playerMp = document.getElementById('playerMp');
let playerStr = document.getElementById('playerStr');
let playerInt = document.getElementById('playerInt');
let playerDex = document.getElementById('playerDex');

let enemyHp = document.getElementById('enemyHp');
let enemyMp = document.getElementById('enemyMp');
let enemyStr = document.getElementById('enemyStr');
let enemyInt = document.getElementById('enemyInt');
let enemyDex = document.getElementById('enemyDex');

let warSkillOneDamage;
let warSkillTwoDamage;
let rogSkillOneDamage;
let rogSkillTwoDamage;
let magSkillOneDamage;
let magSkillTwoDamage;

        // is the second skill used?
        let skillUsed = false;
        let polymorphUsed = false;

let playerDamageDealt;
let enemyDamageDealt;

let newPlayerHealth;
let newPlayerMana;
let newEnemyHealth;

// text console and skill btn variables
const htmlAutoAttackBtn = document.getElementById('autoAttack');
const htmlSkill1Btn = document.getElementById('skill1');
const htmlSkill2Btn = document.getElementById('skill2');
let htmlDamageConsole = document.getElementById('console');
let htmlDamageConsoleUL = document.getElementById('console-list'); //if these were const not let



// Play soundtrack and stop playing
const startSoundtrack = () => {
    soundtrack.play();
    soundtrack.loop = true;
    isMusicPlaying = true;
}

const endSoundtrack = () => {
    soundtrack.pause();
    soundtrack.loop = false;
    isMusicPlaying = false;
}

// Make the Music Btn Active
const prepareMusicBtnOn = () => {
    htmlMuteBtnImg.classList.remove('muteBtnOff');
    htmlMuteBtnImg.classList.add('muteBtnOn');
    htmlMuteBtnImg.src="images/sound-on.png";
}
prepareMusicBtnOn();

const prepareMusicBtnOff = () => {
    htmlMuteBtnImg.classList.remove('muteBtnOn');
    htmlMuteBtnImg.classList.add('muteBtnOff');
    htmlMuteBtnImg.src="images/sound-off.png";
}

// Music Btn Event Listener
htmlMuteBtnImg.addEventListener('click', function() {
    if (isMusicPlaying === true) {
        endSoundtrack();
        htmlMuteBtnImg.classList.remove('muteBtnOn');
        htmlMuteBtnImg.classList.add('muteBtnOff');
        htmlMuteBtnImg.src="images/sound-off.png";
    } else if (isMusicPlaying === false){
        startSoundtrack();
        htmlMuteBtnImg.classList.add('muteBtnOn');
        htmlMuteBtnImg.classList.remove('muteBtnOff');
        htmlMuteBtnImg.src="images/sound-on.png";
    }
});



// Function that prints FIGHT!
let fightLine;
let fightLineText;
const printFightTextPreFight = () => { //add text
    fightLine = document.createElement('li');
    fightLineText = document.createTextNode('FIGHT!');
    fightLine.setAttribute("style","font-size: 130px; color: gold; opacity: 0.75; padding-bottom: 25px");
    fightLine.appendChild(fightLineText);
    htmlDamageConsoleUL.appendChild(fightLine);
}
const removeFightText = () => {  //remove text
    htmlDamageConsoleUL.removeChild(fightLine);
    fightLine.removeChild(fightLineText);
}


// Function that prints the stats info on the html
let enemyTroll = {};
let enemyGoblin = {};
let enemyID; //if we check what is the value of this we will know the name of the enemy (troll or goblin)
const prepEnemyCard = () => {
    let randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0) {
        enemyTroll = new Enemy('enemy', 'troll', 200, 0, 11, 4, 9, 10);

        enemyID = enemyTroll.enemyName;
        htmlEnemyImage.src = 'images/troll-char-1.jpg';

        enemyHp.innerText += ' ' + enemyTroll.health;
        enemyMp.innerText += ' ' + enemyTroll.mana;
        enemyStr.innerText += ' ' + enemyTroll.strength;
        enemyInt.innerText += ' ' + enemyTroll.intellect;
        enemyDex.innerText += ' ' + enemyTroll.dexterity;

        newEnemyHealth = enemyTroll.health;

    } else if (randomNumber === 1) {
        enemyGoblin = new Enemy('enemy', 'goblin', 190, 0, 9, 4, 10, 10);

        enemyID = enemyGoblin.enemyName;
        htmlEnemyImage.src = 'images/goblin-icon-1.jpg';

        enemyHp.innerText += ' ' + enemyGoblin.health;
        enemyMp.innerText += ' ' + enemyGoblin.mana;
        enemyStr.innerText += ' ' + enemyGoblin.strength;
        enemyInt.innerText += ' ' + enemyGoblin.intellect;
        enemyDex.innerText += ' ' + enemyGoblin.dexterity;

        newEnemyHealth = enemyGoblin.health;
    }
}

const resetEnemyCard = () => {
    enemyID = '';
    htmlEnemyImage.src = '';

    enemyHp.innerText = 'Health = ';
    enemyMp.innerText = 'Mana = ';
    enemyStr.innerText = 'Strength = ';
    enemyInt.innerText = 'Intellect = ';
    enemyDex.innerText = 'Dexterity = ';
    newEnemyHealth = 0;

    enemyTroll = {};
    enemyGoblin = {};
}

const prepPlayerCard = (obj) => {
    playerHp.innerText += ' ' + obj.health;
    playerMp.innerText += ' ' + obj.mana;
    playerStr.innerText += ' ' + obj.strength;
    playerInt.innerText += ' ' + obj.intellect;
    playerDex.innerText += ' ' + obj.dexterity;
}

const resetPlayerCard = () => {
    playerHp.innerText = 'Health = ';
    playerMp.innerText = 'Mana = ';
    playerStr.innerText = 'Strength = ';
    playerInt.innerText = 'Intellect = ';
    playerDex.innerText = 'Dexterity = ';
}




// Defining Main Obj Constructor Function
function MainObj(identity, health, mana, strength, intellect, dexterity, baseDamage) {
    this.identity = identity,
    this.health = health,
    this.mana = mana,
    this.strength = strength,
    this.intellect = intellect,
    this.dexterity = dexterity,
    this.baseDamage = baseDamage
};

MainObj.prototype.autoAttack = function() {
    if (this.mana > 50) {
        let calcAutoAttackDamage = (this.intellect * 0.35) * this.baseDamage;
        let damageBalancer = Math.floor(Math.random()*25) +1; 
        let autoAttackDamage = Math.floor(((calcAutoAttackDamage + damageBalancer) * this.dexterity) / 25);

        return autoAttackDamage;

    } else if (this.mana <= 50) {
        let calcAutoAttackDamage = (this.strength * 0.5) * this.baseDamage;
        let damageBalancer = Math.floor(Math.random()*25) +1; 
        let autoAttackDamage = Math.floor(((calcAutoAttackDamage + damageBalancer) * this.dexterity) / 25);

        return autoAttackDamage; 
    }
};


// Defining Sub Obj Constructor Functions

// PLAYER
function Player(identity, className, health, mana, strength, intellect, dexterity, baseDamage, skill1Name, skill2Name, exists) {
    MainObj.call(this, identity, health, mana, strength, intellect, dexterity, baseDamage);

    this.exists = exists;
    this.className = className;
    this.skill1Name = skill1Name;
    this.skill2Name = skill2Name;
};

Object.defineProperty(Player.prototype, 'constructor', {
    value: Player,
    enumerable: false, 
    writable: true 
});
Player.prototype = Object.create(MainObj.prototype);
Player.prototype.constructor = Player;

// SKILL 1
Player.prototype.skill1 = function(obj) {
    let whoAmI = obj;            //this.className; //returns the class name (warrior/rogue/mage)
    let manaCostSkill1;
    switch (whoAmI) {
        case 'warrior':
            // Mortal Strike !
            manaCostSkill1 = 10;
            if (newPlayerMana < manaCostSkill1) {
                alert('Not Enough Mana');
                warSkillOneDamage = false;
            } else {
                newPlayerMana -= manaCostSkill1;
                warSkillOneDamage = (playerWarrior.autoAttack() * 2);
                playerMp.innerText = 'Mana = ' + newPlayerMana
            }
            break;
        case 'rogue':
            // Sinister Strike !
            manaCostSkill1 = 10;
            if (newPlayerMana < manaCostSkill1) {
                alert('Not Enough Mana');
                rogSkillOneDamage = false;
            } else {
                newPlayerMana -= manaCostSkill1;
                rogSkillOneDamage = (this.autoAttack() * 2);
                playerMp.innerText = 'Mana = ' + newPlayerMana
            }
            break;
        case 'mage':
            // Fire Ball ! 
            manaCostSkill1 = 25;
            if (newPlayerMana < manaCostSkill1) {
                alert('Not Enough Mana');
                magSkillOneDamage = false;
            } else {
                newPlayerMana -= manaCostSkill1;
                magSkillOneDamage = (this.autoAttack() * 3);
                playerMp.innerText = 'Mana = ' + newPlayerMana
            }
            break;
    
        default:
            console.log('this skill does not work');
            break;
    }
};


// SKILL 2
Player.prototype.skill2 = function(obj) {
    let whoAmI = obj
    let manaCostSkill2;

    switch (whoAmI) {
        case 'warrior':
            // CHARGE
            manaCostSkill2 = 5
            if (newPlayerMana < manaCostSkill2) {
                alert('Not Enough Mana');
                warSkillTwoDamage = false;
            } else if (skillUsed === false) {
                newPlayerMana -= manaCostSkill2;
                warSkillTwoDamage = Math.floor(playerWarrior.autoAttack() * 1.75);
                playerMp.innerText = 'Mana = ' + newPlayerMana
                skillUsed = true;
            }
            break;
        case 'rogue':
            // INSTANT POISON
            manaCostSkill2 = 10
            if (newPlayerMana < manaCostSkill2) {
                alert('Not Enough Mana');
                rogSkillTwoDamage = false;
            } else if (skillUsed === false) {
                newPlayerMana -= manaCostSkill2;
                rogSkillTwoDamage = Math.floor(playerRogue.autoAttack() * 1.25);
                playerMp.innerText = 'Mana = ' + newPlayerMana
                skillUsed = true;
            }
            break;
        case 'mage':
            // POLYMORPH
            manaCostSkill2 = 30
            if (newPlayerMana < manaCostSkill2) {
                alert('Not Enough Mana');
                magSkillTwoDamage = false;
            } else if (skillUsed === false) {
                newPlayerMana -= manaCostSkill2;
                magSkillTwoDamage = Math.floor(playerMage.autoAttack() * .15);
                playerMp.innerText = 'Mana = ' + newPlayerMana
                skillUsed = true;
            }
            break;
    
        default:
            console.log('this does not work number 2');
            break;
    }
};





// ENEMY
function Enemy(identity, enemyName, health, mana, strength, intellect, dexterity, baseDamage) {
    MainObj.call(this, identity, health, mana, strength, intellect, dexterity, baseDamage);

    this.enemyName = enemyName;
};

Object.defineProperty(Enemy.prototype, 'constructor', {
    value: Enemy,
    enumerable: false, 
    writable: true 
});
Enemy.prototype = Object.create(MainObj.prototype);
Enemy.prototype.constructor = Enemy;





// Prepare Section 2 after selecting classes
const prepSectionTwoScreen = () => {
    htmlSection1.style.display = "none";
    htmlSection2.style.display = "block";
    htmlSection3.style.display = "none";
}
const prepSectionThreeScreen = () => {
    htmlSection1.style.display = "none";
    htmlSection2.style.display = "none";
    htmlSection3.style.display = "block";
}


const playerSelectWarClass = () => {  // WARRIOR
    prepSectionTwoScreen();
    prepEnemyCard();

    if (isMusicPlaying === true) {
        startSoundtrack();
    } else if(isMusicPlaying === false) {
        endSoundtrack();
    }
    
    playerWarrior = new Player('player', 'warrior', 220, 25, 12, 4, 8, 10, 'Mortal Strike', 'Charge', true);
    prepPlayerCard(playerWarrior);
    htmlClassImage.src = 'images/war-char-2.jpg';
    htmlSkill1Btn.innerHTML = playerWarrior.skill1Name;
    htmlSkill2Btn.innerHTML = playerWarrior.skill2Name;

    printFightTextPreFight();
    playerClass = playerWarrior.className;
    newPlayerHealth = playerWarrior.health;
    newPlayerMana = playerWarrior.mana;
}

const playerSelectRogClass = () => {  // ROGUE
    prepSectionTwoScreen();
    prepEnemyCard();

    if (isMusicPlaying === true) {
        startSoundtrack();
    } else if(isMusicPlaying === false) {
        endSoundtrack();
    }

    playerRogue = new Player('player', 'rogue', 170, 25, 7, 4, 12, 10, 'Sinister Strike', 'Instant Poison', true);
    prepPlayerCard(playerRogue);
    htmlClassImage.src = 'images/rog-char-3.jpg';
    htmlSkill1Btn.innerHTML = playerRogue.skill1Name;
    htmlSkill2Btn.innerHTML = playerRogue.skill2Name;

    printFightTextPreFight();
    playerClass = playerRogue.className;
    newPlayerHealth = playerRogue.health;
    newPlayerMana = playerRogue.mana;
}

const playerSelectMagClass = () => {  // MAGE
    prepSectionTwoScreen();
    prepEnemyCard();

    if (isMusicPlaying === true) {
        startSoundtrack();
    } else if(isMusicPlaying === false) {
        endSoundtrack();
    }

    playerMage = new Player('player', 'mage', 140, 100, 4, 12, 8, 10, 'Fire Ball', 'Polymorph', true);
    prepPlayerCard(playerMage);
    htmlClassImage.src = 'images/mag-char-5.jpg';
    htmlSkill1Btn.innerHTML = playerMage.skill1Name;
    htmlSkill2Btn.innerHTML = playerMage.skill2Name;

    printFightTextPreFight();
    playerClass = playerMage.className;
    newPlayerHealth = playerMage.health;
    newPlayerMana = playerMage.mana;
}


// Create new lines in console
let arrayOfListItems = [];
let newLine;
let newLineText;
const newPlayerDamageLine = () => {
    newLine = document.createElement('li');
    newLineText = document.createTextNode('You Deal ' + playerDamageDealt + ' Damage!');
    newLine.appendChild(newLineText);
    htmlDamageConsoleUL.appendChild(newLine);
    arrayOfListItems += newLine;
}

const newEnemyDamageLine = () => {
    newLine = document.createElement('li');
    newLineText = document.createTextNode('Enemy Deals ' + enemyDamageDealt + ' Damage!');
    newLine.appendChild(newLineText);
    htmlDamageConsoleUL.appendChild(newLine);
    arrayOfListItems += newLine;
}

const makeEmptyDamageConsole = () => {
    htmlDamageConsoleUL = document.createElement('ul');
    htmlDamageConsoleUL.setAttribute("style","id: console-list");
    htmlDamageConsoleUL.classList.add('consoleList');
    htmlDamageConsole.appendChild(htmlDamageConsoleUL);
}

const removeFullDamageConsole = () => {
    htmlDamageConsole.removeChild(htmlDamageConsoleUL);
}


// Functions that checks if health hits 0
const checkHealth = () => {
    if (newEnemyHealth <= 0) {
        prepSectionThreeScreen();
        htmlSection3EndGameText.innerHTML = 'Congrats, You Win!';
        while (newEnemyHealth <= 0) {
            winsNum = winsNum +1;
            break;
        }
        htmlWinNum.innerHTML = 'Wins: ' + winsNum;
    } else if (newPlayerHealth <= 0) {
        prepSectionThreeScreen();
        htmlSection3EndGameText.innerHTML = 'You Lose! shitter...';
        winsNum = 0;
        htmlWinNum.innerHTML = 'Wins: ' + winsNum;
        htmlSection3NextGame.disabled = true;
        htmlSection3NextGame.classList.add('disabledBtn');
        htmlSection3NextGame.classList.remove('nextGameBtn');
    }
}

// Prepares the game, first section, adds event listeners for class select.
const prepareGame = () => {
    htmlSection1.style.display = "block";
    htmlSection2.style.display = "none";
    htmlSection3.style.display = "none";

    htmlSelectWarClass.addEventListener('click', playerSelectWarClass );
    htmlSelectRogClass.addEventListener('click', playerSelectRogClass );
    htmlSelectMagClass.addEventListener('click', playerSelectMagClass );

    htmlTurnNum.innerHTML = 0;
    winsNum = 0;
    htmlWinNum.innerHTML = 'Wins: 0';

}
prepareGame();



// AUTO ATTACK FUNCTIONS 
const autoAttackBtnFunction = () => {
    //remove fight text
    if (htmlDamageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
        fightLine.removeChild(fightLineText);
        htmlDamageConsoleUL.removeChild(fightLine);
    }

    //makes sure that the console does not over flow with damage lines
    if (htmlDamageConsoleUL.childNodes.length > 9){
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
    }

    //add 1 to the turns count
    htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;

    // who is the enemy and calc his auto attack
    if (enemyID === 'troll') {
        enemyDamageDealt = enemyTroll.autoAttack();
    } else if (enemyID === 'goblin') {
        enemyDamageDealt = enemyGoblin.autoAttack();
    }

    // player auto attack
    switch (playerClass) {
        
        case 'warrior':
            playerDamageDealt = playerWarrior.autoAttack();
            newPlayerDamageLine();
            newEnemyDamageLine();
            newEnemyHealth -= playerDamageDealt;
            newPlayerHealth -= enemyDamageDealt;
            playerHp.innerText = 'Health = ' + newPlayerHealth;
            enemyHp.innerText = 'Health = ' + newEnemyHealth;
            break;

        case 'rogue':
            playerDamageDealt = playerRogue.autoAttack();
            if (skillUsed === true) {
                playerDamageDealt += 8;
                console.log('poison damage');
            }
            newPlayerDamageLine();
            newEnemyDamageLine();
            newEnemyHealth -= playerDamageDealt;
            newPlayerHealth -= enemyDamageDealt;
            playerHp.innerText = 'Health = ' + newPlayerHealth;
            enemyHp.innerText = 'Health = ' + newEnemyHealth;
            break;

        case 'mage':
            if (polymorphUsed === true) {
                playerDamageDealt = playerMage.autoAttack();
                newPlayerDamageLine();
                newEnemyHealth -= playerDamageDealt;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;
                polymorphUsed = false;
                break;
            } 

            playerDamageDealt = playerMage.autoAttack();
            newPlayerDamageLine();
            newEnemyDamageLine();
            newEnemyHealth -= playerDamageDealt;
            newPlayerHealth -= enemyDamageDealt;
            playerHp.innerText = 'Health = ' + newPlayerHealth;
            enemyHp.innerText = 'Health = ' + newEnemyHealth;
            break;
    
        default:
            console.log('cant attack');
            break;
    }

    // auto attacks generate 2 mana per attack
    newPlayerMana += 2;
    playerMp.innerText = 'Mana = ' + newPlayerMana;

    // check to see if the round is over
    checkHealth();
}

// SKILL 1 FUNCTION 
const playerSkill1 = () => {
    //remove fight text
    if (htmlDamageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
        fightLine.removeChild(fightLineText);
        htmlDamageConsoleUL.removeChild(fightLine);
    }

    //makes sure that the console does not over flow with damage lines
    if (htmlDamageConsoleUL.childNodes.length > 9){
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
    }

    // who is the enemy and calc his auto attack
    if (enemyID === 'troll') {
        enemyDamageDealt = enemyTroll.autoAttack();
    } else if (enemyID === 'goblin') {
        enemyDamageDealt = enemyGoblin.autoAttack();
    }

    // player uses skill 1
    switch (playerClass) {
        
        case 'warrior':
            playerWarrior.skill1('warrior');
            if (warSkillOneDamage === false) {
                break;
            } else {
                playerDamageDealt = warSkillOneDamage;
                newPlayerDamageLine();
                newEnemyDamageLine();
                newEnemyHealth -= playerDamageDealt;
                newPlayerHealth -= enemyDamageDealt;
                playerHp.innerText = 'Health = ' + newPlayerHealth;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;

                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;

        case 'rogue':
            playerRogue.skill1('rogue');
            if (rogSkillOneDamage === false) {
                break;
            } else {
                playerDamageDealt = rogSkillOneDamage;
                if (skillUsed === true) {
                    playerDamageDealt += 8;
                    console.log('poison damage');
                }
                newPlayerDamageLine();
                newEnemyDamageLine();
                newEnemyHealth -= playerDamageDealt;
                newPlayerHealth -= enemyDamageDealt;
                playerHp.innerText = 'Health = ' + newPlayerHealth;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;

                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;

        case 'mage':
            playerMage.skill1('mage');
            if (magSkillOneDamage === false) {
                break;
            } else if (polymorphUsed === true) {
                playerDamageDealt = magSkillOneDamage;
                newPlayerDamageLine();
                newEnemyHealth -= playerDamageDealt;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;
    
                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
                polymorphUsed = false;
                break;
            } else {
                playerDamageDealt = magSkillOneDamage;
                newPlayerDamageLine();
                newEnemyDamageLine();
                newEnemyHealth -= playerDamageDealt;
                newPlayerHealth -= enemyDamageDealt;
                playerHp.innerText = 'Health = ' + newPlayerHealth;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;
    
                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;
    
        default:
            console.log('cant attack');
            break;
    }

    // check to see if the round is over
    checkHealth();
}




// SKILL 2 FUNCTION 
const playerSkill2 = () => {

    if (skillUsed === true) {
        return alert('You Can Only Use This Skill Ones !');
    } 

    //remove fight text
    if (htmlDamageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
        fightLine.removeChild(fightLineText);
        htmlDamageConsoleUL.removeChild(fightLine);
    }

    //makes sure that the console does not over flow with damage lines
    if (htmlDamageConsoleUL.childNodes.length > 9){
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
        htmlDamageConsoleUL.firstChild.parentNode.removeChild(htmlDamageConsoleUL.firstChild);
    }

    // who is the enemy and calc his auto attack
    if (enemyID === 'troll') {
        enemyDamageDealt = enemyTroll.autoAttack();
    } else if (enemyID === 'goblin') {
        enemyDamageDealt = enemyGoblin.autoAttack();
    }



    // player uses skill 2
    switch (playerClass) {
        
        case 'warrior':
            playerWarrior.skill2('warrior');
            if (warSkillTwoDamage === false) {
                break;
            } else {
                playerDamageDealt = warSkillTwoDamage;
                newPlayerDamageLine();
                newEnemyDamageLine();
                newEnemyHealth -= playerDamageDealt;
                newPlayerHealth -= enemyDamageDealt;
                playerHp.innerText = 'Health = ' + newPlayerHealth;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;

                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;

        case 'rogue':
            playerRogue.skill2('rogue');
            if (rogSkillTwoDamage === false) {
                break;
            } else {
                playerDamageDealt = rogSkillTwoDamage;
                newPlayerDamageLine();
                newEnemyDamageLine();
                newEnemyHealth -= playerDamageDealt;
                newPlayerHealth -= enemyDamageDealt;
                playerHp.innerText = 'Health = ' + newPlayerHealth;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;

                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;

        case 'mage':
            playerMage.skill2('mage');
            if (magSkillTwoDamage === false) {
                break;
            } else {
                playerDamageDealt = magSkillTwoDamage;
                newPlayerDamageLine();
                newEnemyHealth -= playerDamageDealt;
                enemyHp.innerText = 'Health = ' + newEnemyHealth;

                polymorphUsed = true;
    
                //add 1 to the turns count
                htmlTurnNum.innerHTML = Number(htmlTurnNum.innerHTML)+1;
            }
            break;
    
        default:
            console.log('cant attack');
            break;
    
        }
    // check to see if the round is over
    checkHealth();
}


// NEXT GAME FUNCTION 
const prepNextGame = () => {
    prepSectionTwoScreen();
    resetEnemyCard();
    prepEnemyCard();
    removeFullDamageConsole();
    makeEmptyDamageConsole();
    skillUsed = false;

    if (playerWarrior.exists) {
        playerWarrior = {};
        playerWarrior = new Player('player', 'warrior', 220, 25, 12, 4, 8, 10, 'Mortal Strike', 'Charge', true);
        resetPlayerCard();
        prepPlayerCard(playerWarrior);
        htmlClassImage.src = 'images/war-char-2.jpg';
        htmlSkill1Btn.innerHTML = playerWarrior.skill1Name;
        htmlSkill2Btn.innerHTML = playerWarrior.skill2Name;
        playerClass = playerWarrior.className;
        newPlayerHealth = playerWarrior.health;
        newPlayerMana = playerWarrior.mana;

    } else if (playerRogue.exists) {
        playerRogue = {};
        playerRogue = new Player('player', 'rogue', 170, 25, 6, 4, 12, 10, 'Sinister Strike', 'Instant Poison', true);
        resetPlayerCard();
        prepPlayerCard(playerRogue);
        htmlClassImage.src = 'images/rog-char-3.jpg';
        htmlSkill1Btn.innerHTML = playerRogue.skill1Name;
        htmlSkill2Btn.innerHTML = playerRogue.skill2Name;
        playerClass = playerRogue.className;
        newPlayerHealth = playerRogue.health;
        newPlayerMana = playerRogue.mana;

    } else if (playerMage.exists) {
        playerMage = {};
        playerMage = new Player('player', 'mage', 140, 100, 4, 12, 8, 10, 'Fire Ball', 'Polymorph', true);
        resetPlayerCard();
        prepPlayerCard(playerMage);
        htmlClassImage.src = 'images/mag-char-5.jpg';
        htmlSkill1Btn.innerHTML = playerMage.skill1Name;
        htmlSkill2Btn.innerHTML = playerMage.skill2Name;
        playerClass = playerMage.className;
        newPlayerHealth = playerMage.health;
        newPlayerMana = playerMage.mana;
    }
}


// CHOOSE CLASS FUNCTION
const prepClassSelect = () => {
    htmlSection3NextGame.disabled = false;
    htmlSection3NextGame.classList.remove('disabledBtn');
    htmlSection3NextGame.classList.add('nextGameBtn');
    playerClass = '';
    playerWarrior = {};
    playerRogue = {};
    playerMage = {};
    htmlSelectWarClass.removeEventListener('click', playerSelectWarClass );
    htmlSelectRogClass.removeEventListener('click', playerSelectRogClass );
    htmlSelectMagClass.removeEventListener('click', playerSelectMagClass );
    prepareGame();
    resetEnemyCard();
    resetPlayerCard();
    removeFullDamageConsole();
    makeEmptyDamageConsole();
    skillUsed = false;

    if (isMusicPlaying === false) {
        prepareMusicBtnOff();
    }
}



htmlSkill1Btn.addEventListener('click', playerSkill1 );
htmlSkill2Btn.addEventListener('click', playerSkill2 );
htmlSection3NextGame.addEventListener('click', prepNextGame);
htmlSection3ClassSelect.addEventListener('click', prepClassSelect);
htmlAutoAttackBtn.addEventListener('click', autoAttackBtnFunction);
