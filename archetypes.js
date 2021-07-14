var archetypes =  
    [
      {
        "name" : "COMMANDER",
        "keywords" : [],
        "restrictions" : ["DEATHMAGE", "MASTERCLAN"],
        "description" : "Add one of " + '"' + "Lead the attack" + '"' + " or "+ '"' + "Lead the Defence" + '"' + " command abilities to your hero's warscroll.",
        "options" : ["Lead the Attack", "Lead the Defence"]
      },
      {
        "name" : "ACOLYTE",
        "keywords" : ["PRIEST"],
        "restrictions" : ["DAEMON", "DEATHMAGE", "SAURUS", "SKAVEN"],
        "description" : "Add one of the prayers " + '"' + "Wrathful Invocation" + '"' + "or "+ '"' + "Shield of Faith" + '"' + " to your hero's warscroll. Divine Prayers: In your hero phase, this HERO can chant the following prayer. If they do so, make a prayer roll by rolling a dice. On a 1-2, the prayer is not answered. On a 3+, the prayer is answered.",
        "options" : ["Wrathful Invocation", "Shield of Faith"]
      },
      {
        "name" : "MAGE",
        "keywords" : ["WIZARD"],
        "restrictions" : ["DUARDIN", "KHORNE", "SAURUS"],
        "description" : "Add one of the spells " + '"' + "Aura of Protection" + '"' + ", "+ '"' + "Curse of Damnation" + '"' + ", "+ '"' + "Wildfire" + '"' + " and " + '"' + "Raise Dead"+ '"' + " to your hero's warscroll. This HERO is a WIZARD. They can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase. They know the Arcane Bolt and Mystic Shield spells in addition to the spell chosen earlier.",
        "options" : ["Aura of Protection", "Curse of Damnation", "Wildfire", "Raise Dead"]
      }
]

var options = 
{
  "Lead the Attack" : "You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 18" + '"' + " of this HERO. Add 1 to hit rolls for attacks made by that unit until the end of that phase.",
  "Lead the Defence" : "You can use this command ability at the start of the combat phase. If you do so, pick one 1 friendly unit wholly within 18" + '"' + " of this HERO. Add 1 to save rolls for attacks made by that unit until the end of that phase.",
  "Wrathful Invocation" : "If this prayer is answered, pick 1 enemy unit within 18" + '"' + " of this HERO. That unit suffers D3 mortal wounds.",
  "Shield of Faith" : "If this prayer is answered, pick 1 enemy unit within 12" + '"' + " of this HERO. Until the start of your next hero phase, roll a dice each time a wound or mortal wound is allocated to that unit. On a 6, that wound or mortal wound is negated.",
  "Aura of Protection" : "Aura of Protection has a casting value of 7. If successfully cast, until the start of your next hero phase, roll a dice each time a wound or mortal wound is allocated to a friendly unit wholly within 12" + '"' + " of the caster. On a 6, that wound or mortal wound is negated.",
  "Curse of Damnation" : "Curse of Damnation has a casting value of 7. If successfully cast, pick 1 enemy unit within 12" + '"' + " of the caster and visible to them. That unit suffers D3 mortal wounds. In addition, subtract 1 from save rolls for attacks that target that unit until the start of your next hero phase.",
  "Wildfire" : "Wildfire has a casting value of 6. If successfully cast, pick 1 enemy unit. Roll 1 dice for each model in that unit that is within 12" + '"' + " of the caster and visible to them. For each 5+, that unit suffers 1 mortal wound. If that unit has only 1 model, roll 3 dice instead of 1.",
  "Raise Dead" : "Raise Dead has a casting value of 6. If successfully cast, pick 1 friendly unit within 12" + '"' + " of the caster and visible to them. You may return a number of slain models that have a combined Wounds characteristic of D3 or less to that unit."
}