var weapons = {
    "onehanded" : [
      {
        "name" : "Sword",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 3,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Axe",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 3,
        "rend" : -1,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Hammer",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 3,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Spear",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 2,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Unarmed Strike",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 1,
        "attacks" : 4,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Flail",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 3,
        "attacks" : 2,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Improvised Weapon",
        "type" : "melee",
        "onehanded" : true,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 0
      },
      {
        "name" : "Handbow",
        "type" : "missile",
        "onehanded" : true,
        "random" : false,
        "range" : 9,
        "attacks" : 2,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 1,
        "cost" : 1
      }
      
    ],
    "twohanded" : [
      {
        "name" : "Greatsword",
        "type" : "melee",
        "onehanded" : false,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 3,
        "wound" : 3,
        "rend" : -1,
        "damage" : 2,
        "cost" : 2
      },
      {
        "name" : "Great Axe",
        "type" : "melee",
        "onehanded" : false,
        "random" : false,
        "range" : 1,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 2,
        "rend" : -2,
        "damage" : 2,
        "cost" : 2
      },
      {
        "name" : "Grandhammer",
        "type" : "melee",
        "onehanded" : false,
        "random" : false,
        "range" : 1,
        "attacks" : 2,
        "hit" : 4,
        "wound" : 2,
        "rend" : -2,
        "damage" : 3,
        "cost" : 2
      },
      {
        "name" : "Great Spear",
        "type" : "melee",
        "onehanded" : false,
        "random" : false,
        "range" : 2,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 3,
        "rend" : -1,
        "damage" : 2,
        "cost" : 2
      },
      {
        "name" : "Mage's staff",
        "type" : "melee",
        "onehanded" : false,
        "random" : true,
        "range" : 1,
        "attacks" : 3,
        "hit" : 4,
        "wound" : 3,
        "rend" : -1,
        "damage" : "D3",
        "cost" : 1
      },
      {
        "name" : "Scythe",
        "type" : "melee",
        "onehanded" : false,
        "random" : false,
        "range" : 2,
        "attacks" : 4,
        "hit" : 4,
        "wound" : 4,
        "rend" : -1,
        "damage" : 1,
        "cost" : 1
      },
      {
        "name" : "Bow",
        "type" : "missile",
        "onehanded" : false,
        "random" : false,
        "range" : 18,
        "attacks" : 2,
        "hit" : 4,
        "wound" : 4,
        "rend" : 0,
        "damage" : 2,
        "cost" : 2
      },
    ],
    "shield" : {
      "name" : "Shield",
      "cost" : 2
    },
    "none" : {
      "name" : "None",
      "cost" : 0
  }
}

var companionWeapons = {
  "Small Claws" : {
    "name" : "Small Claws",
    "type" : "melee",
    "random" : false,
    "range" : 1,
    "attacks" : 2,
    "hit" : 5,
    "wound" : 5,
    "rend" : 0,
    "damage" : 1
  },
  "Small Maw" : {
    "name" : "Small Maw",
    "type" : "melee",
    "random" : true,
    "range" : 1,
    "attacks" : 1,
    "hit" : 4,
    "wound" : 3,
    "rend" : -1,
    "damage" : "D3"
  },
  "Medium Claws" : {
    "name" : "Medium Claws",
    "type" : "melee",
    "random" : false,
    "range" : 1,
    "attacks" : 2,
    "hit" : 5,
    "wound" : 5,
    "rend" : 0,
    "damage" : 1
  },
  "Medium Maw" : {
    "name" : "Medium Maw",
    "type" : "melee",
    "random" : true,
    "range" : 1,
    "attacks" : 1,
    "hit" : 4,
    "wound" : 3,
    "rend" : -1,
    "damage" : "D3"
  },
    "Large Claws" : {
    "name" : "Large Claws",
    "type" : "melee",
    "random" : false,
    "range" : 2,
    "attacks" : "*",
    "hit" : 4,
    "wound" : 3,
    "rend" : -1,
    "damage" : 2
  },
  "Large Maw" : {
    "name" : "Large Maw",
    "type" : "melee",
    "random" : false,
    "range" : 2,
    "attacks" : 2,
    "hit" : 4,
    "wound" : 3,
    "rend" : -1,
    "damage" : "*"
  }
}