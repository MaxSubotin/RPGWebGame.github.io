
// Game Functionalty!
// make sure that classes dont get more than 50 mana or else the damage will change from str to int in the calculation
const autoAttackCalc = (obj) => {
    if (obj.mana > 50) {
        let calcAutoAttackDamage = (obj.int * 0.35) * obj.baseDamage;
        let damageBalancer = Math.floor(Math.random()*25) +1; 
        let autoAttackDamage = (calcAutoAttackDamage + damageBalancer);

        let calcDexAttacks = Math.floor((autoAttackDamage * obj.dex) / 25);
        return calcDexAttacks;
    } else if (obj.mana <= 50 && obj.mana > 0) {
        let calcAutoAttackDamage = (obj.str * 0.5) * obj.baseDamage;
        let damageBalancer = Math.floor(Math.random()*25) +1; 
        let autoAttackDamage = (calcAutoAttackDamage + damageBalancer);
    
        let calcDexAttacks = Math.floor((autoAttackDamage * obj.dex) / 25);
        return calcDexAttacks;
    } else if (obj.mana <= 0) {
        let calcAutoAttackDamage = (obj.str * 0.5) * obj.baseDamage;
        let damageBalancer = Math.floor(Math.random()*25) +1; 
        let autoAttackDamage = (calcAutoAttackDamage + damageBalancer);
    
        let calcDexAttacks = Math.floor((autoAttackDamage * obj.dex) / 25);
        return calcDexAttacks;
    }
}



// Player!
function Player (health,mana,str,int,dex,baseDamage) {
    this.health = health;
    this.mana = mana;
    this.str = str;
    this.int = int;
    this.dex = dex;
    this.baseDamage = baseDamage;
}

Player.prototype.autoAttack = function() { //Player auto attacks!
    let _this = this;
    return autoAttackCalc(_this);
}

//health = baseHealth(100) + (str * 10)

let warriorObj = new Player(220,25,12,4,8,10);  
let rogueObj = new Player(170,25,7,4,12,10);
let mageObj = new Player(140,150,4,12,8,10);


let playerHp = document.getElementById('playerHp');
let playerMp = document.getElementById('playerMp');
let playerStr = document.getElementById('playerStr');
let playerInt = document.getElementById('playerInt');
let playerDex = document.getElementById('playerDex');






// Enemy!

function Enemy (health,mana,str,int,dex,baseDamage) {
    this.health = health;
    this.mana = mana;
    this.str = str;
    this.int = int;
    this.dex = dex;
    this.baseDamage = baseDamage;
}

Enemy.prototype.autoAttack = function() { //Enemy auto attacks!
    let _this = this;
    return autoAttackCalc(_this);
}


let trollObj = new Enemy(200,0,10,4,7,10); 
let goblinObj = new Enemy(190,0,9,4,8,10);


let enemyHp = document.getElementById('enemyHp');
let enemyMp = document.getElementById('enemyMp');
let enemyStr = document.getElementById('enemyStr');
let enemyInt = document.getElementById('enemyInt');
let enemyDex = document.getElementById('enemyDex');