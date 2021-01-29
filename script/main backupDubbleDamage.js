
// declaring variables:
const soundtrack = document.getElementById('soundtrack');
const section1 = document.getElementById('section-start');
const section2 = document.getElementById('section-game');
const section3 = document.getElementById('section-end');

const section3Text = document.getElementById('endGameText');
const section3NextGame = document.getElementById('nextGame');
const section3ClassSelect = document.getElementById('backClassSelect');

let turnNum = document.getElementById('turnsNumber');
let winNum = document.getElementById('winsNumber');

let winsNum = 0; // number of current wins

const warClassCard = document.getElementById('warrior-card');
const rogClassCard = document.getElementById('rogue-card');
const magClassCard = document.getElementById('mage-card');
let classImage = document.getElementById('classImg');
let classStats = document.getElementById('selectClassStats');
let enemyImage = document.getElementById('enemyImg');

let warHP = warriorObj.health;
let warMP = warriorObj.mana;
let rogHP = rogueObj.health;
let rogMP = rogueObj.mana;
let magHP = mageObj.health;
let magMP = mageObj.mana;
let trollHP = trollObj.health;
let goblinHP = goblinObj.health;

const autoAttackBtn = document.getElementById('autoAttack');
const damageConsole = document.getElementById('console');
const damageConsoleUL = document.getElementById('console-list');





// start game + checks
const gameStartChecks = () => {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    
    if (section1.getAttribute('style') === "display: none") {
        section1.setAttribute('style',"display: block")
    } 
}
gameStartChecks();



const startSoundtrack = () => {
    soundtrack.play();
    soundtrack.loop = true;
}

const endSoundtrack = () => {
    soundtrack.pause();
    soundtrack.loop = false;
}



let enemyID;
const setUpEnemy = () => {
    let randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0) {
        enemyID = 'troll';
        enemyImage.src = 'images/troll-char-1.jpg';
        enemyHp.innerText += ' ' + trollHP;
        enemyMp.innerText += ' ' + trollObj.mana;
        enemyStr.innerText += ' ' + trollObj.str;
        enemyInt.innerText += ' ' + trollObj.int;
        enemyDex.innerText += ' ' + trollObj.dex;
    } else if (randomNumber === 1) {
        enemyID = 'goblin';
        enemyImage.src = 'images/goblin-icon-1.jpg';
        enemyHp.innerText += ' ' + goblinHP;
        enemyMp.innerText += ' ' + goblinObj.mana;
        enemyStr.innerText += ' ' + goblinObj.str;
        enemyInt.innerText += ' ' + goblinObj.int;
        enemyDex.innerText += ' ' + goblinObj.dex;
    }
}
const setUpEnemySecondTime = () => {
    let randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0) {
        enemyID = 'troll';
        enemyImage.src = 'images/troll-char-1.jpg';
        enemyHp.innerText += ' ' + trollHP;
        enemyMp.innerText += ' ' + trollObj.mana;
        enemyStr.innerText += ' ' + trollObj.str;
        enemyInt.innerText += ' ' + trollObj.int;
        enemyDex.innerText += ' ' + trollObj.dex;
    } else if (randomNumber === 1) {
        enemyID = 'goblin';
        enemyImage.src = 'images/goblin-icon-1.jpg';
        enemyHp.innerText += ' ' + goblinHP;
        enemyMp.innerText += ' ' + goblinObj.mana;
        enemyStr.innerText += ' ' + goblinObj.str;
        enemyInt.innerText += ' ' + goblinObj.int;
        enemyDex.innerText += ' ' + goblinObj.dex;
    }
}

const settingEnemyStats = () => {
    enemyHp.innerText = 'Health = ';
    enemyMp.innerText = 'Mana = ';
    enemyStr.innerText = 'Strength = ';
    enemyInt.innerText = 'Intellect = ';
    enemyDex.innerText = 'Dexterity = ';
}

// let fightTextTest;
const fightTextAdd = () => {
    let fightLine = document.createElement('li');
    let fightLineText = document.createTextNode('FIGHT!');
    fightTextTest = fightLine.appendChild(fightLineText);
}

// advancing to section #2
const prepSection2 = () => {
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
}

const selectWarClass = () => {   // WARRIOR !!
    prepSection2();
    window.onload = function() {
        classImage.src = 'images/war-char-2.jpg';
        playerHp.innerText += ' ' + warHP;
        playerMp.innerText += ' ' + warriorObj.mana;
        playerStr.innerText += ' ' + warriorObj.str;
        playerInt.innerText += ' ' + warriorObj.int;
        playerDex.innerText += ' ' + warriorObj.dex;
        setUpEnemy();
        startSoundtrack();


        const reOrgenizeGame = () => {
            
            section3NextGame.addEventListener('click', function() {
                prepSection2();

                warHP = warriorObj.health;
                warMP = warriorObj.mana;
                trollHP = trollObj.health;
                goblinHP = goblinObj.health;

                classImage.src = 'images/war-char-2.jpg';
                playerHp.innerText = 'Health = ' + warHP;
                playerMp.innerText = 'Mana = ' + warMP;
                settingEnemyStats();
                return setUpEnemySecondTime();
            });

            section3ClassSelect.addEventListener('click', function(){
                prepSection2();

                section2.style.display = "none";
                section1.style.display = "block";

                warHP = warriorObj.health;
                warMP = warriorObj.mana;
                trollHP = trollObj.health;
                goblinHP = goblinObj.health;

                winsNum = 0;
                winNum.innerHTML = 'Wins: ' + winsNum;

                playerHp.innerText = 'Health = ';
                playerMp.innerText = 'Mana = ';
                playerStr.innerText = 'Intellect = ';
                playerInt.innerText = 'Intellect = ';
                playerDex.innerText = 'Dexterity = ';

                enemyHp.innerText = 'Health = ';
                enemyMp.innerText = 'Mana = ';
                enemyStr.innerText = 'Intellect = ';
                enemyInt.innerText = 'Intellect = ';
                enemyDex.innerText = 'Dexterity = ';
                return settingEnemyStats();

            })
        } 

        //create fight text
        let fightLine = document.createElement('li');
        let fightLineText = document.createTextNode('FIGHT!');
        fightLine.setAttribute("style","font-size: 130px; color: gold; opacity: 0.75; padding-bottom: 25px");
        fightLine.appendChild(fightLineText);
        damageConsoleUL.appendChild(fightLine);

        autoAttackBtn.addEventListener('click',function(){
            //remove fight text
            if (damageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
                fightLine.removeChild(fightLineText);
                damageConsoleUL.removeChild(fightLine);
            }

            let newLine = document.createElement('li');
            let autoAttackDamageCalc = warriorObj.autoAttack();
            let newLineText = document.createTextNode('You Deal ' + autoAttackDamageCalc + ' Damage!');
            newLine.appendChild(newLineText);
                
                
            if (enemyID === 'troll') {
                trollHP = (trollHP - autoAttackDamageCalc);
                enemyHp.innerText = 'Health = ' + trollHP;

                let enemyAutoAttack = trollObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                warHP = (warHP - enemyAutoAttack);
                playerHp.innerHTML = 'Health = ' + warHP;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);

            } else if (enemyID === 'goblin') {
                goblinHP = (goblinHP - autoAttackDamageCalc);
                enemyHp.innerText = 'Health = ' + goblinHP;

                let enemyAutoAttack = goblinObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                warHP = (warHP - enemyAutoAttack);
                playerHp.innerHTML = 'Health = ' + warHP;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);

            }
            if (trollHP <= 0 || goblinHP <= 0 || warHP <= 0) {
            section2.style.display = "none";
            section3.style.display = "block";
            endSoundtrack();

                if (trollHP <= 0 || goblinHP <= 0) {
                    section3Text.innerHTML = 'Congrats, You Win!';
                    while (trollHP <= 0 || goblinHP <= 0) {
                        winsNum = winsNum +1;
                        break;
                    }
                    winNum.innerHTML = 'Wins: ' + winsNum;
                    
                } else if (warHP <= 0) {
                    section3Text.innerHTML = 'You Lose! shitter...';
                    winsNum = 0;
                    winNum.innerHTML = 'Wins: ' + winsNum;
                    section3NextGame.disabled = true;
                    section3NextGame.classList.add('disabledBtn');
                    section3NextGame.classList.remove('nextGameBtn');
                }
            }
            return reOrgenizeGame();

        });
        
        
        
    }();
}

const selectRogClass = () => {   // ROGUE !!
    prepSection2();
    window.onload = function() {
        classImage.src = 'images/rog-char-3.jpg';
        playerHp.innerText += ' ' + rogueObj.health;
        playerMp.innerText += ' ' + rogueObj.mana;
        playerStr.innerText += ' ' + rogueObj.str;
        playerInt.innerText += ' ' + rogueObj.int;
        playerDex.innerText += ' ' + rogueObj.dex;
        setUpEnemy();
        // startSoundtrack();

        //create fight text
        let fightLine = document.createElement('li');
        let fightLineText = document.createTextNode('FIGHT!');
        fightLine.setAttribute("style","font-size: 130px; color: gold; opacity: 0.75; padding-bottom: 25px");
        fightLine.appendChild(fightLineText);
        damageConsoleUL.appendChild(fightLine);

        autoAttackBtn.addEventListener('click',function(){
            //remove fight text
            if (damageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
                fightLine.removeChild(fightLineText);
                damageConsoleUL.removeChild(fightLine);
            }

            let newLine = document.createElement('li');
            let autoAttackDamageCalc = rogueObj.autoAttack();
            let newLineText = document. createTextNode('You Deal ' + autoAttackDamageCalc + ' Damage!');
            newLine.appendChild(newLineText);
            
            if (enemyID === 'troll') {
                let updatedTrollHp = (trollObj.health - autoAttackDamageCalc);
                trollObj.health = updatedTrollHp;
                enemyHp.innerText = 'Health = ' + trollObj.health;

                let enemyAutoAttack = trollObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                let updatedPlayerHp = (rogueObj.health - enemyAutoAttack);
                rogueObj.health = updatedPlayerHp;
                playerHp.innerHTML = 'Health = ' + rogueObj.health;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);

            } else if (enemyID === 'goblin') {
                let updatedGoblinHp = (goblinObj.health - autoAttackDamageCalc);
                goblinObj.health = updatedGoblinHp;
                enemyHp.innerText = 'Health = ' + goblinObj.health;

                let enemyAutoAttack = goblinObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                let updatedPlayerHp = (rogueObj.health - enemyAutoAttack);
                rogueObj.health = updatedPlayerHp;
                playerHp.innerHTML = 'Health = ' + rogueObj.health;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);
            }

            if (trollObj.health <= 0 || goblinObj.health <= 0 || rogueObj.health <= 0) {
                section2.style.display = "none";
                section3.style.display = "block";
                if (trollObj.health <= 0 || goblinObj.health <= 0) {
                    section3Text.innerHTML = 'Congrats, You Win!';
                } else if (rogueObj.health <= 0) {
                    section3Text.innerHTML = 'You Lose! shitter...';
                }
            }
        });
    }();
}

const selectMagClass = () => {   // MAGE !!
    prepSection2();
    window.onload = function() {
        classImage.src = 'images/mag-char-4.jpg';
        playerHp.innerText += ' ' + mageObj.health;
        playerMp.innerText += ' ' + mageObj.mana;
        playerStr.innerText += ' ' + mageObj.str;
        playerInt.innerText += ' ' + mageObj.int;
        playerDex.innerText += ' ' + mageObj.dex;
        setUpEnemy();
        // startSoundtrack();

        //create fight text
        let fightLine = document.createElement('li');
        let fightLineText = document.createTextNode('FIGHT!');
        fightLine.setAttribute("style","font-size: 130px; color: gold; opacity: 0.75; padding-bottom: 25px");
        fightLine.appendChild(fightLineText);
        damageConsoleUL.appendChild(fightLine);

        autoAttackBtn.addEventListener('click',function(){
            //remove fight text
            if (damageConsoleUL.appendChild(fightLine) && fightLine.appendChild(fightLineText)) {
                fightLine.removeChild(fightLineText);
                damageConsoleUL.removeChild(fightLine);
            }

            let newLine = document.createElement('li');
            let autoAttackDamageCalc = mageObj.autoAttack();
            let newLineText = document.createTextNode('You Deal ' + autoAttackDamageCalc + ' Damage!');
            newLine.appendChild(newLineText);
            
            if (enemyID === 'troll') {
                let updatedTrollHp = (trollObj.health - autoAttackDamageCalc);
                trollObj.health = updatedTrollHp;
                enemyHp.innerText = 'Health = ' + trollObj.health;

                let enemyAutoAttack = trollObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                let updatedPlayerHp = (mageObj.health - enemyAutoAttack);
                mageObj.health = updatedPlayerHp;
                playerHp.innerHTML = 'Health = ' + mageObj.health;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);

            } else if (enemyID === 'goblin') {
                let updatedGoblinHp = (goblinObj.health - autoAttackDamageCalc);
                goblinObj.health = updatedGoblinHp;
                enemyHp.innerText = 'Health = ' + goblinObj.health;

                let enemyAutoAttack = goblinObj.autoAttack();
                let EnemyNewLine = document.createElement('li');
                let EnemyNewLineText = document.createTextNode('Enemy Deales ' + enemyAutoAttack + ' Damage!');
                EnemyNewLine.appendChild(EnemyNewLineText);

                let updatedPlayerHp = (mageObj.health - enemyAutoAttack);
                mageObj.health = updatedPlayerHp;
                playerHp.innerHTML = 'Health = ' + mageObj.health;

                if (damageConsoleUL.childNodes.length > 10){
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                    damageConsoleUL.firstChild.parentNode.removeChild(damageConsoleUL.firstChild);
                }
                damageConsoleUL.appendChild(newLine);
                damageConsoleUL.appendChild(EnemyNewLine);
            }

            if (trollObj.health <= 0 || goblinObj.health <= 0 || mageObj.health <= 0) {
                section2.style.display = "none";
                section3.style.display = "block";
                if (trollObj.health <= 0 || goblinObj.health <= 0) {
                    section3Text.innerHTML = 'Congrats, You Win!';
                } else if (mageObj.health <= 0) {
                    section3Text.innerHTML = 'You Lose! shitter...';
                }
            }
        });
    }();
}

warClassCard.addEventListener('click',selectWarClass)
rogClassCard.addEventListener('click',selectRogClass)
magClassCard.addEventListener('click',selectMagClass)










// SOUND TRACK DONE!
// if (section2.getAttribute('style') === "display: block") {
//     soundtrack.play();
//     soundtrack.loop = true;
// } else if (section2.getAttribute('style') === "display: none") {
//     soundtrack.pause();
//     soundtrack.loop = false;
// }

