import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen3Moves: Move[] = [
  {
    name: "fakeout",
    displayName: "Fake Out",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "This attack hits first and makes the target flinch. It works only on the first turn each time the user enters battle."
  },
  {
    name: "uproar",
    displayName: "Uproar",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep."
  },
  {
    name: "stockpile",
    displayName: "Stockpile",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user stores power and boosts its Defense and Sp. Def stats. This move can be used up to three times."
  },
  {
    name: "spitup",
    displayName: "Spit Up",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the move's power."
  },
  {
    name: "swallow",
    displayName: "Swallow",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The power stored using the move Stockpile is absorbed by the user to restore its own HP. The more power is stored, the more HP is restored."
  },
  {
    name: "heatwave",
    displayName: "Heat Wave",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave them with a burn."
  },
  {
    name: "hail",
    displayName: "Hail",
    generation: 3,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    description: "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice types."
  },
  {
    name: "torment",
    displayName: "Torment",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user torments and enrages the target, making it incapable of using the same move twice in a row."
  },
  {
    name: "flatter",
    displayName: "Flatter",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "Flattery is used to confuse the target. However, this also boosts the target's Sp. Atk stat."
  },
  {
    name: "willowisp",
    displayName: "Will-O-Wisp",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Status,
    description: "The user shoots a sinister flame at the target to inflict a burn."
  },
  {
    name: "memento",
    displayName: "Memento",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user faints. In return, the target's Attack and Sp. Atk stats are harshly lowered."
  },
  {
    name: "facade",
    displayName: "Facade",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "This move's power is doubled if the user is poisoned, burned, or paralyzed."
  },
  {
    name: "focuspunch",
    displayName: "Focus Punch",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user focuses its mind before launching a punch. This move fails if the user is hit before using the move."
  },
  {
    name: "smellingsalts",
    displayName: "Smelling Salts",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Makuhita, Hariyama",
    description:
      "This attack's power is doubled when used on a target with paralysis. This also cures the target's paralysis, however."
  },
  {
    name: "followme",
    displayName: "Follow Me",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user draws attention to itself, making all opposing Pokémon take aim only at the user."
  },
  {
    name: "naturepower",
    displayName: "Nature Power",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "This attack makes use of nature's power. Its effects vary depending on the user's environment."
  },
  {
    name: "charge",
    displayName: "Charge",
    generation: 3,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description:
      "The user becomes charged, boosting the power of the next Electric-type move it uses. This also boosts the user's Sp. Def stat."
  },
  {
    name: "taunt",
    displayName: "Taunt",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The target is taunted into a rage that allows it to use only attack moves for three turns."
  },
  {
    name: "helpinghand",
    displayName: "Helping Hand",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user assists an ally by boosting the power of that ally's attack."
  },
  {
    name: "trick",
    displayName: "Trick",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user catches the target off guard and swaps the target's held item with its own."
  },
  {
    name: "roleplay",
    displayName: "Role Play",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user mimics the target completely, copying the target's Ability."
  },
  {
    name: "wish",
    displayName: "Wish",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "One turn after this move is used, the user's or its replacement's HP is restored by up to half the user's max HP."
  },
  {
    name: "assist",
    displayName: "Assist",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Skitty",
    description: "The user hurriedly and randomly uses a move among those known by ally Pokémon."
  },
  {
    name: "ingrain",
    displayName: "Ingrain",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description:
      "The user lays roots that restore its own HP every turn. Because the user is now rooted, it can't switch out."
  },
  {
    name: "superpower",
    displayName: "Superpower",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks the target with great power. This also lowers the user's Attack and Defense stats."
  },
  {
    name: "magiccoat",
    displayName: "Magic Coat",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Spoink, Grumpig",
    description:
      "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves."
  },
  {
    name: "recycle",
    displayName: "Recycle",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user recycles a held item that has been used in battle so it can be used again."
  },
  {
    name: "revenge",
    displayName: "Revenge",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "This attack move's power is doubled if the user has been hurt by the opponent in the same turn."
  },
  {
    name: "brickbreak",
    displayName: "Brick Break",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user attacks with a swift chop. This move can also break barriers, such as Light Screen and Reflect."
  },
  {
    name: "yawn",
    displayName: "Yawn",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn."
  },
  {
    name: "knockoff",
    displayName: "Knock Off",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user slaps down the target's held item, making it unusable for that battle. This move does more damage if the target has a held item."
  },
  {
    name: "endeavor",
    displayName: "Endeavor",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user inflicts damage by cutting down the target's HP to roughly equal the user's HP."
  },
  {
    name: "eruption",
    displayName: "Eruption",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power."
  },
  {
    name: "skillswap",
    displayName: "Skill Swap",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user employs its psychic power to exchange Abilities with the target."
  },
  {
    name: "imprison",
    displayName: "Imprison",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "If opposing Pokémon know any move also known by the user, they are prevented from using it."
  },
  {
    name: "refresh",
    displayName: "Refresh",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user rests to cure itself of poisoning, a burn, or paralysis."
  },
  {
    name: "grudge",
    displayName: "Grudge",
    generation: 3,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description:
      "If the user faints, the user's grudge fully depletes the PP of the opponent's move that knocked it out."
  },
  {
    name: "snatch",
    displayName: "Snatch",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user steals the effects of any attempts to use a healing or stat-changing move."
  },
  {
    name: "secretpower",
    displayName: "Secret Power",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Audino",
    description: "The additional effects of this attack depend upon where it was used."
  },
  {
    name: "dive",
    displayName: "Dive",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description: "The user dives on the first turn, then floats up and attacks on the next turn."
  },
  {
    name: "armthrust",
    displayName: "Arm Thrust",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Makuhita, Hariyama",
    description: "The user attacks the target with open-palmed arm thrusts. This move hits two to five times in a row."
  },
  {
    name: "camouflage",
    displayName: "Camouflage",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Staryu",
    description:
      "The user's type is changed depending on its environment, such as at water's edge, in grass, or in a cave."
  },
  {
    name: "tailglow",
    displayName: "Tail Glow",
    generation: 3,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    signatureOf: "Volbeat",
    description: "The user stares at flashing lights to focus its mind, drastically raising its Sp. Atk stat."
  },
  {
    name: "lusterpurge",
    displayName: "Luster Purge",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Latios",
    description: "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat."
  },
  {
    name: "mistball",
    displayName: "Mist Ball",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Latias",
    description:
      "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat."
  },
  {
    name: "featherdance",
    displayName: "Feather Dance",
    generation: 3,
    type: TypeName.Flying,
    attackType: AttackType.Status,
    signatureOf: "Pidgey, Pidgeotto, Pidgeot",
    description: "The user covers the target's body with a mass of down that harshly lowers its Attack stat."
  },
  {
    name: "teeterdance",
    displayName: "Teeter Dance",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Spinda",
    description: "The user performs a wobbly dance that confuses every Pokémon around it."
  },
  {
    name: "blazekick",
    displayName: "Blaze Kick",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Blaziken",
    description:
      "The user launches a kick that has a heightened chance of landing a critical hit. This may also leave the target with a burn."
  },
  {
    name: "mudsport",
    displayName: "Mud Sport",
    generation: 3,
    type: TypeName.Ground,
    attackType: AttackType.Status,
    description: "The user kicks up mud on the battlefield. This weakens Electric-type moves for five turns."
  },
  {
    name: "iceball",
    displayName: "Ice Ball",
    generation: 3,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Spheal, Sealeo, Walrein",
    description: "The user attacks the target for five turns. The move's power increases each time it hits."
  },
  {
    name: "needlearm",
    displayName: "Needle Arm",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Cacnea, Cacturne",
    description: "The user attacks by wildly swinging its thorny arms. This may also make the target flinch."
  },
  {
    name: "slackoff",
    displayName: "Slack Off",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Slakoth, Slaking",
    description: "The user slacks off, restoring its own HP by up to half its max HP."
  },
  {
    name: "hypervoice",
    displayName: "Hyper Voice",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The user attacks by letting loose a horribly loud, resounding cry."
  },
  {
    name: "poisonfang",
    displayName: "Poison Fang",
    generation: 3,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    description: "The user bites the target with toxic fangs. This may also leave the target badly poisoned."
  },
  {
    name: "crushclaw",
    displayName: "Crush Claw",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Zangoose",
    description: "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat."
  },
  {
    name: "blastburn",
    displayName: "Blast Burn",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The target is razed by a fiery explosion. The user can't move on the next turn."
  },
  {
    name: "hydrocannon",
    displayName: "Hydro Cannon",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "The target is hit with a watery blast. The user can't move on the next turn."
  },
  {
    name: "meteormash",
    displayName: "Meteor Mash",
    generation: 3,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Lucario",
    description: "The target is hit with a hard punch fired like a meteor. This may also boost the user's Attack stat."
  },
  {
    name: "astonish",
    displayName: "Astonish",
    generation: 3,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description:
      "The user attacks the target by crying out in a startling fashion. This may also make the target flinch."
  },
  {
    name: "weatherball",
    displayName: "Weather Ball",
    generation: 3,
    type: [TypeName.Normal, TypeName.Fire, TypeName.Water, TypeName.Ice, TypeName.Rock],
    attackType: AttackType.Special,
    signatureOf: "Castform",
    description: "This move's type and power change depending on the weather at the time the move is used."
  },
  {
    name: "aromatherapy",
    displayName: "Aromatherapy",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "The user releases a soothing scent that heals all status conditions affecting the user's party."
  },
  {
    name: "faketears",
    displayName: "Fake Tears",
    generation: 3,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user feigns crying to fluster the target. This harshly lowers the target's Sp. Def stat."
  },
  {
    name: "aircutter",
    displayName: "Air Cutter",
    generation: 3,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    description:
      "The user launches razor-like wind to slash opposing Pokémon. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "overheat",
    displayName: "Overheat",
    generation: 3,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with all its might. The recoil from this move harshly lowers the user's Sp. Atk stat."
  },
  {
    name: "odorsleuth",
    displayName: "Odor Sleuth",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "Enables a Ghost-type target to be hit by Normal- and Fighting-type attacks. This also enables an evasive target to be hit."
  },
  {
    name: "rocktomb",
    displayName: "Rock Tomb",
    generation: 3,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "The user hurls boulders at the target to inflict damage. This also lowers the target's Speed stat by cutting off its movement."
  },
  {
    name: "silverwind",
    displayName: "Silver Wind",
    generation: 3,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    description:
      "The target is attacked with powdery scales blown by the wind. This may also raise all the user's stats."
  },
  {
    name: "metalsound",
    displayName: "Metal Sound",
    generation: 3,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    description: "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat."
  },
  {
    name: "grasswhistle",
    displayName: "Grass Whistle",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Roselia",
    description: "The user plays a pleasant melody that lulls the target into a deep sleep."
  },
  {
    name: "tickle",
    displayName: "Tickle",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user tickles the target into laughing, lowering its Attack and Defense stats."
  },
  {
    name: "cosmicpower",
    displayName: "Cosmic Power",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user absorbs a mystical power from space to boost its Defense and Sp. Def stats."
  },
  {
    name: "waterspout",
    displayName: "Water Spout",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Kyogre",
    description:
      "The user spouts water to damage opposing Pokémon. The lower the user's HP, the lower the move's power."
  },
  {
    name: "signalbeam",
    displayName: "Signal Beam",
    generation: 3,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    description: "The user attacks with a sinister beam of light. This may also confuse the target."
  },
  {
    name: "shadowpunch",
    displayName: "Shadow Punch",
    generation: 3,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description: "The user throws a punch from the shadows. This attack never misses."
  },
  {
    name: "extrasensory",
    displayName: "Extrasensory",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Nuzleaf",
    description: "The user attacks with an odd, unseeable power. This may also make the target flinch."
  },
  {
    name: "skyuppercut",
    displayName: "Sky Uppercut",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks the target with an uppercut thrown skyward with force."
  },
  {
    name: "sandtomb",
    displayName: "Sand Tomb",
    generation: 3,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description:
      "The user traps the target inside a harshly raging sandstorm that inflicts damage for four to five turns."
  },
  {
    name: "sheercold",
    displayName: "Sheer Cold",
    generation: 3,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description:
      "The target faints instantly. This move is less likely to hit the target if used by Pokémon other than Ice types."
  },
  {
    name: "muddywater",
    displayName: "Muddy Water",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Marshtomp, Swampert",
    description: "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy."
  },
  {
    name: "bulletseed",
    displayName: "Bullet Seed",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description:
      "The user attacks by forcefully shooting seeds at the target. This move hits two to five times in a row."
  },
  {
    name: "aerialace",
    displayName: "Aerial Ace",
    generation: 3,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The user confounds the target with speed, then slashes. This attack never misses."
  },
  {
    name: "iciclespear",
    displayName: "Icicle Spear",
    generation: 3,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Shellder, Cloyster",
    description: "The user attacks by launching sharp icicles at the target. This move hits two to five times in a row."
  },
  {
    name: "irondefense",
    displayName: "Iron Defense",
    generation: 3,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    description: "The user hardens its body's surface like iron, sharply boosting its Defense stat."
  },
  {
    name: "block",
    displayName: "Block",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user blocks the target's way with arms spread wide to prevent the target from fleeing."
  },
  {
    name: "howl",
    displayName: "Howl",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user howls loudly to rouse itself and its allies. This boosts their Attack stats."
  },
  {
    name: "dragonclaw",
    displayName: "Dragon Claw",
    generation: 3,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    description: "The user slashes the target with huge, sharp claws to inflict damage."
  },
  {
    name: "frenzyplant",
    displayName: "Frenzy Plant",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "The user slams the target with the roots of an enormous tree. The user can't move on the next turn."
  },
  {
    name: "bulkup",
    displayName: "Bulk Up",
    generation: 3,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    description: "The user tenses its muscles to bulk up its body, boosting its Attack and Defense stats."
  },
  {
    name: "bounce",
    displayName: "Bounce",
    generation: 3,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description:
      "The user bounces up high on the first turn, then drops onto the target on the next turn. This may also leave the target with paralysis."
  },
  {
    name: "mudshot",
    displayName: "Mud Shot",
    generation: 3,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    description: "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat."
  },
  {
    name: "poisontail",
    displayName: "Poison Tail",
    generation: 3,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Seviper",
    description:
      "The user hits the target with its tail. This move has a heightened chance of landing a critical hit and may also poison the target."
  },
  {
    name: "covet",
    displayName: "Covet",
    generation: 3,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user endearingly approaches the target, then steals the target's held item."
  },
  {
    name: "volttackle",
    displayName: "Volt Tackle",
    generation: 3,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Pichu, Pikachu, Raichu, Alolan Raichu",
    description:
      "The user electrifies itself and charges the target to inflict damage. This also damages the user quite a lot and may leave the target with paralysis."
  },
  {
    name: "magicalleaf",
    displayName: "Magical Leaf",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "The user scatters curious leaves that chase the target. This attack never misses."
  },
  {
    name: "watersport",
    displayName: "Water Sport",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description: "The user soaks the battlefield with water. This weakens Fire-type moves for five turns."
  },
  {
    name: "calmmind",
    displayName: "Calm Mind",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user quietly focuses its mind and calms its spirit to boost its Sp. Atk and Sp. Def stats."
  },
  {
    name: "leafblade",
    displayName: "Leaf Blade",
    generation: 3,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Grovyle, Sceptile",
    description:
      "The user handles a sharp leaf like a sword and cuts the target to inflict damage. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "dragondance",
    displayName: "Dragon Dance",
    generation: 3,
    type: TypeName.Dragon,
    attackType: AttackType.Status,
    description: "The user vigorously performs a mystic, powerful dance that raises its Attack and Speed stats."
  },
  {
    name: "rockblast",
    displayName: "Rock Blast",
    generation: 3,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description: "The user attacks by hurling hard rocks at the target. This move hits two to five times in a row."
  },
  {
    name: "shockwave",
    displayName: "Shock Wave",
    generation: 3,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description: "The user strikes the target with a quick jolt of electricity. This attack never misses."
  },
  {
    name: "waterpulse",
    displayName: "Water Pulse",
    generation: 3,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "The user attacks the target with a pulsing blast of water. This may also confuse the target."
  },
  {
    name: "doomdesire",
    displayName: "Doom Desire",
    generation: 3,
    type: TypeName.Steel,
    attackType: AttackType.Special,
    signatureOf: "Jirachi",
    description: "Two turns after this move is used, a concentrated bundle of light blasts the target."
  },
  {
    name: "psychoboost",
    displayName: "Psycho Boost",
    generation: 3,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Deoxys",
    description:
      "The user attacks the target at full power. The attack's recoil harshly lowers the user's Sp. Atk stat."
  }
];
