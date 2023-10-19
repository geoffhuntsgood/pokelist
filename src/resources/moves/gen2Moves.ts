import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen2Moves: Move[] = [
  {
    name: "sketch",
    displayName: "Sketch",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Smeargle",
    description:
      "This move enables the user to permanently learn the move last used by the target. Once used, Sketch disappears."
  },
  {
    name: "triplekick",
    displayName: "Triple Kick",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hitmontop",
    description: "A consecutive three-kick attack that becomes more powerful with each successful hit."
  },
  {
    name: "thief",
    displayName: "Thief",
    generation: 2,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item."
  },
  {
    name: "spiderweb",
    displayName: "Spider Web",
    generation: 2,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    signatureOf: "Spinarak, Ariados",
    description: "The user ensnares the target with thin, gooey silk so it can't flee from battle."
  },
  {
    name: "mindreader",
    displayName: "Mind Reader",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user senses the target's movements with its mind to ensure its next attack does not miss the target."
  },
  {
    name: "nightmare",
    displayName: "Nightmare",
    generation: 2,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description: "A sleeping target sees a nightmare that inflicts some damage every turn."
  },
  {
    name: "flamewheel",
    displayName: "Flame Wheel",
    generation: 2,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    description:
      "The user attacks by cloaking itself in fire and charging at the target. This may also leave the target with a burn."
  },
  {
    name: "snore",
    displayName: "Snore",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch."
  },
  {
    name: "curse",
    displayName: "Curse",
    generation: 2,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description: "A move that has different effects depending on whether the user is a Ghost type or not."
  },
  {
    name: "flail",
    displayName: "Flail",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user flails about aimlessly to attack. The less HP the user has, the greater the move's power."
  },
  {
    name: "conversion2",
    displayName: "Conversion 2",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Porygon, Porygon2, Porygon-Z",
    description: "The user changes its type to make itself resistant to the type of the move the target used last."
  },
  {
    name: "aeroblast",
    displayName: "Aeroblast",
    generation: 2,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    signatureOf: "Lugia",
    description:
      "A vortex of air is shot at the target to inflict damage. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "cottonspore",
    displayName: "Cotton Spore",
    generation: 2,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description:
      "The user releases cotton-like spores that cling to opposing Pokémon. This harshly lowers their Speed stats."
  },
  {
    name: "reversal",
    displayName: "Reversal",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "An all-out attack that becomes more powerful the less HP the user has."
  },
  {
    name: "spite",
    displayName: "Spite",
    generation: 2,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description: "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it."
  },
  {
    name: "powdersnow",
    displayName: "Powder Snow",
    generation: 2,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description: "The user attacks with a chilling gust of powdery snow. This may also leave opposing Pokémon frozen."
  },
  {
    name: "protect",
    displayName: "Protect",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession."
  },
  {
    name: "machpunch",
    displayName: "Mach Punch",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hitmonchan, Breloom",
    description: "The user throws a punch at blinding speed. This move always goes first."
  },
  {
    name: "scaryface",
    displayName: "Scary Face",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user frightens the target with a scary face to harshly lower its Speed stat."
  },
  {
    name: "feintattack",
    displayName: "Feint Attack",
    generation: 2,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The user approaches the target disarmingly, then throws a sucker punch. This attack never misses."
  },
  {
    name: "sweetkiss",
    displayName: "Sweet Kiss",
    generation: 2,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description: "The user kisses the target with a sweet, angelic cuteness that causes confusion."
  },
  {
    name: "bellydrum",
    displayName: "Belly Drum",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user maximizes its Attack stat but loses HP equal to half its max HP."
  },
  {
    name: "sludgebomb",
    displayName: "Sludge Bomb",
    generation: 2,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "The user hurls unsanitary sludge at the target to inflict damage. This may also poison the target."
  },
  {
    name: "mudslap",
    displayName: "Mud-Slap",
    generation: 2,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    description: "The user hurls mud in the target's face to inflict damage and lower its accuracy."
  },
  {
    name: "octazooka",
    displayName: "Octazooka",
    generation: 2,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Octillery",
    description: "The user attacks by spraying ink in the target's face. This may also lower the target's accuracy."
  },
  {
    name: "spikes",
    displayName: "Spikes",
    generation: 2,
    type: TypeName.Ground,
    attackType: AttackType.Status,
    description:
      "The user lays a trap of spikes at the feet of the opposing team. The spikes will damage opposing Pokémon that switch into battle."
  },
  {
    name: "zapcannon",
    displayName: "Zap Cannon",
    generation: 2,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks by firing an electric blast like a cannon. This also leaves the target with paralysis."
  },
  {
    name: "foresight",
    displayName: "Foresight",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "Enables a Ghost-type target to be hit by Normal- and Fighting-type attacks. This also enables an evasive target to be hit."
  },
  {
    name: "destinybond",
    displayName: "Destiny Bond",
    generation: 2,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description:
      "If the user is knocked out after using this move, the Pokémon that knocked it out will also faint. This move's chance of failing rises if it is used in succession."
  },
  {
    name: "perishsong",
    displayName: "Perish Song",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "Any Pokémon that hears this song faints in three turns, unless it switches out of battle."
  },
  {
    name: "icywind",
    displayName: "Icy Wind",
    generation: 2,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description: "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats."
  },
  {
    name: "detect",
    displayName: "Detect",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    description:
      "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession."
  },
  {
    name: "bonerush",
    displayName: "Bone Rush",
    generation: 2,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Cubone, Marowak, Lucario",
    description: "The user attacks by striking the target with a hard bone. This move hits two to five times in a row."
  },
  {
    name: "lockon",
    displayName: "Lock-On",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user takes sure aim at the target. This ensures the user's next move does not miss that target."
  },
  {
    name: "outrage",
    displayName: "Outrage",
    generation: 2,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Dratini, Dragonair, Dragonite",
    description: "The user rampages and attacks for two to three turns. The user then becomes confused."
  },
  {
    name: "sandstorm",
    displayName: "Sandstorm",
    generation: 2,
    type: TypeName.Rock,
    attackType: AttackType.Status,
    description:
      "A five-turn sandstorm is summoned to damage all Pokémon except Rock, Ground, and Steel types. The sandstorm also boosts the Sp. Def stats of Rock types."
  },
  {
    name: "gigadrain",
    displayName: "Giga Drain",
    generation: 2,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "endure",
    displayName: "Endure",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user endures any attack with at least 1 HP. This move's chance of failing rises if used in succession."
  },
  {
    name: "charm",
    displayName: "Charm",
    generation: 2,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description:
      "The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat."
  },
  {
    name: "rollout",
    displayName: "Rollout",
    generation: 2,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "The user continually rolls into the target over five turns. This attack becomes more powerful each time it hits."
  },
  {
    name: "falseswipe",
    displayName: "False Swipe",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP."
  },
  {
    name: "swagger",
    displayName: "Swagger",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user enrages and confuses the target. However, this also sharply raises the target's Attack stat."
  },
  {
    name: "milkdrink",
    displayName: "Milk Drink",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Miltank, Gogoat",
    description: "The user restores its own HP by up to half its max HP."
  },
  {
    name: "spark",
    displayName: "Spark",
    generation: 2,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description:
      "The user attacks the target with an electrically charged tackle. This may also leave the target with paralysis."
  },
  {
    name: "furycutter",
    displayName: "Fury Cutter",
    generation: 2,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description:
      "The user attacks by slashing the target with scythes, claws, or the like. This attack becomes more powerful if it hits in succession."
  },
  {
    name: "steelwing",
    displayName: "Steel Wing",
    generation: 2,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Skarmory",
    description: "The target is hit with wings of steel. This may also boost the user's Defense stat."
  },
  {
    name: "meanlook",
    displayName: "Mean Look",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user pins the target with a dark, arresting look. The target becomes unable to flee."
  },
  {
    name: "attract",
    displayName: "Attract",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "If the target is of the opposite gender to the user, it becomes infatuated with the user and will sometimes be unable to use its moves."
  },
  {
    name: "sleeptalk",
    displayName: "Sleep Talk",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user randomly uses one of the moves it knows. This move can only be used while the user is asleep."
  },
  {
    name: "healbell",
    displayName: "Heal Bell",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user makes a soothing bell chime to cure the status conditions of all its fellow party Pokémon and allies."
  },
  {
    name: "return",
    displayName: "Return",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "This full-power attack grows more powerful the more the user likes its Trainer."
  },
  {
    name: "present",
    displayName: "Present",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Delibird",
    description: "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however."
  },
  {
    name: "frustration",
    displayName: "Frustration",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "This full-power attack grows more powerful the less the user likes its Trainer."
  },
  {
    name: "safeguard",
    displayName: "Safeguard",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user creates a protective field that prevents status conditions for five turns."
  },
  {
    name: "painsplit",
    displayName: "Pain Split",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Misdreavus",
    description:
      "The user adds its HP to the target's HP, then equally splits the combined HP between the target and itself."
  },
  {
    name: "sacredfire",
    displayName: "Sacred Fire",
    generation: 2,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Ho-Oh",
    description:
      "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn."
  },
  {
    name: "magnitude",
    displayName: "Magnitude",
    generation: 2,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description: "The user attacks everything around it with a ground-shaking quake. Its power varies."
  },
  {
    name: "dynamicpunch",
    displayName: "Dynamic Punch",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks by punching the target with full concentrated power. This also confuses the target."
  },
  {
    name: "megahorn",
    displayName: "Megahorn",
    generation: 2,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    signatureOf: "Heracross",
    description: "Using its tough and impressive horn, the user rams into the target with no letup."
  },
  {
    name: "dragonbreath",
    displayName: "Dragon Breath",
    generation: 2,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    description: "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis."
  },
  {
    name: "batonpass",
    displayName: "Baton Pass",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user switches places with a party Pokémon in waiting and passes along any stat changes."
  },
  {
    name: "encore",
    displayName: "Encore",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user compels the target to keep using the move it encored for three turns."
  },
  {
    name: "pursuit",
    displayName: "Pursuit",
    generation: 2,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The power of this attack move is doubled if it's used on a target that's switching out of battle."
  },
  {
    name: "rapidspin",
    displayName: "Rapid Spin",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user performs a spin attack that can also eliminate the effects of such moves as Bind, Wrap, and Leech Seed. This also boosts the user's Speed stat."
  },
  {
    name: "sweetscent",
    displayName: "Sweet Scent",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user releases a scent that harshly lowers opposing Pokémon's evasiveness."
  },
  {
    name: "irontail",
    displayName: "Iron Tail",
    generation: 2,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat."
  },
  {
    name: "metalclaw",
    displayName: "Metal Claw",
    generation: 2,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The target is raked with steel claws. This may also boost the user's Attack stat."
  },
  {
    name: "vitalthrow",
    displayName: "Vital Throw",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Machop, Machoke, Machamp",
    description: "The user attacks last. In return, this throw move never misses."
  },
  {
    name: "morningsun",
    displayName: "Morning Sun",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Espeon",
    description: "The user restores its own HP. The amount of HP regained varies with the weather."
  },
  {
    name: "synthesis",
    displayName: "Synthesis",
    generation: 2,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "The user restores its own HP. The amount of HP regained varies with the weather."
  },
  {
    name: "moonlight",
    displayName: "Moonlight",
    generation: 2,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    description: "The user restores its own HP. The amount of HP regained varies with the weather."
  },
  {
    name: "hiddenpower",
    displayName: "Hidden Power",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    signatureOf: "Unown",
    description: "A unique attack that varies in type depending on the Pokémon using it."
  },
  {
    name: "crosschop",
    displayName: "Cross Chop",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Mankey, Primeape, Annihilape",
    description:
      "The user delivers a double chop with its forearms crossed. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "twister",
    displayName: "Twister",
    generation: 2,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    description: "The user whips up a vicious tornado to tear at opposing Pokémon. This may also make them flinch."
  },
  {
    name: "raindance",
    displayName: "Rain Dance",
    generation: 2,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description:
      "The user summons a heavy rain that falls for five turns, powering up Water-type attacks. The rain also lowers the power of Fire-type attacks."
  },
  {
    name: "sunnyday",
    displayName: "Sunny Day",
    generation: 2,
    type: TypeName.Fire,
    attackType: AttackType.Status,
    description:
      "The user intensifies the sun for five turns, powering up Fire-type attacks. The sunlight also lowers the power of Water-type attacks."
  },
  {
    name: "crunch",
    displayName: "Crunch",
    generation: 2,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat."
  },
  {
    name: "mirrorcoat",
    displayName: "Mirror Coat",
    generation: 2,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description: "A retaliatory attack that counters any special move, inflicting double the damage taken."
  },
  {
    name: "psychup",
    displayName: "Psych Up",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user hypnotizes itself into copying any stat change made by the target."
  },
  {
    name: "extremespeed",
    displayName: "Extreme Speed",
    generation: 2,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Arcanine",
    description: "The user charges the target at blinding speed. This move always goes first."
  },
  {
    name: "ancientpower",
    displayName: "Ancient Power",
    generation: 2,
    type: TypeName.Rock,
    attackType: AttackType.Special,
    description: "The user attacks with a prehistoric power. This may also boost all the user's stats at once."
  },
  {
    name: "shadowball",
    displayName: "Shadow Ball",
    generation: 2,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    description:
      "The user attacks by hurling a shadowy blob at the target. This may also lower the target's Sp. Def stat."
  },
  {
    name: "futuresight",
    displayName: "Future Sight",
    generation: 2,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description: "Two turns after this move is used, a hunk of psychic energy attacks the target."
  },
  {
    name: "rocksmash",
    displayName: "Rock Smash",
    generation: 2,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks with a punch. This may also lower the target's Defense stat."
  },
  {
    name: "whirlpool",
    displayName: "Whirlpool",
    generation: 2,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description:
      "The user traps the target inside a violent, swirling whirlpool that inflicts damage for four to five turns."
  },
  {
    name: "beatup",
    displayName: "Beat Up",
    generation: 2,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Sneasel",
    description:
      "The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks."
  }
];
