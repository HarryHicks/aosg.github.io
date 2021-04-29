var rumors = ["No silent people", "No multiparts", "Kragnos revealed", "3e revealed", "more BR books", "BoC gets Kragnos", "Sylvaneth gets \nKragnos", "More sylvaneth \nrevealed", "More than two RE are \nAoS-maingame", "no rumor enginge gets solved", "Green idiots gets nothing", "Green idiots gets Kragnos", "Stormcast gets a new centerpiece", "Another faction \njoins The Siege of Excelsis", "New faction revealed", "CoS gets a little \nbit unsouped", "New GHB without LoA", "New sidegame \ngets revealed", "Cursed City is \nbanned in chat", "Cursed City does not get addressed", "More Lumineth \nrevealed", "ToW for last day", "No new dragon for soulblight", 'A faction gets a \n"dragon"', "new battlebox with two new Heroes", "Nurgle reveal"]

function setup() {
  createCanvas(700, 700);
  shuffle1(rumors)
  console.log(shuffle1(rumors))
  button1 = createButton('Generate new board');
  button1.position(725, 350);
  button1.mousePressed(setup);
  button2 = createButton('Save board as jpg');
  button2.position(725, 370);
  button2.mousePressed(saveAsJPG);
}

function saveAsJPG(){
  saveCanvas('Bingo', 'jpg');
}

function draw() {
  background(220);
  var index = 0
  for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
      rect(i*140,j*140,140,140)
      if(j == 2 && i == 2){
        text("Free: More than \ntwo RE are for \nUnderworlds/\nWarcry", 300, 300, 100, 100);
        textAlign(CENTER, CENTER);
      }
      else{
        text(rumors[index], i*140+20, j*140+20, 100, 100)
        textAlign(CENTER, CENTER);
      }
      index++;
    }
  }
  
}

function shuffle1(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
