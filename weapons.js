var weapons = {
  "standard" : true,
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
  "shields" : [
    {
    "name" : "Shield",
    "cost" : 2
    }
  ],
  "none" : {
    "name" : "None",
    "cost" : 0
  }
}

var courtWeapons = {
  "standard" : false,
  "onehanded" : [
    {
      "name" : "Bone Club",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 1,
      "attacks" : 3,
      "hit" : 4,
      "wound" : 3,
      "rend" : 0,
      "damage" : 2,
      "cost" : 1
    },
    {
      "name" : "Bloodied Fangs",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 1,
      "attacks" : 1,
      "hit" : 4,
      "wound" : 3,
      "rend" : -1,
      "damage" : 3,
      "cost" : 1
    },
    {
      "name" : "Barrow Blade",
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
      "name" : "Decrepit Spear",
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
      "name" : "Filthy Talons",
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
    }
  ],
  "twohanded" : [
    {
      "name" : "Bone Clubs",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 6,
      "hit" : 4,
      "wound" : 3,
      "rend" : 0,
      "damage" : 2,
      "cost" : 3
    },
    {
      "name" : "More Bloodied Fangs",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 2,
      "hit" : 4,
      "wound" : 3,
      "rend" : -1,
      "damage" : 3,
      "cost" : 3
    },
    {
      "name" : "Barrow Blades",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 6,
      "hit" : 3,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 3
    },
    {
      "name" : "Decrepit Spears",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 2,
      "attacks" : 6,
      "hit" : 4,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 3
    },
    {
      "name" : "More Filthy Talons",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 8,
      "hit" : 4,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 3
    },
    {
      "name" : "Massive Bone Club",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 3,
      "hit" : 4,
      "wound" : 3,
      "rend" : -1,
      "damage" : 3,
      "cost" : 2
    },
    {
      "name" : "Rusty Halberd",
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
      "name" : "Ancient Great Sword",
      "type" : "melee",
      "onehanded" : false,
      "random" : true,
      "range" : 1,
      "attacks" : 3,
      "hit" : 3,
      "wound" : 3,
      "rend" : -1,
      "damage" : 2,
      "cost" : 2
    }
  ],
  "shields" : [
    {
    "name" : "Shield",
    "cost" : 2
    }
  ],
  "none" : {
    "name" : "None",
    "cost" : 0
  }
}

var ossiarchWeapons = {
  "standard" : false,
  "onehanded" : [
    {
      "name" : "Spirit Dagger",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 1,
      "attacks" : 3,
      "hit" : 4,
      "wound" : 4,
      "rend" : -1,
      "damage" : 1,
      "cost" : 1
    },
    {
      "name" : "Nadirite Blade",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 1,
      "attacks" : 3,
      "hit" : 3,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 2
    },
    {
      "name" : "Dread Falchion",
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
      "name" : "Nadirite Spear",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 2,
      "attacks" : 3,
      "hit" : 4,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 2
    },
    {
      "name" : "Ossified Talon",
      "type" : "melee",
      "onehanded" : true,
      "random" : false,
      "range" : 1,
      "attacks" : 2,
      "hit" : 4,
      "wound" : 4,
      "rend" : -1,
      "damage" : 1,
      "cost" : 0
    }
  ],
  "twohanded" : [
    {
      "name" : "Spirit Daggers",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 6,
      "hit" : 4,
      "wound" : 4,
      "rend" : -1,
      "damage" : 1,
      "cost" : 3
    },
    {
      "name" : "Nadirite Blades",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 6,
      "hit" : 3,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 5
    },
    {
      "name" : "Dread Falchions",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 6,
      "hit" : 4,
      "wound" : 3,
      "rend" : -1,
      "damage" : 1,
      "cost" : 3
    },
    {
      "name" : "Nadirite Spears",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 2,
      "attacks" : 6,
      "hit" : 4,
      "wound" : 4,
      "rend" : 0,
      "damage" : 1,
      "cost" : 5
    },
    {
      "name" : "Ossified Talons",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 4,
      "hit" : 4,
      "wound" : 4,
      "rend" : -1,
      "damage" : 1,
      "cost" : 1
    },
    {
      "name" : "Soulcleaver Greatblade",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 1,
      "attacks" : 3,
      "hit" : 3,
      "wound" : 3,
      "rend" : -2,
      "damage" : 2,
      "cost" : 3
    },
    {
      "name" : "Soul Scythe",
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
      "name" : "Soul Staff",
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
      "name" : "Dread Halberd",
      "type" : "melee",
      "onehanded" : false,
      "random" : false,
      "range" : 2,
      "attacks" : 3,
      "hit" : 4,
      "wound" : 3,
      "rend" : -2,
      "damage" : 2,
      "cost" : 2
    }
  ],
  "shields" : [
    {
    "name" : "Shield",
    "cost" : 2
    }
  ],
  "none" : {
    "name" : "None",
    "cost" : 0
  }
}

var spiritHostWeapons = {
  "name" : "Spirit Host Weapons",
  "type" : "melee",
  "range" : 1,
  "attacks" : 2,
  "hit" : 5,
  "wound" : 5,
  "rend" : 0,
  "damage" : 1,
  "cost" : 0
}
var spiritHostWeaponsAux = Object.assign({}, spiritHostWeapons);


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