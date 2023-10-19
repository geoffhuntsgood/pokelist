import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen8Moves: Move[] = [
  {
    name: "maxguard",
    displayName: "Max Guard",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession."
  },
  {
    name: "dynamaxcannon",
    displayName: "Dynamax Cannon",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Eternatus",
    description: "The user condenses energy within its body and unleashes that energy from its core to inflict damage."
  },
  {
    name: "snipeshot",
    displayName: "Snipe Shot",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Inteleon",
    description:
      "The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target."
  },
  {
    name: "jawlock",
    displayName: "Jaw Lock",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Chewtle, Drednaw",
    description:
      "This move prevents the user and the target from switching out until either of them faints. The effect goes away if either of the Pokémon leaves the field."
  },
  {
    name: "stuffcheeks",
    displayName: "Stuff Cheeks",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Skwovet, Greedent",
    description: "The user eats its held Berry, then sharply boosts its Defense stat."
  },
  {
    name: "noretreat",
    displayName: "No Retreat",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    signatureOf: "Falinks",
    description: "This move boosts all the user's stats but prevents the user from switching out or fleeing."
  },
  {
    name: "tarshot",
    displayName: "Tar Shot",
    generation: 8,
    type: TypeName.Rock,
    attackType: AttackType.Status,
    signatureOf: "Coalossal",
    description:
      "The user pours sticky tar over the target, lowering the target's Speed stat. The target becomes weaker to Fire-type moves."
  },
  {
    name: "magicpowder",
    displayName: "Magic Powder",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Hatterene",
    description: "The user scatters a cloud of magic powder that changes the target's type to Psychic."
  },
  {
    name: "dragondarts",
    displayName: "Dragon Darts",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Dragapult",
    description:
      "The user attacks twice using Dreepy. If there are two opposing Pokémon, this move hits each of them once."
  },
  {
    name: "teatime",
    displayName: "Teatime",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Polteageist",
    description: "The user has teatime with all the Pokémon currently in the battle. Each Pokémon eats its held Berry."
  },
  {
    name: "octolock",
    displayName: "Octolock",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    signatureOf: "Grapploct",
    description:
      "The user locks the target in and prevents it from fleeing. This move also lowers the target's Defense and Sp. Def every turn."
  },
  {
    name: "boltbeak",
    displayName: "Bolt Beak",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description:
      "The user stabs the target with its electrified beak. This move's power is doubled if the user moves before the target."
  },
  {
    name: "fishiousrend",
    displayName: "Fishious Rend",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user rends the target with its hard gills. This move's power is doubled if the user moves before the target."
  },
  {
    name: "courtchange",
    displayName: "Court Change",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Cinderace",
    description: "With its mysterious power, the user swaps the effects on either side of the field."
  },
  {
    name: "maxflare",
    displayName: "Max Flare",
    generation: 8,
    type: TypeName.Fire,
    attackType: AttackType.Dynamax,
    description: "This is a Fire-type attack Dynamax Pokémon use. The user intensifies the sun for five turns."
  },
  {
    name: "maxflutterby",
    displayName: "Max Flutterby",
    generation: 8,
    type: TypeName.Bug,
    attackType: AttackType.Dynamax,
    description: "This is a Bug-type attack Dynamax Pokémon use. This lowers the target's Sp. Atk stat."
  },
  {
    name: "maxlightning",
    displayName: "Max Lightning",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Dynamax,
    description:
      "This is an Electric-type attack Dynamax Pokémon use. The user turns the ground into Electric Terrain for five turns."
  },
  {
    name: "maxstrike",
    displayName: "Max Strike",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Dynamax,
    description: "This is a Normal-type attack Dynamax Pokémon use. This lowers the target's Speed stat."
  },
  {
    name: "maxknuckle",
    displayName: "Max Knuckle",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Dynamax,
    description: "This is a Fighting-type attack Dynamax Pokémon use. This boosts ally Pokémon's Attack stats."
  },
  {
    name: "maxphantasm",
    displayName: "Max Phantasm",
    generation: 8,
    type: TypeName.Ghost,
    attackType: AttackType.Dynamax,
    description: "This is a Ghost-type attack Dynamax Pokémon use. This lowers the target's Defense stat."
  },
  {
    name: "maxhailstorm",
    displayName: "Max Hailstorm",
    generation: 8,
    type: TypeName.Ice,
    attackType: AttackType.Dynamax,
    description: "This is an Ice-type attack Dynamax Pokémon use. The user summons a hailstorm lasting five turns."
  },
  {
    name: "maxooze",
    displayName: "Max Ooze",
    generation: 8,
    type: TypeName.Poison,
    attackType: AttackType.Dynamax,
    description: "This is a Poison-type attack Dynamax Pokémon use. This boosts ally Pokémon's Sp. Atk stats."
  },
  {
    name: "maxgeyser",
    displayName: "Max Geyser",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Dynamax,
    description:
      "This is a Water-type attack Dynamax Pokémon use. The user summons a heavy rain that falls for five turns."
  },
  {
    name: "maxairstream",
    displayName: "Max Airstream",
    generation: 8,
    type: TypeName.Flying,
    attackType: AttackType.Dynamax,
    description: "This is a Flying-type attack Dynamax Pokémon use. This boosts ally Pokémon's Speed stats."
  },
  {
    name: "maxstarfall",
    displayName: "Max Starfall",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Dynamax,
    description:
      "This is a Fairy-type attack Dynamax Pokémon use. The user turns the ground into Misty Terrain for five turns."
  },
  {
    name: "maxwyrmwind",
    displayName: "Max Wyrmwind",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Dynamax,
    description: "This is a Dragon-type attack Dynamax Pokémon use. This lowers the target's Attack stat."
  },
  {
    name: "maxmindstorm",
    displayName: "Max Mindstorm",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Dynamax,
    description:
      "This is a Psychic-type attack Dynamax Pokémon use. The user turns the ground into Psychic Terrain for five turns."
  },
  {
    name: "maxrockfall",
    displayName: "Max Rockfall",
    generation: 8,
    type: TypeName.Rock,
    attackType: AttackType.Dynamax,
    description: "This is a Rock-type attack Dynamax Pokémon use. The user summons a sandstorm lasting five turns."
  },
  {
    name: "maxquake",
    displayName: "Max Quake",
    generation: 8,
    type: TypeName.Ground,
    attackType: AttackType.Dynamax,
    description: "This is a Ground-type attack Dynamax Pokémon use. This boosts ally Pokémon's Sp. Def stats."
  },
  {
    name: "maxdarkness",
    displayName: "Max Darkness",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Dynamax,
    description: "This is a Dark-type attack Dynamax Pokémon use. This lowers the target's Sp. Def stat."
  },
  {
    name: "maxovergrowth",
    displayName: "Max Overgrowth",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Dynamax,
    description:
      "This is a Grass-type attack Dynamax Pokémon use. The user turns the ground into Grassy Terrain for five turns."
  },
  {
    name: "maxsteelspike",
    displayName: "Max Steelspike",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Dynamax,
    description: "This is a Steel-type attack Dynamax Pokémon use. This raises ally Pokémon's Defense stats."
  },
  {
    name: "clangoroussoul",
    displayName: "Clangorous Soul",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Status,
    signatureOf: "Kommo-o",
    description: "The user boosts all its stats by using some of its own HP."
  },
  {
    name: "bodypress",
    displayName: "Body Press",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user attacks by slamming its body into the target. The higher the user's Defense stat, the greater the damage this move deals."
  },
  {
    name: "decorate",
    displayName: "Decorate",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Alcremie",
    description: "The user sharply boosts the target's Attack and Sp. Atk stats by decorating the target."
  },
  {
    name: "drumbeating",
    displayName: "Drum Beating",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Rillaboom",
    description:
      "The user plays its drum, controlling the drum's roots to attack the target. This also lowers the target's Speed stat."
  },
  {
    name: "snaptrap",
    displayName: "Snap Trap",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Galarian Stunfisk",
    description: "The user snares the target in a snap trap that inflicts damage for four to five turns."
  },
  {
    name: "pyroball",
    displayName: "Pyro Ball",
    generation: 8,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Cinderace",
    description:
      "The user attacks by igniting a small stone and launching it as a fiery ball at the target. This may also leave the target with a burn."
  },
  {
    name: "behemothblade",
    displayName: "Behemoth Blade",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Zacian",
    description:
      "The user wields a large, powerful sword using its whole body and cuts the target in a vigorous attack."
  },
  {
    name: "behemothbash",
    displayName: "Behemoth Bash",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Zamazenta",
    description: "The user's body becomes a firm shield and slams into the target fiercely."
  },
  {
    name: "aurawheel",
    displayName: "Aura Wheel",
    generation: 8,
    type: [TypeName.Electric, TypeName.Dark],
    attackType: AttackType.Physical,
    signatureOf: "Morpeko",
    description:
      "Morpeko attacks and boosts its Speed stat with the energy stored in its cheeks. This move's type changes depending on the user's form."
  },
  {
    name: "breakingswipe",
    displayName: "Breaking Swipe",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    description:
      "The user swings its tough tail wildly and attacks opposing Pokémon. This also lowers their Attack stats."
  },
  {
    name: "branchpoke",
    displayName: "Branch Poke",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Grookey, Thwackey, Rillaboom",
    description: "The user attacks the target by poking it with a sharply pointed branch."
  },
  {
    name: "overdrive",
    displayName: "Overdrive",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Toxtricity",
    description:
      "The user attacks opposing Pokémon by twanging a guitar or bass guitar, causing a huge echo and strong vibration."
  },
  {
    name: "appleacid",
    displayName: "Apple Acid",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    signatureOf: "Appletun",
    description:
      "The user attacks the target with an acidic liquid created from tart apples. This also lowers the target's Sp. Def stat."
  },
  {
    name: "gravapple",
    displayName: "Grav Apple",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Flapple",
    description:
      "The user inflicts damage by dropping an apple from high above. This also lowers the target's Defense stat."
  },
  {
    name: "spiritbreak",
    displayName: "Spirit Break",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Physical,
    signatureOf: "Grimmsnarl",
    description:
      "The user attacks the target with so much force that it could break the target's spirit. This also lowers the target's Sp. Atk stat."
  },
  {
    name: "strangesteam",
    displayName: "Strange Steam",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Galarian Weezing",
    description: "The user attacks the target by emitting steam. This may also confuse the target."
  },
  {
    name: "lifedew",
    displayName: "Life Dew",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description:
      "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon currently in the battle."
  },
  {
    name: "obstruct",
    displayName: "Obstruct",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    signatureOf: "Obstagoon",
    description:
      "This move enables the user to protect itself from all attacks. Its chance of failing rises if used in succession. Direct contact harshly lowers the attacker's Defense stat."
  },
  {
    name: "falsesurrender",
    displayName: "False Surrender",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Morgrem, Grimmsnarl",
    description:
      "The user pretends to bow its head, but then it stabs the target with its disheveled hair. This attack never misses."
  },
  {
    name: "meteorassault",
    displayName: "Meteor Assault",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Sirfetch'd",
    description:
      "The user attacks wildly with its thick leek. The user can't move on the next turn, because the force of this move makes it stagger."
  },
  {
    name: "eternabeam",
    displayName: "Eternabeam",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Eternatus",
    description: "This is Eternatus's most powerful attack in its original form. The user can't move on the next turn."
  },
  {
    name: "steelbeam",
    displayName: "Steel Beam",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Special,
    description: "The user fires a beam of steel that it collected from its entire body. This also damages the user."
  },
  {
    name: "expandingforce",
    displayName: "Expanding Force",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Armarouge",
    description:
      "The user attacks the target with its psychic power. When the ground is Psychic Terrain, this move's power is boosted and it damages all opposing Pokémon."
  },
  {
    name: "steelroller",
    displayName: "Steel Roller",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Iron Treads",
    description:
      "The user attacks while destroying the terrain. This move fails if the ground hasn't turned into a terrain."
  },
  {
    name: "scaleshot",
    displayName: "Scale Shot",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Roaring Moon",
    description:
      "The user attacks by shooting scales two to five times in a row. This move boosts the user's Speed stat but lowers its Defense stat."
  },
  {
    name: "meteorbeam",
    displayName: "Meteor Beam",
    generation: 8,
    type: TypeName.Rock,
    attackType: AttackType.Special,
    description:
      "The user gathers energy from space and boosts its Sp. Atk stat on the first turn, then attacks on the next turn."
  },
  {
    name: "shellsidearm",
    displayName: "Shell Side Arm",
    generation: 8,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    signatureOf: "Galarian Slowbro",
    description:
      "This move is either physical or special—whichever will inflict more damage. This may also poison the target."
  },
  {
    name: "mistyexplosion",
    displayName: "Misty Explosion",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    description:
      "The user attacks everything around it and faints upon using this move. This move's power is boosted on Misty Terrain."
  },
  {
    name: "grassyglide",
    displayName: "Grassy Glide",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "Gliding on the ground, the user attacks the target. This move always goes first on Grassy Terrain."
  },
  {
    name: "risingvoltage",
    displayName: "Rising Voltage",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks with electricity rising from the ground. This move's power is doubled if the target is on Electric Terrain."
  },
  {
    name: "terrainpulse",
    displayName: "Terrain Pulse",
    generation: 8,
    type: [TypeName.Normal, TypeName.Electric, TypeName.Grass, TypeName.Fairy, TypeName.Psychic],
    attackType: AttackType.Special,
    signatureOf: "Smoliv, Dolliv, Arboliva",
    description:
      "The user utilizes the energy of the terrain to attack. This move's type and power change depending on the terrain at the time the move is used."
  },
  {
    name: "skittersmack",
    displayName: "Skitter Smack",
    generation: 8,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "The user skitters behind the target to attack. This also lowers the target's Sp. Atk stat."
  },
  {
    name: "burningjealousy",
    displayName: "Burning Jealousy",
    generation: 8,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user attacks with energy from jealousy. This leaves all opposing Pokémon that have had their stats boosted during the turn with a burn."
  },
  {
    name: "lashout",
    displayName: "Lash Out",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user lashes out to vent its frustration toward the target. This move's power is doubled if the user's stats were lowered during this turn."
  },
  {
    name: "poltergeist",
    displayName: "Poltergeist",
    generation: 8,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description:
      "The user attacks by controlling the target's item. This move fails if the target isn't holding an item."
  },
  {
    name: "corrosivegas",
    displayName: "Corrosive Gas",
    generation: 8,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description:
      "The user surrounds everything around it with highly acidic gas and melts away items held by other Pokémon."
  },
  {
    name: "coaching",
    displayName: "Coaching",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    description: "The user properly coaches its ally Pokémon, boosting their Attack and Defense stats."
  },
  {
    name: "flipturn",
    displayName: "Flip Turn",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description: "After making its attack, the user rushes back to switch places with a party Pokémon in waiting."
  },
  {
    name: "tripleaxel",
    displayName: "Triple Axel",
    generation: 8,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "A consecutive three-kick attack that becomes more powerful with each successful hit."
  },
  {
    name: "dualwingbeat",
    displayName: "Dual Wingbeat",
    generation: 8,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The user slams the target with its wings to inflict damage. The target is hit twice in a row."
  },
  {
    name: "scorchingsands",
    displayName: "Scorching Sands",
    generation: 8,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    description: "The user throws scorching sand at the target to attack. This may also leave the target with a burn."
  },
  {
    name: "junglehealing",
    displayName: "Jungle Healing",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Zarude",
    description:
      "The user becomes one with the jungle, restoring HP and curing status conditions for itself and its ally Pokémon currently in the battle."
  },
  {
    name: "wickedblow",
    displayName: "Wicked Blow",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Single-Strike Style Urshifu",
    description:
      "The user, having mastered the Dark style, strikes the target with a fierce blow. This move always lands a critical hit."
  },
  {
    name: "surgingstrikes",
    displayName: "Surging Strikes",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Rapid-Strike Style Urshifu",
    description:
      "The user, having mastered the Water style, strikes the target with a flowing motion three times in a row. This move always lands a critical hit."
  },
  {
    name: "thundercage",
    displayName: "Thunder Cage",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Regieleki",
    description:
      "The user traps the target inside a cage of sparking electricity that inflicts damage for four to five turns."
  },
  {
    name: "dragonenergy",
    displayName: "Dragon Energy",
    generation: 8,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Regidrago",
    description:
      "Converting its life-force into power, the user attacks opposing Pokémon. The lower the user's HP, the lower the move's power."
  },
  {
    name: "freezingglare",
    displayName: "Freezing Glare",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Galarian Articuno",
    description: "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen."
  },
  {
    name: "fierywrath",
    displayName: "Fiery Wrath",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    signatureOf: "Galarian Moltres",
    description:
      "The user transforms its wrath into a fire-like aura to attack. This may also make opposing Pokémon flinch."
  },
  {
    name: "thunderouskick",
    displayName: "Thunderous Kick",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Galarian Zapdos",
    description:
      "The user overwhelms the target with lightning-like movement before delivering a kick. This also lowers the target's Defense stat."
  },
  {
    name: "glaciallance",
    displayName: "Glacial Lance",
    generation: 8,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Ice Rider Calyrex",
    description: "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokémon."
  },
  {
    name: "astralbarrage",
    displayName: "Astral Barrage",
    generation: 8,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Shadow Rider Calyrex",
    description: "The user attacks by sending a frightful amount of small ghosts at opposing Pokémon."
  },
  {
    name: "eeriespell",
    displayName: "Eerie Spell",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Galarian Slowking",
    description:
      "The user attacks with its tremendous psychic power. This also drains 3 PP from the move last used by the target."
  },
  {
    name: "direclaw",
    displayName: "Dire Claw",
    generation: 8,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Sneasler",
    description:
      "The user lashes out at the target with ruinous claws. This may also leave the target poisoned, paralyzed, or asleep."
  },
  {
    name: "psyshieldbash",
    displayName: "Psyshield Bash",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    signatureOf: "Stantler, Wyrdeer",
    description:
      "Cloaking itself in psychic energy, the user slams into the target. This also boosts the user's Defense stat."
  },
  {
    name: "powershift",
    displayName: "Power Shift",
    generation: 8,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user swaps its Attack and Defense stats."
  },
  {
    name: "stoneaxe",
    displayName: "Stone Axe",
    generation: 8,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Kleavor",
    description:
      "The user swings its stone axes at the target. Stone splinters left behind by this attack float around the target."
  },
  {
    name: "springtidestorm",
    displayName: "Springtide Storm",
    generation: 8,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Enamorus",
    description:
      "The user attacks by wrapping opposing Pokémon in fierce winds brimming with love and hate. This may also lower their Attack stats."
  },
  {
    name: "mysticalpower",
    displayName: "Mystical Power",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Uxie, Mesprit, Azelf",
    description: "The user attacks by emitting a mysterious power. This also boosts the user's Sp. Atk stat."
  },
  {
    name: "ragingfury",
    displayName: "Raging Fury",
    generation: 8,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Hisuian Arcanine",
    description: "The user rampages around spewing flames for two to three turns. The user then becomes confused."
  },
  {
    name: "wavecrash",
    displayName: "Wave Crash",
    generation: 8,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user shrouds itself in water and slams into the target with its whole body to inflict damage. This also damages the user quite a lot."
  },
  {
    name: "chloroblast",
    displayName: "Chloroblast",
    generation: 8,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    signatureOf: "Hisuian Electrode",
    description:
      "The user launches its amassed chlorophyll to inflict damage on the target. This also damages the user."
  },
  {
    name: "mountaingale",
    displayName: "Mountain Gale",
    generation: 8,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Hisuian Avalugg",
    description:
      "The user hurls giant chunks of ice at the target to inflict damage. This may also make the target flinch."
  },
  {
    name: "victorydance",
    displayName: "Victory Dance",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    signatureOf: "Hisuian Lilligant",
    description:
      "The user performs an intense dance to usher in victory, boosting its Attack, Defense, and Speed stats."
  },
  {
    name: "headlongrush",
    displayName: "Headlong Rush",
    generation: 8,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description:
      "The user smashes into the target in a full-body tackle. This also lowers the user's Defense and Sp. Def stats."
  },
  {
    name: "barbbarrage",
    displayName: "Barb Barrage",
    generation: 8,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Hisuian Qwilfish, Overqwil",
    description:
      "The user launches countless toxic barbs to inflict damage. This may also poison the target. This move's power is doubled if the target is already poisoned."
  },
  {
    name: "esperwing",
    displayName: "Esper Wing",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Hisuian Braviary",
    description:
      "The user slashes the target with aura-enriched wings. This also boosts the user's Speed stat. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "bittermalice",
    displayName: "Bitter Malice",
    generation: 8,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Hisuian Zorua, Hisuian Zoroark",
    description:
      "The user attacks the target with spine-chilling resentment. This also lowers the target's Attack stat."
  },
  {
    name: "shelter",
    displayName: "Shelter",
    generation: 8,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    signatureOf: "Goomy, Hisuian Sliggoo, Hisuian Goodra",
    description: "The user makes its skin as hard as an iron shield, sharply boosting its Defense stat."
  },
  {
    name: "triplearrows",
    displayName: "Triple Arrows",
    generation: 8,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hisuian Decidueye",
    description:
      "The user kicks, then fires three arrows. This move has a heightened chance of landing a critical hit and may also lower the target's Defense stat or make it flinch."
  },
  {
    name: "infernalparade",
    displayName: "Infernal Parade",
    generation: 8,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Hisuian Typhlosion",
    description:
      "The user attacks with myriad fireballs. This may also leave the target with a burn. This move's power is doubled if the target has a status condition."
  },
  {
    name: "ceaselessedge",
    displayName: "Ceaseless Edge",
    generation: 8,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Hisuian Samurott",
    description:
      "The user slashes its shell blade at the target. Shell splinters left behind by this attack remain scattered under the target as spikes."
  },
  {
    name: "bleakwindstorm",
    displayName: "Bleakwind Storm",
    generation: 8,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    signatureOf: "Tornadus",
    description:
      "The user attacks with savagely cold winds that cause both body and spirit to tremble. This may also lower the Speed stats of opposing Pokémon."
  },
  {
    name: "wildboltstorm",
    displayName: "Wildbolt Storm",
    generation: 8,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Thundurus",
    description:
      "The user summons a thunderous tempest and savagely attacks with lightning and wind. This may also leave opposing Pokémon with paralysis."
  },
  {
    name: "sandsearstorm",
    displayName: "Sandsear Storm",
    generation: 8,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    signatureOf: "Landorus",
    description:
      "The user attacks by wrapping opposing Pokémon in fierce winds and searingly hot sand. This may also leave them with a burn."
  },
  {
    name: "lunarblessing",
    displayName: "Lunar Blessing",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Cresselia",
    description:
      "The user receives a blessing from the crescent moon, restoring HP and curing status conditions for itself and its ally Pokémon currently in the battle."
  },
  {
    name: "takeheart",
    displayName: "Take Heart",
    generation: 8,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Phione, Manaphy",
    description:
      "The user lifts its spirits, curing its own status conditions and boosting its Sp. Atk and Sp. Def stats."
  }
];
