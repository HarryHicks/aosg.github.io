var ancestries = 
    [
      {
        "name" : "AELF",
        "move" : 6,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 7,
        "cost" : 3,
        "keywords" : ["ORDER", "AELF"],
        "armykeywords" : ["Daughters of Khaine", "Idoneth Deepkin", "Lumineth Realm-lords", "Cities of Sigmar"],
        "abilities" : []
      },
      {
        "name" : "ABHORRANT",
        "move" : 6,
        "wounds" : 6,
        "save" : 5,
        "bravery" : 10,
        "cost" : 7,
        "keywords" : ["DEATH", "VAMPIRE", "FLESH-EATER COURTS", "ABHORRANT", "WIZARD"],
        "armykeywords" : [],
        "abilities" : [
          {
          "name" : "Summon Men-at-arms",
          "cost" : 0,
          "checked" : false,
          "effect" : "You can use this command ability at the end of your movement phase. If you do so, pick 1 friendly model that has this command ability and has not used it before in the battle. That model summons 1 unit of up to 10 SERFS to the battlefield. The summoned unit is added to your army and must be set up wholly within 6" +'"' + " of the edge of the battlefield and more than 9" + '"' + " from any enemy units."
          },
        ]
      },
      {
        "name" : "BONESPLITTER ORRUK",
        "move" : 5,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 7,
        "cost" : 3,
        "keywords" : ["DESTRUCTION", "ORRUK", "ORRUK WARCLANS", "BONESPLITTERZ"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "BULLGOR",
        "move" : 7,
        "wounds" : 8,
        "save" : 5,
        "bravery" : 7,
        "cost" : 8,
        "keywords" : ["CHAOS", "BEASTS OF CHAOS", "WARHERD", "BULLGOR"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "COURTIER",
        "move" : 6,
        "wounds" : 4,
        "save" : 5,
        "bravery" : 10,
        "cost" : 5,
        "keywords" : ["DEATH", "MORDANT", "FLESH-EATER COURTS", "COURTIER"],
        "armykeywords" : [],
        "abilities" : [
          {
            "name" : "Muster Serfs",
            "cost" : 0,
            "checked" : false,
            "effect" : "In your hero phase, if this model is in your army and on the battlefield, roll 6 dice. For each 2+, you can return 1 slain model to a friendly SERFS unit that is within 10" + '"' + " of this model. Slain models can be returned to more than one unit if you wish, but each successful dice roll can only be used to return a model to a single unit."
          },
        ]
      },
      {
        "name" : "DAWI ZHARR",
        "move" : 4,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 7,
        "cost" : 4,
        "keywords" : ["CHAOS", "DAWI ZHARR", "Legion of Azgorh"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "DAEMON",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 10,
        "cost" : 5,
        "keywords" : ["CHAOS", "DAEMON"],
        "armykeywords" : ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"],
        "abilities" : []
      },
      {
        "name" : "DEATHMAGE",
        "move" : 5,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 7,
        "cost" : 3,
        "keywords" : ["DEATH", "DEATHMAGE"],
        "armykeywords" : ["Grand Host of Nagash", "Legion of Sacrament", "Legion of Blood", "Legion of Night"],
        "abilities" : []
      },
      {
        "name" : "DRAGON OGOR",
        "move" : 8,
        "wounds" : 10,
        "save" : 5,
        "bravery" : 7,
        "cost" : 10,
        "keywords" : ["CHAOS", "BEASTS OF CHAOS", "THUNDERSCORN", "DRAGON OGOR"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "DUARDIN",
        "move" : 4,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 7,
        "cost" : 4,
        "keywords" : ["ORDER", "DUARDIN"],
        "armykeywords" : ["Cities of Sigmar", "Fyreslayers", "Kharadron Overlords"],
        "abilities" : []
      },
      {
        "name" : "GOR",
        "move" : 6,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 6,
        "cost" : 3,
        "keywords" : ["CHAOS", "GOR", "BRAYHERD"],
        "armykeywords" : ["Beasts of Chaos", "Tzeentch"],
        "abilities" : []
      },
      {
        "name" : "GROT",
        "move" : 5,
        "wounds" : 4,
        "save" : 6,
        "bravery" : 4,
        "cost" : 3,
        "keywords" : ["DESTRUCTION", "GROT", "GLOOMSPITE GITZ"],
        "armykeywords" : ["Moonclan", "Spiderfang"],
        "abilities" : []
      },
      {
        "name" : "HUMAN",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 7,
        "cost" : 4,
        "keywords" : ["ORDER", "HUMAN", "CITIES OF SIGMAR"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "IRONJAW ORRUK",
        "move" : 4,
        "wounds" : 6,
        "save" : 5,
        "bravery" : 7,
        "cost" : 5,
        "keywords" : ["DESTRUCTION", "ORRUK", "ORRUK WARCLANS", "IRONJAWS"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "LIEGE",
        "move" : 5,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 10,
        "cost" : 12,
        "keywords" : ["DEATH", "OSSIARCH BONEREAPERS", "LIEGE", "HERO"],
        "armykeywords" : [],
        "abilities" : [
          {
          "name" : "Endless Duty",
          "cost" : 0,
          "checked" : false,
          "effect" : "You can use this command ability in your shooting phase or any combat phase. If you do so, pick 1 friendly OSSIARCH BONEREAPERS unit that is wholly within 12" + '"' + " of a model with this command ability. Add 1 to the Attacks characteristic of weapons used by that unit in that phase. You cannot pick the same unit to benefit from this command ability more than once per phase."
          }
        ]
      },
      {
        "name" : "MALIGNANT",
        "move" : 6,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 10,
        "cost" : 12,
        "keywords" : ["DEATH", "MALIGNANT", "NIGHTHAUNT"],
        "armykeywords" : [],
        "abilities" : [
          {
          "name" : "Fly",
          "cost" : 0,
          "checked" : false,
          "effect" : "This model can fly."
          },
          {
            "name" : "Ethereal",
            "cost" : 0,
            "checked" : false,
            "effect" : "Ignore modifiers (positive or negative) when making save rolls for attacks that target this model."
          }
        ]
      },
      {
        "name" : "MORDANT",
        "move" : 6,
        "wounds" : 6,
        "save" : 5,
        "bravery" : 10,
        "cost" : 6,
        "keywords" : ["DEATH", "MORDANT", "FLESH-EATER COURTS"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "MORTAL",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 7,
        "cost" : 4,
        "keywords" : ["CHAOS", "MORTAL"],
        "armykeywords" : ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"],
        "abilities" : []
      },
      {
        "name" : "MORTISAN",
        "move" : 5,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 10,
        "cost" : 4,
        "keywords" : ["DEATH", "OSSIARCH BONEREAPERS", "MORTISAN", "WIZARD"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "OGOR",
        "move" : 6,
        "wounds" : 7,
        "save" : 5,
        "bravery" : 8,
        "cost" : 7,
        "keywords" : ["DESTRUCTION", "OGOR", "OGOR MAWTRIBES"],
        "armykeywords" : ["Beastclaw Raiders", "Gutbusters"],
        "abilities" : []
      },
      {
        "name" : "OSSIARCH BONEREAPER",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 10,
        "cost" : 5,
        "keywords" : ["DEATH", "OSSIARCH BONEREAPERS"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "SAURUS",
        "move" : 5,
        "wounds" : 6,
        "save" : 4,
        "bravery" : 8,
        "cost" : 6,
        "keywords" : ["ORDER", "SERAPHON", "SAURUS"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "SKAVEN",
        "move" : 6,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 6,
        "cost" : 3,
        "keywords" : ["CHAOS", "SKAVEN", "SKAVENTIDE"],
        "armykeywords" : ["Masterclan", "Clans Pestilens, Nurgle", "Clans Verminus", "Clans Skryre", "Clans Moulder", "Clans Eshin"],
        "abilities" : []
      },
      {
        "name" : "SKELETON",
        "move" : 4,
        "wounds" : 5,
        "save" : 6,
        "bravery" : 10,
        "cost" : 3,
        "keywords" : ["DEATH", "SKELETON", "DEATHRATTLE"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "SKINK",
        "move" : 8,
        "wounds" : 4,
        "save" : 6,
        "bravery" : 6,
        "cost" : 4,
        "keywords" : ["ORDER", "SERAPHON", "SKINK"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "STORMCAST ETERNAL",
        "move" : 5,
        "wounds" : 5,
        "save" : 4,
        "bravery" : 8,
        "cost" : 5,
        "keywords" : ["ORDER", "CELESTIAL", "HUMAN", "STORMCAST ETERNALS"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "VAMPIRE",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 10,
        "cost" : 4,
        "keywords" : ["DEATH", "VAMPIRE", "SOULBLIGHT"],
        "armykeywords" : [],
        "abilities" : []
      },
      {
        "name" : "SYLVANETH",
        "move" : 5,
        "wounds" : 5,
        "save" : 5,
        "bravery" : 7,
        "cost" : 4,
        "keywords" : ["ORDER", "SYLVANETH"],
        "armykeywords" : [],
        "abilities" : []
      },
    ]
