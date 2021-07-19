var companions = [
  {
    "name" : "MINOR",
    "restrictions" : ["ABHORRANT", "COURTIER", "MORTISAN", "LIEGE"],
    "weapons" : ["Small Claws", "Small Maw"],
    "table" : false,
    "effect" : "Add 1 to your hero's Wounds characteristic.",
    "wounds" : 1,
    "move" : 0,
    "cost" : 6,
    "keywords" : []
  },
  {
    "name" : "UNDEAD MINOR",
    "restrictions" : ["LIEGE-KAVALOS"],
    "weapons" : ["Small Claws", "Small Maw"],
    "table" : false,
    "effect" : "Add 1 to your hero's Wounds characteristic.",
    "wounds" : 1,
    "move" : 0,
    "cost" : 4,
    "keywords" : []
  },
  {
    "name" : "MOUNTED",
    "restrictions" : ["BULLGOR", "DRAGON OGOR", "GREATER DAEMON", "ABHORRANT", "COURTIER", "MORTISAN", "LIEGE"],
    "weapons" : ["Medium Claws", "Medium Maw"],
    "table" : false,
    "effect" : "Add 2 to your hero's Wounds characteristic. Change your hero's Move characteristic to 8" + '"',
    "wounds" : 2,
    "move" : 8,
    "cost" : 8,
    "keywords" : []
  },
  {
    "name" : "UNDEAD MOUNTED",
    "restrictions" : ["BULLGOR", "DRAGON OGOR", "GREATER DAEMON"],
    "weapons" : ["Medium Claws", "Medium Maw"],
    "table" : false,
    "effect" : "Add 2 to your hero's Wounds characteristic. Change your hero's Move characteristic to 8" + '"',
    "wounds" : 2,
    "move" : 8,
    "cost" : 6,
    "keywords" : []
  },
  { 
    "name" : "GARGANTUAN",
    "restrictions" : ["BULLGOR", "DRAGON OGOR", "GREATER DAEMON", "LIEGE-KAVALOS"],
    "weapons" : ["Large Claws", "Large Maw"],
    "table" : true,
    "effect" : "Add 8 to your hero's Wounds characteristic. Change your hero's Move characteristic to *",
    "wounds" : 8,
    "move" : "*",
    "cost" : 15,
    "keywords" : ["MONSTER"]
  },
  {
    "name" : "None",
    "restrictions" : ["LIEGE-KAVALOS"],
    "effect" : "",
    "cost" : 0
  }
]
