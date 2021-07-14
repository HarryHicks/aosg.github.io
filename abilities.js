var abilities = 
    [
      {
        "name" : "Ethereal",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "Ignore modifiers (positive or negative) when making save rolls for attacks that target this model.",
      },
      {
        "name" : "Ward",
        "cost" : 3,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "Roll a dice each time a wound or mortal wound is allocated to this model. On a 6, that wound or mortal wound is negated."
      },
      {
        "name" : "Fly",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "This model can fly."
      },
      {
        "name" : "Frenzy",
        "cost" : 3,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "If the unmodified hit roll for an attack made with this model's melee weapons (not including mount weapons) is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit."
      },
      {
        "name" : "Regenerate",
        "cost" : 3,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "In your hero phase, you can roll a dice for this model. If you do so, on a 4+, heal up to D3 wounds allocated to this model."
      },
      {
        "name" : "Battle Standard Bearer",
        "cost" : 1,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "This model gains the TOTEM keyword.",
      },
      {
        "name" : "Inspiring",
        "cost" : 1,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "While friendly units are wholly within 12" +'"'+ " of this model, they can use this model's Bravery characteristic instead of their own. Increase the range of this ability to 18"+ '"' + " if this model is a TOTEM." 
      },
      {
        "name" : "Consummate Commander",
        "cost" : 5,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "If this model is part of your army, at the start of the first battle round, you receive 1 extra command point." 
      },
      {
        "name" : "Archmage",
        "cost" : 3,
        "checked" : false,
        "restrictions" : [],
        "allowed" : ["WIZARD"],
        "effect" : "Add 1 to casting and unbinding rolls for this model." 
      },
      {
        "name" : "Arch-priest",
        "cost" : 3,
        "checked" : false,
        "restrictions" : [],
        "allowed" : ["PRIEST"],
        "effect" : "Add 1 to prayer rolls for this model." 
      },
      {
        "name" : "Zealot",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "This model can run and still charge in the same turn." 
      },
      {
        "name" : "Decap",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "If the unmodified wound roll for an attack made with this model's melee weapons (not including mount weapons) is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage." 
      },
      {
        "name" : "Decapitating Strike",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "If the unmodified wound roll for an attack made with this model's melee weapons (not including mount weapons) is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage." 
      },
      {
        "name" : "Deadeye",
        "cost" : 4,
        "checked" : false,
        "restrictions" : [],
        "allowed" : [],
        "effect" : "If the unmodified hit roll for an attack made with this model's missile weapons (not including mount weapons) is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage." 
      }
    ]

var companionAbilities = [
  {
    "name" : "Winged Beast",
    "cost" : 4,
    "effect" : "This model can fly",
    "checked" : false,
    "restrictions" : ["MINOR"],
    "allowed" : []
  },
  {
    "name" : "Breath Attack",
    "cost" : 4,
    "effect" : "In your shooting phase, you can pick 1 enemy unit within 6" + '"' + " of this model. Roll a number of dice equal to the number of models from that enemy unit that is within 6" + '"' + " of this model, for each 6, that enemy unit suffers 1 mortal wound.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : ["GARGANTUAN"],
  },
  {
    "name" : "Vicious Charge",
    "cost" : 1,
    "effect" : "After this model makes a charge move, you can pick 1 enemy unit within 1" + '"' + " of this model and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds",
    "checked" : false,
    "restrictions" : [],
    "allowed" : [],
  },
  {
    "name" : "Poisonous Bite",
    "cost" : 2,
    "effect" : "If the unmodified hit roll for an attack made with the bestial companion's Maw is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : [],
  },
  {
    "name" : "Gobble Attack",
    "cost" : 3,
    "effect" : "Each time this model attacks, after all of this model's attacks have been resolved, you can pick 1 enemy model within 1" + '"' + " of this model and roll a dice. If the roll is equal to or greater than that enemy model's Wounds characteristic, it is slain.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : ["GARGANTUAN"],
  },
  {
    "name" : "Terror",
    "cost" : 1,
    "effect" : "Subtract 1 from the Bravery characteristic of enemy units while they are within 3" + '"' + " of any friendly units with this ability.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : ["GARGANTUAN"],
  },
  {
    "name" : "Lashing Tail",
    "cost" : 3,
    "effect" : "At the end of the combat phase, roll a dice for each enemy unit in that unit, that unit suffers D3 mortal wounds.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : ["GARGANTUAN"],
  },
  {
    "name" : "Stomp",
    "cost" : 2,
    "effect" : "At the end of the combat phase, you can pick 1 enemy unit within 1" + '"' + " of this unit and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds.",
    "checked" : false,
    "restrictions" : [],
    "allowed" : ["GARGANTUAN"],
  },
]