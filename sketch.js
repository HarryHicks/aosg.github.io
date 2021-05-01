var rumors = ['"This is great for a 40k kitbash"', "Model that is an obvious CC expansion is revealed", "Kragnos is Throgg/Throgg reveal", "Umbraneth/Malerion revealed", "New dwarf army revealed", "No silent people", "No multiparts", "Kragnos revealed", "3e revealed", "more BR books", "BoC gets Kragnos", "Sylvaneth gets \nKragnos", "More sylvaneth \nrevealed", "More than two RE are \nAoS-maingame", "no rumor engine gets solved", "Green idiots gets nothing", "Green idiots gets Kragnos", "Stormcast gets a new centerpiece", "Another faction \njoins The Siege of Excelsis", "New faction/race revealed", "CoS gets a little \nbit unsouped", "New GHB without LoA", "New sidegame \ngets revealed", "Cursed City is \nbanned in chat", "Cursed City does not get addressed", "More Lumineth \nrevealed", "ToW for last day", "No new dragon for soulblight", 'A faction gets a \n"dragon"', "new battlebox with two new Heroes", "Nurgle reveal"];

var tickboxes = [];

function Tickbox(rumor, xpos, ypos) {
  this.xpos =  xpos;
  this.ypos =  ypos;
  this.isChecked = false;
  this.rumor = rumor;
  var s = 140;
  this.display = function(){
    if(this.isChecked){
      fill(color('green'));
    }
    else {
      fill(color('white'));
    }
    rect(xpos, ypos, s, s);
    fill(color('black'));
    text(this.rumor, xpos+20, ypos+20, 100, 100);
    textAlign(CENTER, CENTER);
  }
}

function setup() {
  createCanvas(700, 700);
  shuffle1(rumors);
  button1 = createButton('Generate new board');
  button1.position(725, 350);
  button1.mousePressed(setup);
  button2 = createButton('Save board as jpg');
  button2.position(725, 370);
  button2.mousePressed(saveAsJPG);
  var index = 0
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if(i == 2 && j == 2) {
      tickboxes.push(new Tickbox("Free: More than \ntwo RE are for \nUnderworlds/\nWarcry", i*140, j*140))
      }
      else {
      tickboxes.push(new Tickbox(rumors[index], i*140, j*140));
      }
      index++;
    }
  }
}

function saveAsJPG(){
  saveCanvas('Bingo', 'jpg');
}

function mousePressed(){
  for (i = 0; i < tickboxes.length; i++) {
        var d = tickboxes[i].xpos < mouseX && mouseX < tickboxes[i].xpos+140 && tickboxes[i].ypos < mouseY && mouseY < tickboxes[i].ypos+140;
        if (d) {
      tickboxes[i].isChecked = !(tickboxes[i].isChecked);
    }
  }
}

function draw() {
  var index = 0
  for(i = 0; i < tickboxes.length; i++){
    tickboxes[i].display();
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
