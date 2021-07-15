  var leftHeight = 160;
  var rightHeight = 85;
  var gold = '#91874b';
  var ancestry;
  var baseStats = {
    "move" : 0,
    "wounds" : 0,
    "save" : 0,
    "bravery" : 0
  }
  var factionKeyword = "";
  var archetype;
  var archetypeOption1;
  var archetypeOption2;
  var firstWeapon;
  var secondWeapon;
  var firstWeaponaux;
  var secondWeaponaux;
  var companion;
  var companionWounds = 0;
  var shieldBonus = 0;
  var companionWeaponsaux = [];
  var charenhanceaux = charEnhancements;
  var companionenhanceaux = companionEnhancements;
  var meleeWeaponsHeight;
  var missileWeaponsHeight;

/*----------------------HELP FUNCTIONS--------------------------*/
function keywordsString(list){
  keywordList = "";
  for(var i = 0; i < list.length; i++) {
    keywordList = keywordList + list[i] + ',';
  }
  return keywordList + "HERO";
}

function checkResetArchetype(){
  if(archetype != null && restrictionsApply()){
    resetArchetype();
  }
  else{
    document.getElementById("archetype-dropdown").innerHTML = '';
  }
}

function checkResetCompanion(){
  if(companion != null && anyElementInList(ancestry.keywords, companion.restrictions)){
    resetCompanion();
  }
  else{
    document.getElementById("companion-dropdown").innerHTML = '';
  }
  
}

function restrictionsApply(){
  if(anyElementInList(archetype.restrictions, ancestry.keywords) || anyElementInList(archetype.restrictions, [factionKeyword.toUpperCase()])){
    return true;
  }
  return false;
}

function addElement(element, id, func, parameter) {
  var pnode = document.createElement("p");
  var textnode = document.createTextNode(element);
  pnode.appendChild(textnode);
  document.getElementById(id).appendChild(pnode);
  pnode.onclick = function(){func(parameter)};
}

function addAbilityElement(ability, id, list){
  var divnode = document.createElement("div");
  var divnode2 = document.createElement("div");
  var divnode3 = document.createElement("div");
  divnode.className = "ability";
  var textnode = document.createTextNode(ability.name + ": " + ability.effect);
  var checknode = document.createElement("input");
  checknode.type = "checkbox";
  divnode2.className = "abilitybox";
  divnode3.className = "textbox";
  if(ability.checked == true){
    checknode.checked = true;
  }
  checknode.onclick = function(){setCheck(ability.name, list)};
  divnode3.appendChild(textnode);
  divnode2.appendChild(checknode);
  divnode.appendChild(divnode2);
  divnode.appendChild(divnode3);
  document.getElementById(id).appendChild(divnode);
}

function addEnhancementElement(enhancement, id){
  var divnode = document.createElement("div");
  divnode.className = "enhancement";

  //text
  var divnode2 = document.createElement("div");
  divnode2.className = "textbox";
  var textnode = document.createTextNode(enhancement.name + ": " + enhancement.effect);
  divnode2.appendChild(textnode);
  divnode.appendChild(divnode2);

  //times taken
  divnode2 = document.createElement("div");
  divnode2.id = enhancement.name + " takenbox";
  divnode2.className = " takenbox";
  var textnode = document.createTextNode("taken: " + enhancement.taken);
  divnode2.appendChild(textnode);
  divnode.appendChild(divnode2);

  //enhancementboxes
  divnode2 = document.createElement("div");
  divnode2.className = "enhancementboxes";

  //options and buttons
  if(id == "companionenhancements" && enhancement.weapon == "all"){
    for(var i = 0; i < companionWeaponsaux.length; i++){
      let weapon = companionWeaponsaux[i];
      if(weapon.random == false || weapon.stat != "damage"){
        divnode2.appendChild(addEnhancementBox(enhancement, weapon, companionWeapons[weapon.name]));
      }
    }
  }
  else if(id == "companionenhancements"){
    for(var i = 0; i < companionWeaponsaux.length; i++){
      let weapon = companionWeaponsaux[i];
      if((weapon.random == false || weapon.stat != "damage") && companionWeaponsaux[i].name.includes(enhancement.weapon)){
        divnode2.appendChild(addEnhancementBox(enhancement, weapon, companionWeapons[weapon.name]));
      }
    }
  }
  else if(enhancement.weapon == "all"){
    if(firstWeapon != null){
      divnode2.appendChild(addEnhancementBox(enhancement, firstWeapon, firstWeaponaux));
    }
    if(secondWeapon != null && secondWeapon.name != "None" && secondWeapon.name != "Shield"){
      divnode2.appendChild(addEnhancementBox(enhancement, secondWeapon, secondWeaponaux));
    }
  }
  else{
    divnode2.appendChild(addEnhancementBox(enhancement, baseStats, ancestry));
  }
  divnode.appendChild(divnode2);
  document.getElementById(id).appendChild(divnode);
}

function addEnhancementBox(enhancement, obj, obj2){
  var divnode = document.createElement("div");
  divnode.className = "enhancementbox";

  //text
  divnode2 = document.createElement("div");
  divnode2.className = "statbox";
  if(obj.name != null){
    textnode = document.createTextNode(obj.name);
  }
  else{
    textnode = document.createTextNode("");
  }
  divnode2.appendChild(textnode);
  divnode.appendChild(divnode2);

  //buttons
  divnode2 = document.createElement("input");
  divnode2.type = "button";
  divnode2.value = "-";
  divnode2.onclick = function(){subtraction(enhancement, obj, obj2)}
  divnode.appendChild(divnode2);

  divnode2 = document.createElement("input");
  divnode2.type = "button";
  divnode2.value = "+";
  divnode2.onclick = function(){addition(enhancement, obj)}
  divnode.appendChild(divnode2);

  return divnode;
}

function addition(enhancement, obj){
  let o = obj[enhancement.stat];
  if(enhancement.taken < enhancement.max && enhancement.limit - o != 0){
    enhancement.taken += 1;
    if(typeof o == "string"){
      obj[enhancement.stat] = "*+" + enhancement.taken* enhancement.amount ;
    }
    else {
      obj[enhancement.stat] += enhancement.amount;
    }
  }
}

function subtraction(enhancement, obj, obj2){
  let o = obj[enhancement.stat];
  if(enhancement.taken > 0){
    if(typeof o != "string"){
      if(obj[enhancement.stat] - obj2[enhancement.stat] != 0){
        enhancement.taken -= 1;
        obj[enhancement.stat] -= enhancement.amount;
      }
    }
    else{
      enhancement.taken -= 1;
      if(enhancement.taken == 0){
        obj[enhancement.stat] = "*";
      }
      else{
        obj[enhancement.stat] = "*+" + enhancement.taken * enhancement.amount;
      }
    }
  }
}

function anyElementInList(list1, list2){
  for(var i = 0; i < list1.length; i++){
    if(list2.includes(list1[i])){
      return true;
    }
  }
}

function splitAbilities(list){
  leftList = [];
  middleList = [];
  rightList = [];
  if(archetypeOption1 != null) {
    leftList.push(archetypeOption1);
  }
  for(var i = 0; i < list.length; i++){
    if(i % 3 == 0){
      middleList.push(list[i]);
    }
    else if(i % 3 == 1){
      rightList.push(list[i]);
    }
    else{
      leftList.push(list[i]);
    }
  }
  return[leftList, middleList, rightList];
}

function setCheck(name, list){
  for(var i = 0; i < list.length; i++){
    if(name == list[i].name){
      list[i].checked = !list[i].checked;
    }
  }
}

function setVisible(id){
  var element = document.getElementById(id);
  var biv = document.getElementById(id+"button").value;
  if(biv == "+"){
    document.getElementById(id+"button").value = "-";
    for (let i = 3; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if(node.nodeName == "DIV"){
        node.style.display = "block";
      }
    }
  }
  else{
    document.getElementById(id+"button").value = "+";
    for (let i = 3; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if(node.nodeName == "DIV"){
        node.style.display = "none";
      }
    }
  }
}

function calculateEnhancements(list){
  let cost = 0;
  for (let i = 0; i < list.length; i ++) {
    cost += list[i].taken * list[i].cost;
  }
  return cost;
}

function saveWarscroll(){
  var name = document.getElementById("name");
  if(name.value != ""){
    saveCanvas(name.value, "jpg");
  }
  else{
    saveCanvas("AoA-Hero warscroll", "jpg");
  }
}

function updateTimesTaken(list){
  for (let i = 0; i < list.length; i++) {
    document.getElementById(list[i].name + " takenbox").innerHTML = "taken: " + list[i].taken;
  }
}

function mountWeaponsString(c){
  let s = "";
  if(c.weapons.length > 1){
    s+= c.weapons[0];
    for(let i = 1; i < c.weapons - 1; i++){
      s+= ", " + c.weapons[i];
    }
    s+= " and " + c.weapons[c.weapons.length - 1];
    return s;
  }
  else{
    return c.weapons[0];
  }

}
/*----------------------DRAW FUNCTIONS--------------------------*/
function drawAbilities(list, startPoint){
  var lists = splitAbilities(list);
  var leftList = lists[0];
  var middleList = lists[1];
  var rightList = lists[2];
  leftHeight = 160;
  var h1;
  var w1 = 160;
  for (var i = 0; i < leftList.length; i++){
    if(archetypeOption1 != null && i == 0){
      if(archetypeOption1.name == "COMMANDER"){
        h1 = 90;
      }
      else if(archetypeOption1.name == "ACOLYTE"){
        h1 = 220;
      }
      else{
        h1 = 250;
      }
      fill('white');
      stroke(color(gold));
      rect(5, 160, w1, h1);
      noStroke();
      fill('black');
      textSize(13);
      text(leftList[i].name + ': ' + leftList[i].effect, 5, 162, w1, h1);
      leftHeight +=  h1;
    }
    else {
      fill('white');
      stroke(color(gold));
      rect(5, leftHeight + 5, w1, 200);
      noStroke();
      fill('black');
      textSize(13);
      text(leftList[i].name + ': ' + leftList[i].effect, 5, leftHeight + 7, w1, 200);
      leftHeight += 205;
    }
  }
  leftHeight -= 10;
  rightHeight += (middleList.length)*180;
  drawAbilitiesAux(middleList, 170, startPoint);
  drawAbilitiesAux(rightList, 395, startPoint);
}

function drawAbilitiesAux(list, w, h){
  var h1 = 170;
  var w1 = 220;
  for (var i = 0; i < list.length; i++){
    fill('white');
    stroke(color(gold));
    rect(w, h+(h1+5)*i, w1, h1);
    noStroke();
    fill('black');
    text(list[i].name + ': ' + list[i].effect, w, h+2+(h1+5)*i, w1, h1);
  }
}

function drawBaseStats(stats){
  text(stats.move + '"', 65, 55);
  let wounds = stats.wounds + companionWounds;
  if(wounds >= 10){
      text(wounds, 33, 85);
    }
    else{
    text(wounds, 40, 85);
    }
  text(stats.save + '+', 92, 85);
    if(stats.bravery >= 10){
      text(stats.bravery, 60, 115);
    }
    else{
    text(stats.bravery, 67, 115);
    }
}

function drawKeywords(keywords){
  var w1 = width/2;
  var h1 = height - 15;
  var h2 = h1 + 3;
  fill('white');
  stroke(color(gold));
  rectMode(CENTER);
  rect(w1, h1, width - 10, 20);
  rectMode(CORNER);
  noStroke();
  fill('black');
  textAlign(CENTER);
  text(keywords, w1, h2);
  textAlign(LEFT);
}

function drawTables(list, startPoint){
  for(var i = 0; i < list.length; i++){
    drawTable(list[i], startPoint + 130 * i);
  }
}

function drawTable(table, startPoint){
    stroke(color('black'));
    fill(color(gold));
    rect(178, startPoint - 35, 425, 20);
    noStroke();
    fill(color('white'));
    textSize(13);
    for(var i = 0; i < table.stats.length; i++){
      text(table.stats[i], 220 + 100 * i, startPoint - 20);
    }
    fill(color('black'));
    for (i = 0; i < table.suffered.length; i++){
      noFill();
      if(i %2 == 0) {
        fill(color('white'));
      }
      stroke(color('black'));
      rect(178, startPoint - 15 + 20*i, 425, 20);
      noStroke();
      let n = startPoint + 20*i;
      fill(color('black'));
      for (let j = 0; j < table.stats.length; j++) {
        text(table[table.stats[j]][i], 230 + 100 * j , n);
        
      }
    }
}

function drawWeapons(weapons, type, startPoint){
  stroke(color('black'));
  fill(color(gold));
  rect(178, startPoint - 35, 425, 20);
  noStroke();
  fill(color('white'));
  textSize(13);
  text(type, 180, startPoint - 20);
  text("Range", 305, startPoint - 20);
  text("Attacks", 350, startPoint - 20);
  text("To Hit", 400, startPoint - 20);
  text("To Wound", 440, startPoint- 20);
  text("Rend", 510, startPoint - 20);
  text("Damage", 550, startPoint - 20);
  fill(color('black'));
  for (var i = 0; i < weapons.length; i++){
    noFill();
    if(i %2 == 0) {
      fill(color('white'));
    }
    stroke(color('black'));
    rect(178, startPoint - 15 + 20*i, 425, 20);
    noStroke();
    let m = weapons[i];
    let n = startPoint + 20*i;
    fill(color('black'));
    text(m.name, 200 , n);
    text(m.range + '"', 320, n);
    text(m.attacks, 365, n);
    text(m.hit+ '+', 415, n);
    text(m.wound+ '+', 470, n);
    text(m.rend, 525, n);
    text(m.damage, 565, n);
  }
}

function drawPointCost(cost, list){
  var pointCost = cost + calculateEnhancements(list);
  fill("white");
  stroke(gold);
  circle(599, 21, 40);
  textSize(25);
  noStroke();
  fill("black");
  if(pointCost > 9){
    text(pointCost, 585, 29);
  }
  else{
    text(pointCost, 593, 29);
  }
}

function draw() {
  var abilityList = [];
  var allWeapons = [];
  var meleeWeapons = [];
  var missileWeapons = [];
  var timesTakenList = [];
  var pointCost = 0;
  var keywords = [];
  var tableList = [];
  if (leftHeight < rightHeight){
    resizeCanvas(width, rightHeight + 40);
  }
  else{
    resizeCanvas(width, leftHeight + 40);
  }
  background(240);
  image(img, 0,0, img.width / 2, img.height / 2);
  rightHeight = 85;
  textSize(25);

  if(ancestry != null){
    if(ancestry.name == "MALIGNANT"){
      let ethereal = {
        "name" : "Ethereal",
        "cost" : 0,
        "checked" : false,
        "effect" : "Ignore modifiers (positive or negative) when making save rolls for attacks that target this model."
      };
      let fly = {
        "name" : "Fly",
        "cost" : 0,
        "checked" : false,
        "effect" : "This model can fly."
      }
      abilityList.push(ethereal);
      abilityList.push(fly);
    }
    keywords.push.apply(keywords, ancestry.keywords);
    pointCost = ancestry.cost;
  }
  if(factionKeyword != ""){
    keywords.push(factionKeyword);
  }
  if (firstWeapon != null){
    allWeapons.push(firstWeapon);
    pointCost += firstWeapon.cost;
  }

  if (secondWeapon != null){
    if(secondWeapon.name != "Shield" && secondWeapon.name != "None"){
      allWeapons.push(secondWeapon);
    }
    pointCost += secondWeapon.cost;
  }
  if(archetype != null){
    keywords.push.apply(keywords, archetype.keywords);
  }
  if(archetypeOption2 != null) {
    abilityList.push(archetypeOption2);
  }

  if(companion != null){
    pointCost += companion.cost;
    if(companion.name != "None"){
      if(companion.table == true){
        tableList.push(tables[companion.name]);
      }
      let mount = {
        "name" : "Mount",
        "cost" : 0,
        "checked" : false,
        "effect" : "This model's mount attacks with its " + mountWeaponsString(companion)
      };
      abilityList.push(mount);
      keywords.push.apply(keywords, companion.keywords);
      allWeapons.push.apply(allWeapons, companionWeaponsaux);
      let ca = companionAbilities;
      for(var i = 0; i < ca.length; i++){
        if(ca[i].checked == true){
          abilityList.push(ca[i]);
          pointCost += ca[i].cost;
        }
      }
      timesTakenList.push.apply(timesTakenList, companionEnhancements);
    }
  }
  for (let i = 0; i < abilities.length; i++) {
    if(abilities[i].checked == true){
      if(abilities[i].name == "Battle Standard Bearer"){
        keywords.push("TOTEM");
      }
      abilityList.push(abilities[i]);
    }
  }
  if(ancestry != null && firstWeapon != null && (firstWeapon.onehanded == false || secondWeapon != null)){
    timesTakenList.push.apply(timesTakenList, charEnhancements);
  }

  updateTimesTaken(timesTakenList);
  drawBaseStats(baseStats);
  textSize(10);
  drawKeywords(keywordsString(keywords));
  for(var i = 0; i < allWeapons.length; i++){
    let weapon = allWeapons[i];
    if(weapon.type == "melee"){
      meleeWeapons.push(weapon);
    }
    else{
      missileWeapons.push(weapon);
    }
  }
  if (meleeWeapons.length > 0){
    drawWeapons(meleeWeapons, "MELEE WEAPONS", 120);
    rightHeight += 20*(meleeWeapons.length + 1);
  }
  if (missileWeapons.length > 0){
  drawWeapons(missileWeapons, "MISSILE WEAPONS",120 + 50*meleeWeapons.length);
    rightHeight += 5+20*(missileWeapons.length + 1);
  }
  if(tableList.length > 0){
    drawTables(tableList, rightHeight + 50);
    rightHeight += 130 * tableList.length;
  }
  drawAbilities(abilityList, rightHeight + 15);
  drawPointCost(pointCost, timesTakenList);
  var ev = document.getElementById("name").value;
  if(ev != "" && ev.length < 26){
    textAlign(CENTER);
    textSize(30);
    text(ev, 365, 30);
    textAlign(LEFT);
  }
  ev = document.getElementById("title").value;
  if(ev != "" && ev.length < 37){
    textAlign(CENTER);
    textSize(20);
    text(ev, 365, 55);
    textAlign(LEFT);
  }

}

/*----------------------ADD FUNCTIONS--------------------------*/
function setup() {
  createCanvas(620, 600);
  img = loadImage('values.png');
  document.getElementById("faction").style.display = "none";
  document.getElementById("weapon2").style.display = "none";
  document.getElementById("archetypeoption").style.display = "none";
  for(var j = 0; j < 0; j++)
  {
    abilityList.push(abilities[j]);
  }
  for(var i = 0; i < ancestries.length; i++)
    {
      addElement(ancestries[i].name, "ancestry-dropdown", setAncestry, ancestries[i]);
    }
  addFirstWeapon();
  addArchetype();
  addCompanion();
  addCharacterExtras();
  document.getElementById("savebutton").onclick = function(){saveWarscroll()};
}

function addFaction(){
  document.getElementById("faction").style.display = "inline-block";
    for(var i = 0; i < ancestry.armykeywords.length; i++)
    {
      addElement(ancestry.armykeywords[i], "faction-dropdown", setFaction, ancestry.armykeywords[i]);
    }
}

function addFirstWeapon(){
  document.getElementById("weapon1").style.display = "inline-block";
  for(var i = 0; i < weapons.onehanded.length; i++)
    {
      addElement(weapons.onehanded[i].name , "weapon1-dropdown", setFirstWeapon, weapons.onehanded[i]);
    }
  for(i = 0; i < weapons.twohanded.length; i++)
    {
      addElement(weapons.twohanded[i].name, "weapon1-dropdown", setFirstWeapon, weapons.twohanded[i]);
    }
}

function addSecondWeapon(){
  if(firstWeapon.onehanded || firstWeapon.name == "Bow"){
    document.getElementById("weapon2").style.display = "inline-block";
  for(var i = 0; i < weapons.onehanded.length; i++)
    {
      if(weapons.onehanded[i].type != "missile"){
        addElement(weapons.onehanded[i].name , "weapon2-dropdown", setSecondWeapon, weapons.onehanded[i]);
      }

    }
    if((ancestry == null || !ancestry.keywords.includes("MALIGNANT")) && firstWeapon.type != "missile"){
      addElement(weapons.shield.name , "weapon2-dropdown", setSecondWeapon, weapons.shield);
    }

    addElement(weapons.none.name , "weapon2-dropdown", setSecondWeapon, weapons.none);
  }
}

function addArchetype(){
  document.getElementById("archetype").style.display = "inline-block";
  var i = 0;
  if(ancestry == null){
    for(i = 0; i < archetypes.length; i++){
      addElement(archetypes[i].name, "archetype-dropdown", setArchetype, archetypes[i]);
    }
  }
  else {
    for(i = 0; i < archetypes.length; i++)
    {
      var restrictions = archetypes[i].restrictions;
      if(factionKeyword == "Clans Pestilens, Nurgle" && archetypes[i].name == "ACOLYTE"){
        addElement(archetypes[i].name, "archetype-dropdown", setArchetype, archetypes[i]);
      }
      if(!anyElementInList(restrictions, ancestry.keywords) && !anyElementInList(restrictions, [factionKeyword.toUpperCase()])){
          addElement(archetypes[i].name, "archetype-dropdown", setArchetype, archetypes[i]);
      }
    }
  }
}

function addArchetypeOption(){
  document.getElementById("archetypeoption").style.display = "inline-block";
  resetArchetypeOption();
  for(var i = 0; i < archetype.options.length; i++){
    addElement(archetype.options[i], "archetypeoption-dropdown", setArchetypeOption,  archetype.options[i]);
  }
}

function addCompanion(){
  for(var i = 0; i < companions.length; i++){
    if(!(ancestry != null && anyElementInList(ancestry.keywords, companions[i].restrictions))){
      addElement(companions[i].name, "companion-dropdown", setCompanion,  companions[i]);
    }
  }
}

function addCompanionExtras(){
  addCompanionAbilities();
  addCompanionEnhancements();
}

function addCompanionAbilities(){
  resetCompanionAbilities();
  var i;
  if(companion.name != "None"){
    for(i = 0; i < companionAbilities.length; i++){
      var ca = companionAbilities[i];
      if(!anyElementInList(ca.restrictions, companion.name)){
        if(ca.allowed.length == 0){
          addAbilityElement(ca, "companionabilities", companionAbilities);
        }
        else if(anyElementInList(ca.allowed, companion.name)){
          addAbilityElement(ca, "companionabilities", companionAbilities);
        }
        else{
          ca.checked = false;
        }
      }
    }
  }
  else{
    for(i = 0; i < companionAbilities.length; i++){
      companionAbilities[i].checked = false;
    }
  }
}

function addCompanionEnhancements(){
  resetCompanionEnhancements();
  if(companion.name != "None"){
    var ce = companionEnhancements;
    for (let i = 0; i < ce.length; i++) {
      addEnhancementElement(ce[i], "companionenhancements");
    }
  }
}

function addCharacterExtras(){
  addCharacterAbilities();
  addCharacterEnhancements();
}

function addCharacterAbilities(){
  resetCharacterAbilities();
  var i;
  for(i = 0; i < abilities.length; i++){
    var a = abilities[i];
    if(a.allowed.length == 0 || archetype == null){
      addAbilityElement(a, "characterabilities", abilities);
    }
    else if(archetype != null && anyElementInList(a.allowed, archetype.keywords)){
      addAbilityElement(a, "characterabilities", abilities);
    }
    else{
      a.checked = false;
    }
  }
}

function addCharacterEnhancements(){
  resetCharacterEnhancements();
  if(ancestry != null && firstWeapon != null && (firstWeapon.onehanded == false || secondWeapon != null)){
    baseStats.wounds += companionWounds;
    baseStats.save += shieldBonus;
    var ce = charEnhancements;
    for (let i = 0; i < ce.length; i++) {
      addEnhancementElement(ce[i], "characterenhancements");
    }
  }
}

/*----------------------SET FUNCTIONS--------------------------*/
function setAncestry(a) {
  ancestry = a;
  baseStats.move = a.move;
  baseStats.wounds = a.wounds;
  baseStats.save = a.save;
  baseStats.bravery = a.bravery;

  if(ancestry.keywords.includes("MALIGNANT") && firstWeapon != null){
    resetSecondWeapon();
    addSecondWeapon();
  }

  document.getElementById("ancestry-span").textContent = "1.1. " + ancestry.name;
  resetFaction();
  if(ancestry.armykeywords.length > 0) {
    addFaction();
  }
  checkResetArchetype();
  addArchetype();
  checkResetCompanion();
  addCompanion();
  addCharacterExtras();
}

function setFaction(word){
  document.getElementById("faction-span").textContent = "1.2. " + word;
  factionKeyword = word;
  checkResetArchetype();
  addArchetype();
}

function setFirstWeapon(weapon){
  firstWeapon = weapon;
  firstWeaponaux = Object.assign({}, weapon);
  document.getElementById("weapon1-span").textContent = "2.1. " + firstWeapon.name;
  resetSecondWeapon();
  addSecondWeapon();
  addCharacterEnhancements();
}

function setSecondWeapon(weapon){
  secondWeapon = weapon;
  if(secondWeaponaux != null && secondWeaponaux.name == "Shield"){
    shieldBonus += 1;
  }
  secondWeaponaux = weapon;
  if(secondWeapon.name == "Shield"){
    shieldBonus -= 1;
  }
  document.getElementById("weapon2-span").textContent = "2.2. " + secondWeapon.name;
  addCharacterEnhancements();
}

function setArchetype(a){
  archetype = a;
  document.getElementById("archetype-span").textContent = "3.1. " +archetype.name;
  archetypeOption1 = {
    "name" : archetype.name,
    "cost" : 0,
    "effect" : archetype.description
  }
  addArchetypeOption();
  addCharacterExtras();
}

function setArchetypeOption(option){
  archetypeOption2 = {
    "name" : option,
    "cost" : 0,
    "effect" : options[option]
  }
  document.getElementById("archetypeoption-span").textContent = "3.2. " +archetypeOption2.name;
}

function setCompanion(c){
  document.getElementById("companion-span").textContent = "4.1. " +c.name;
  companion = c;  
  companionWeaponsaux = [];
  if(companion.name != "None"){
    if(companion.move != 0){
      baseStats.move = companion.move;
    }
    companionWounds = companion.wounds;
    for(var i = 0; i < companion.weapons.length; i++){
      let weapon = companion.weapons[i];
      companionWeaponsaux.push(Object.assign({}, companionWeapons[weapon]));
    }
  }
  resetCompanionEnhancements();
  addCompanionExtras();
}
/*----------------------RESET FUNCTIONS--------------------------*/
function resetFaction(){
  factionKeyword = "";
  document.getElementById("faction-span").textContent = "1.2. Select Faction";
  document.getElementById("faction-dropdown").innerHTML = '';
  document.getElementById("faction").style.display = "none";
}

function resetSecondWeapon(){
  document.getElementById("weapon2-span").textContent = "2.2. Select Second Weapon";
  document.getElementById("weapon2-dropdown").innerHTML = '';
  document.getElementById("weapon2").style.display = "none";
  secondWeapon = null;
}

function resetArchetype(){
  archetype = null;
  archetypeOption1 = null;
  leftHeight = 160;
  document.getElementById("archetype-span").textContent = "3.1. Select Archetype";
  document.getElementById("archetype-dropdown").innerHTML = '';

  resetArchetypeOption();
}

function resetArchetypeOption(){
  archetypeOption2 = null;
  document.getElementById("archetypeoption-span").textContent = "3.2. Select Ability";
  document.getElementById("archetypeoption-dropdown").innerHTML = '';
}

function resetCompanion(){
  companion = null;
  document.getElementById("companion-span").textContent = "4.1. Select Bestial Companion";
  document.getElementById("companion-dropdown").innerHTML = '';
}

function resetCompanionAbilities(){
  var node = document.getElementById("companionabilities");
  node.innerHTML = '';
  if(companion != null && companion.name != "None"){
    var spannode = document.createElement("span");
    spannode.innerHTML = "4.2. Select Bestial Companion Abilities";
    node.appendChild(spannode);
  }
}

function resetCompanionEnhancements(){
  companionEnhancements = companionenhanceaux;
  var node = document.getElementById("companionenhancements");
  node.innerHTML = '';
  if(companion != null && companion.name != "None"){
    var spannode = document.createElement("span");
    spannode.innerHTML = "4.3. Select Bestial Companion Characteristic Enhancements";
    node.appendChild(spannode);
  }
  for (let i = 0; i < companionEnhancements.length; i++) {
    companionEnhancements[i].taken = 0;
  }

}

function resetCharacterAbilities(){
  var node = document.getElementById("characterabilities");
  node.innerHTML = '';
  var spannode = document.createElement("span");
  spannode.innerHTML = "5.1. Select Character Abilities";
  node.appendChild(spannode);
  
}

function resetCharacterEnhancements(){
  charEnhancements = charenhanceaux;
  var node = document.getElementById("characterenhancements");
  node.innerHTML = '';
  if(ancestry != null && firstWeapon != null && (firstWeapon.onehanded == false || secondWeapon != null)){
    var spannode = document.createElement("span");
    spannode.innerHTML = "5.2. Select Characteristic Enhancements";
    node.appendChild(spannode);
  }
  for (let i = 0; i < charEnhancements.length; i++) {
    charEnhancements[i].taken = 0;
  }
}