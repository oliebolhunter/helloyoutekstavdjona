var rs = require("readline-sync");

let line1, line2 ,line3, line4, line5 ,line6, line7, line8, line9, line10, line11, line12


var playerHP = 100
var playerMana = 100
var playerStrenght = 100
var playerStamina = 100
var playerSpeed = 50

let enemyHP, enemyMana, enemySpeed, enemyStamina, enemyStrenght, enemy
enemy = "your parent"
enemyHP = 999
enemyMana = 1
enemySpeed = 150
enemyStamina = 200
enemyStrenght = 999
let antwoord;

function addspaces(tekst, length){
 let output = tekst.toString();
 while(output.length < length)  {
    output += " ";
 }   
return output;
}

function gui(quest,vraag){

   console.log(" ")
   console.log(" ")
   console.log(" ")
   console.log(" ")
   console.log(" ")
   console.log(" ")
   console.log("                                                                                                                                                                                ")
   console.log("               ________________________             XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                    ")
   console.log("               |HP:"+addspaces(playerHP,3)+"                |             "+line1+"                              ")
   console.log("               |Mana:"+addspaces(playerMana ,3)+"              |             "+line2+"                         ")
   console.log("               |Strenght:"+addspaces(playerStrenght ,3)+"          |             "+line3+"                                   ")
   console.log("               |Stamina:"+addspaces(playerStamina ,3)+"           |             "+line4+"                       ")
   console.log("               |Speed:"+addspaces(playerSpeed ,2)+"              |             "+line5+"                         ")
   console.log("               |______________________|             "+line6+"                                      ")
   console.log("                                                    "+line7+"                                                   ")
   console.log("                                                    "+line8+"                                                   ")
   console.log("                                                    "+line9+"                                                   ")
   console.log("                                                    "+line10+"                                                   ")
   console.log("                                                    "+line11+"                                                  ")
   console.log("                                                    "+line12+"                                                ")
   console.log("                                                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ")
   console.log("                                                                                                                                 ")
   console.log("                                                ____________________________________________________________________________________ ")
   console.log("                                               |                                                                                    | ")
   console.log("                                               |"+addspaces(quest,84)+"| ")
   console.log("                                               |"+addspaces(vraag,84)+"| ")
   console.log("                                               |                                                                                    |   ")
   console.log("                                               |____________________________________________________________________________________|     ")
   console.log("                                       ")
   console.log("                                                                                                                                                                                   ")
   console.log("                                                                                                                                                                                   ")
   console.log("                                       ")
   console.log("                                                                                                                  ")
   console.log("                                                                                                                                                                                   ")
   console.log("                                                                                                                  ")
   console.log("                                                                                           ")
   console.log("                                                                                                        ")
   antwoord = rs.question("!!");
   }
function GameOver(){
 line1 = "X                                                                         x"
 line2 = "X                                                                         x"
 line3 = "X    _____                             ____                               x"
 line4 = "X   / ____|                           / __ \\                              x"
 line5 = "X   | |  __  __ _ _ __ ___    ___    | |   | |_    _____ _ __             x"
 line6 = "X   | | |_ |/ _` | '_  `_  \\ / -~\\   | |   | \\ \\/ / _  \\ '__|             x"
 line7 = "X   | |__| | (_| | | | | |  | __/  | |  __ | |\  v /   __/ |               x"
 line8 = "X   \\_____/\\__,_| |_| |_|\\  \\____|    \\____/   \_/ \\___|_|                 x"
 line9 = "X                                                                         x"
line10 = "X                                                                         x"
line11 = "X                                                                         x"
line12 = "x                                                                         x"
}   
function victory(){
    line1 = "X                                                                         x"
    line2 = "X  __      __   _    ____     ______  _____   _____      _       _        x"
    line3 = "X |  |    |  | |_|  | ___\\  |__  __| | ___ | |     |    \\ \\    / /        x"
    line4 = "X  \\ \\    /  /  _   ||         | |   ||   || |   __|      \\ \\  //         x"
    line5 = "X   \\  \\_/  /  | |  ||         | |   ||   || | |\\ \\        |   |          x"
    line6 = "X    \\     /   | |  ||         | |   ||   || | | \\ \\      |   |           x"
    line7 = "X     \\   /    | |  ||___      | |   ||___|| | |  \\ \\    |   |            x"
    line8 = "X      \\_/     |_|  |____/     |_|   |_____| |_|   \\_\\  |___|             x"
    line9 = "X                                                                         x"
   line10 = "X                                                                         x"
   line11 = "X                                                                         x"
   line12 = "X                                                                         x"
}
                                                    
                                                    



function start()
{
   line1 = "X                                                                         x"
   line2 = "X                                                                         X"
   line3 = "X                           /=======================\\                     X"
   line4 = "X                          /                         \\                    X"
   line5 = "X                         /                           \\                   X"
   line6 = "X                        /                             \\                  X"
   line7 = "X                        |                             |                  X"
   line8 = "X                        |            ______           |                  X"
   line9 = "X                        |           |      |    ____  |                  X"
   line10 ="X                        |           |    . |   |  . | |                  X"
   line11 ="X                        |           |      |   |  | | |                  X"
   line12 ="X                        |           |      |    ----  |                  X"

   let quest1 = "je komt thuis en hoord een geluid in de keuken, wat doe je?";
   let vraag1 = "a: je gaat naar de keuken  b: je rent naar je kamer";
   gui(quest1, vraag1)

   console.log(antwoord)
   if (antwoord === 'b')
   {
     naarKamer();
   }
   
if (antwoord === "a"){
   naarKeuken();
   }
}

function naarKeuken()
{

   line1 ="X                                                                         x"
   line2 ="x _______ _____________                 ___________________               x"
   line3 ="x|       |     |      |                |         |         |    __        x"
   line4 ="x|       | |   |      |                | .       | .       |   /..\\       x"
   line5 ="X|       |_____|______|                |_________|_________|   \\__/       x"
   line6 ="X| |     |     |      |                                        |  |       x"
   line7 ="x| |     | |   |@@@@@@|   [~]                _                \\|  |/      x"
   line8 ="x|       | |   |______|   _Y_               ' \\               \\|  |/      x"
   line9 ="x|_______|     |      |__|___|_________________|_______________|__|_______x"
   line10 ="x|       |_____| |    |                  |      |           ^^^          |x"
   line11 ="X|       | .   |      |__________________|______|____________|___________|x"
   line12 ="x|_______|_____|______|                                                  |x"
      gui(antwoord,"je gaat naar de keuken toe en je ziet je moeder veranderen in een monster ")
   
      let quest2 = ("je gaat naar de keuken toe en je ziet je moeder als een monster wat ga je doen?")
      let vraag2 = ("a: attack b: flee")
      gui(quest2,vraag2)
   
   
      if (antwoord === 'b') 
      {
         GameOver();
         gui(antwoord, "Je probeert wegterennen maar het monster is te snel")
      
         process.exit();
     }
     if (antwoord === 'a') {
      aanvallen()
     }
        
}

function aanvallen()
{line1 ="X               / \\/ \\                _____                               x"
line2 ="X              | 0  0 |              /     \\                              x"
line3 ="X              |   ∆  |             | 0   0 |                             x"
line4 ="X               \\  _ /             <|   3   |>                            x"
line5 ="X               _\\- /_              |  ---  |                             x"
line6 ="X             /        \\             \\_____/                              x"
line7 ="X            /  |.--. | \\            --     --                            x"
line8 ="X           |   |     |  |          / |    |  \\                           x"
line9 ="X               |  0  |         ----  |    |   |                          x"
line10 ="X               |     |               |    |   |                          x"
line11 ="X              / '---'\\               |____|                              x"
line12 ="X             |        |              /     |                             x"
  
  gui(antwoord,"je probeert aantevallen maar het monster ontwijkt je, Wat doe je nu?")
  let quest3 = ("je probeert aantevallen maar het monster ontwijkt je, Wat doe je nu?")
  let vraag3 = ("a: attack b: flee")
  gui(quest3, vraag3)

  //const antwoord = rs.keyIn('> ', { limit: [ 'a', 'b' ] })
  if (antwoord === 'a') {GameOver();
gui(antwoord, "het monster zag het aankomen en heeft je opgegeten")


}
GameOver();
         gui(antwoord, "Je probeert wegterennen maar het monster is te snel")

}
//gui(quest1,vraag1);

function naarKamer()
{
         line1 ="X                                                    _____                x"
         line2 ="X                        _______________________    /     \\               x"
         line3 ="X                       /      /      /        /|   | 0  0 |              x"
         line4 ="X                      /      /______/        / |  <|   3  |>             x"
         line5 ="X       1             /                      /  |   | ---- |              x"
         line6 ="X      [0]           /----------------------/   |    \\____/               x"
         line7 ="X       Y           /                      /    |   --      --            x"
         line8 ="X      _|_         /                      /     |  /  |    |  \\           x"
         line9 ="X     |   |       /                      /      |  |  |    |   |          x"
      line10 ="X     | @ |      /                      /       |  |  |    |   |          x"
      line11 ="X     |   |     /                      /        |     |____|              x"
      line12 ="X     \\---/     -----------------------|        |    /  |  |              x"
         gui(antwoord, "Je rent zo snel mogelijk naar je kamer en doet de deur opslot Wat doe je nu?")
         let quest4 = ("Je rent zo snel mogelijk naar je kamer en doet de deur opslot Wat doe je nu")
         let vraag4 = ("a: get weapons b: hide")
         gui(quest4, vraag4)


         if (antwoord === 'a'){
         {
            victory();
         
         gui ("antwoord, je pakt een pistool en schiet het monster dood!!!! het is je moeder:(","")
         process.exit();
         }
      }
      if (antwoord === "b")
            GameOver();
         gui ("antwoord, Je verstopt je onder het bed maar het monster vind je en eet je op :(","")
         process.exit();

      }
 
start();