import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen5Moves: Move[] = [
  {
    name: "honeclaws",
    displayName: "Hone Claws",
    generation: 5,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user sharpens its claws to boost its Attack stat and accuracy."
  },
  {
    name: "wideguard",
    displayName: "Wide Guard",
    generation: 5,
    type: TypeName.Rock,
    attackType: AttackType.Status,
    description: "The user and its allies are protected from wide-ranging attacks for one turn."
  },
  {
    name: "guardsplit",
    displayName: "Guard Split",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user employs its psychic power to average its Defense and Sp. Def stats with those of the target."
  },
  {
    name: "powersplit",
    displayName: "Power Split",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target."
  },
  {
    name: "wonderroom",
    displayName: "Wonder Room",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns."
  },
  {
    name: "psyshock",
    displayName: "Psyshock",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description: "The user materializes an odd psychic wave to attack the target. This move deals physical damage."
  },
  {
    name: "venoshock",
    displayName: "Venoshock",
    generation: 5,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description:
      "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned."
  },
  {
    name: "autotomize",
    displayName: "Autotomize",
    generation: 5,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    description: "The user sheds part of its body to make itself lighter and sharply raise its Speed stat."
  },
  {
    name: "ragepowder",
    displayName: "Rage Powder",
    generation: 5,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    description:
      "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user."
  },
  {
    name: "telekinesis",
    displayName: "Telekinesis",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user makes the target float with its psychic power. The target is easier to hit for three turns."
  },
  {
    name: "magicroom",
    displayName: "Magic Room",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user creates a bizarre area in which Pokémon's held items lose their effects for five turns."
  },
  {
    name: "smackdown",
    displayName: "Smack Down",
    generation: 5,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "The user throws a stone or similar projectile to attack the target. If the target is in the air, it will be knocked down to the ground."
  },
  {
    name: "stormthrow",
    displayName: "Storm Throw",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks by striking the target with a fierce blow. This move always lands a critical hit."
  },
  {
    name: "flameburst",
    displayName: "Flame Burst",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with a bursting flame. The bursting flame damages Pokémon next to the target as well."
  },
  {
    name: "sludgewave",
    displayName: "Sludge Wave",
    generation: 5,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description:
      "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those it hits."
  },
  {
    name: "quiverdance",
    displayName: "Quiver Dance",
    generation: 5,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    description:
      "The user lightly performs a beautiful, mystic dance. This boosts the user's Sp. Atk, Sp. Def, and Speed stats."
  },
  {
    name: "heavyslam",
    displayName: "Heavy Slam",
    generation: 5,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description:
      "The user slams into the target with its heavy body. The more the user outweighs the target, the greater the move's power."
  },
  {
    name: "synchronoise",
    displayName: "Synchronoise",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description:
      "Using an odd shock wave, the user inflicts damage on any Pokémon of the same type in the area around it."
  },
  {
    name: "electroball",
    displayName: "Electro Ball",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user hurls an electric orb at the target. The faster the user is than the target, the greater the move's power."
  },
  {
    name: "soak",
    displayName: "Soak",
    generation: 5,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description: "The user shoots a torrent of water that changes the target's type to Water."
  },
  {
    name: "flamecharge",
    displayName: "Flame Charge",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    description:
      "Cloaking itself in flame, the user attacks the target. Then, building up momentum, the user boosts its Speed stat."
  },
  {
    name: "coil",
    displayName: "Coil",
    generation: 5,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description: "The user coils up and concentrates. This boosts its Attack and Defense stats as well as its accuracy."
  },
  {
    name: "lowsweep",
    displayName: "Low Sweep",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user makes a swift attack on the target's legs, which lowers the target's Speed stat."
  },
  {
    name: "acidspray",
    displayName: "Acid Spray",
    generation: 5,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description:
      "The user attacks by spitting fluid that works to melt the target. This also harshly lowers the target's Sp. Def stat."
  },
  {
    name: "foulplay",
    displayName: "Foul Play",
    generation: 5,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user turns the target's strength against it. The higher the target's Attack stat, the greater the damage this move inflicts."
  },
  {
    name: "simplebeam",
    displayName: "Simple Beam",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user emits a mysterious psychic wave that changes the target's Ability to Simple."
  },
  {
    name: "entrainment",
    displayName: "Entrainment",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's."
  },
  {
    name: "afteryou",
    displayName: "After You",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user helps the target and makes it use its move right after the user."
  },
  {
    name: "round",
    displayName: "Round",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with a song. If others use this move, they will act immediately after the initial user, and the power of their Rounds will be boosted."
  },
  {
    name: "echoedvoice",
    displayName: "Echoed Voice",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with an echoing voice. If this move is used consecutively by any Pokémon, its power is boosted."
  },
  {
    name: "chipaway",
    displayName: "Chip Away",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "Looking for an opening, the user strikes consistently. The target's stat changes don't affect this attack's damage."
  },
  {
    name: "clearsmog",
    displayName: "Clear Smog",
    generation: 5,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "The user attacks the target by throwing a clump of special mud. All stat changes are eliminated."
  },
  {
    name: "storedpower",
    displayName: "Stored Power",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with stored power. The more the user's stats are boosted, the greater the move's power."
  },
  {
    name: "quickguard",
    displayName: "Quick Guard",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Status,
    description: "The user protects itself and its allies from priority moves."
  },
  {
    name: "allyswitch",
    displayName: "Ally Switch",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user teleports using a strange power and switches places with one of its allies. This move's chance of failing rises if it is used in succession."
  },
  {
    name: "scald",
    displayName: "Scald",
    generation: 5,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description:
      "The user attacks by shooting boiling hot water at the target. This may also leave the target with a burn."
  },
  {
    name: "shellsmash",
    displayName: "Shell Smash",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user breaks its shell, which lowers its Defense and Sp. Def stats but sharply boosts its Attack, Sp. Atk, and Speed stats."
  },
  {
    name: "healpulse",
    displayName: "Heal Pulse",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user emits a healing pulse that restores the target's HP by up to half of its max HP."
  },
  {
    name: "hex",
    displayName: "Hex",
    generation: 5,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    description: "This relentless attack does massive damage to a target affected by status conditions."
  },
  {
    name: "skydrop",
    displayName: "Sky Drop",
    generation: 5,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description:
      "The user takes the target into the sky, then drops it during the next turn. The target cannot attack while in the sky."
  },
  {
    name: "shiftgear",
    displayName: "Shift Gear",
    generation: 5,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    signatureOf: "Klink, Klang, Klinklang",
    description: "The user rotates its gears, boosting its Attack stat and sharply boosting its Speed stat."
  },
  {
    name: "circlethrow",
    displayName: "Circle Throw",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Tarountula, Spidops",
    description:
      "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon."
  },
  {
    name: "incinerate",
    displayName: "Incinerate",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable."
  },
  {
    name: "quash",
    displayName: "Quash",
    generation: 5,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user suppresses the target and makes its move go last."
  },
  {
    name: "acrobatics",
    displayName: "Acrobatics",
    generation: 5,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description:
      "The user nimbly strikes the target. This attack does massive damage if the user isn't holding an item."
  },
  {
    name: "reflecttype",
    displayName: "Reflect Type",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user reflects the target's type to become the same type as the target."
  },
  {
    name: "retaliate",
    displayName: "Retaliate",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move's power is increased."
  },
  {
    name: "finalgambit",
    displayName: "Final Gambit",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Special,
    description:
      "The user risks everything to attack the target. The user faints but inflicts damage equal to its own HP."
  },
  {
    name: "bestow",
    displayName: "Bestow",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user passes its held item to the target when the target isn't holding an item."
  },
  {
    name: "inferno",
    displayName: "Inferno",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn."
  },
  {
    name: "waterpledge",
    displayName: "Water Pledge",
    generation: 5,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description:
      "A column of water hits the target. When used with its fire counterpart, this move's power is boosted and a rainbow appears."
  },
  {
    name: "firepledge",
    displayName: "Fire Pledge",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "A column of fire hits the target. When used with its grass counterpart, this move's power is boosted and a vast sea of fire appears."
  },
  {
    name: "grasspledge",
    displayName: "Grass Pledge",
    generation: 5,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description:
      "A column of grass hits the target. When used with its water counterpart, this move's power is boosted and a vast swamp appears."
  },
  {
    name: "voltswitch",
    displayName: "Volt Switch",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description: "After making its attack, the user rushes back to switch places with a party Pokémon in waiting."
  },
  {
    name: "strugglebug",
    displayName: "Struggle Bug",
    generation: 5,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    description: "The user attacks by struggling against opposing Pokémon. This also lowers their Sp. Atk stats."
  },
  {
    name: "bulldoze",
    displayName: "Bulldoze",
    generation: 5,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description:
      "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit."
  },
  {
    name: "frostbreath",
    displayName: "Frost Breath",
    generation: 5,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description: "The user attacks by blowing its cold breath on the target. This move always lands a critical hit."
  },
  {
    name: "dragontail",
    displayName: "Dragon Tail",
    generation: 5,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    description:
      "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon."
  },
  {
    name: "workup",
    displayName: "Work Up",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user is roused, and its Attack and Sp. Atk stats are boosted."
  },
  {
    name: "electroweb",
    displayName: "Electroweb",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user captures opposing Pokémon in an electric net to inflict damage. This also lowers their Speed stats."
  },
  {
    name: "wildcharge",
    displayName: "Wild Charge",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description:
      "The user shrouds itself in electricity and smashes into its target. This also damages the user a little."
  },
  {
    name: "drillrun",
    displayName: "Drill Run",
    generation: 5,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description:
      "The user crashes into the target while rotating its body like a drill. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "dualchop",
    displayName: "Dual Chop",
    generation: 5,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    description: "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row."
  },
  {
    name: "heartstamp",
    displayName: "Heart Stamp",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    description:
      "The user unleashes a vicious blow after its cute act makes the target less wary. This may also make the target flinch."
  },
  {
    name: "hornleech",
    displayName: "Horn Leech",
    generation: 5,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Sawsbuck",
    description:
      "The user drains the target's energy with its horns. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "sacredsword",
    displayName: "Sacred Sword",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Cobalion, Terrakion, Virizion, Keldeo",
    description:
      "The user attacks by slicing with a sword. The target's stat changes don't affect the damage inflicted by this move."
  },
  {
    name: "razorshell",
    displayName: "Razor Shell",
    generation: 5,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user cuts the target with sharp shells to inflict damage. This may also lower the target's Defense stat."
  },
  {
    name: "heatcrash",
    displayName: "Heat Crash",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Tepig, Pignite, Emboar, Rolycoly, Carkol, Coalossal",
    description:
      "The user slams into the target with its flame-covered body. The more the user outweighs the target, the greater the move's power."
  },
  {
    name: "leaftornado",
    displayName: "Leaf Tornado",
    generation: 5,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description:
      "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy."
  },
  {
    name: "steamroller",
    displayName: "Steamroller",
    generation: 5,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description:
      "The user crushes its target by rolling over the target with its rolled-up body. This may also make the target flinch."
  },
  {
    name: "cottonguard",
    displayName: "Cotton Guard",
    generation: 5,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "The user protects itself by wrapping its body in soft cotton, drastically boosting its Defense stat."
  },
  {
    name: "nightdaze",
    displayName: "Night Daze",
    generation: 5,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    signatureOf: "Zorua, Zoroark",
    description:
      "The user looses a pitch-black shock wave at the target to inflict damage. This may also lower the target's accuracy."
  },
  {
    name: "psystrike",
    displayName: "Psystrike",
    generation: 5,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Mewtwo",
    description: "The user materializes an odd psychic wave to attack the target. This move deals physical damage."
  },
  {
    name: "tailslap",
    displayName: "Tail Slap",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Minccino, Cinccino",
    description:
      "The user attacks by striking the target with its hard tail. This move hits two to five times in a row."
  },
  {
    name: "hurricane",
    displayName: "Hurricane",
    generation: 5,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    description: "The user attacks by wrapping its opponent in a fierce wind. This may also confuse the target."
  },
  {
    name: "headcharge",
    displayName: "Head Charge",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Bouffalant",
    description:
      "The user charges its head into the target, using its powerful guard hair. This also damages the user a little."
  },
  {
    name: "geargrind",
    displayName: "Gear Grind",
    generation: 5,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Klink, Klang, Klinklang",
    description: "The user attacks by throwing steel gears at the target twice in a row."
  },
  {
    name: "searingshot",
    displayName: "Searing Shot",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Victini",
    description:
      "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn."
  },
  {
    name: "technoblast",
    displayName: "Techno Blast",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    signatureOf: "Genesect",
    description:
      "The user attacks by firing a beam of light at the target. This move's type changes depending on the kind of drive held by the user."
  },
  {
    name: "relicsong",
    displayName: "Relic Song",
    generation: 5,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    signatureOf: "Meloetta",
    description:
      "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep."
  },
  {
    name: "secretsword",
    displayName: "Secret Sword",
    generation: 5,
    type: TypeName.Fighting,
    attackType: AttackType.Special,
    signatureOf: "Keldeo",
    description:
      "The user cuts with its long horn. The odd power contained in the horn deals physical damage to the target."
  },
  {
    name: "glaciate",
    displayName: "Glaciate",
    generation: 5,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    signatureOf: "Kyurem",
    description:
      "The user attacks by blowing freezing cold air at opposing Pokémon. This also lowers their Speed stats."
  },
  {
    name: "boltstrike",
    displayName: "Bolt Strike",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Zekrom",
    description:
      "The user surrounds itself with a great amount of electricity and charges its target. This may also leave the target with paralysis."
  },
  {
    name: "blueflare",
    displayName: "Blue Flare",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Reshiram",
    description:
      "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn."
  },
  {
    name: "fierydance",
    displayName: "Fiery Dance",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Volcarona",
    description:
      "Cloaked in flames, the user attacks the target by dancing and flapping its wings. This may also boost the user's Sp. Atk stat."
  },
  {
    name: "freezeshock",
    displayName: "Freeze Shock",
    generation: 5,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Black Kyurem",
    description:
      "The turn after using this move, the user hits the target with electrically charged ice to inflict damage. This may also leave the target with paralysis."
  },
  {
    name: "iceburn",
    displayName: "Ice Burn",
    generation: 5,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    signatureOf: "White Kyurem",
    description:
      "The turn after using this move, the user surrounds the target with an ultracold, freezing wind to inflict damage. This may also leave the target with a burn."
  },
  {
    name: "snarl",
    displayName: "Snarl",
    generation: 5,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    description:
      "The user yells as if it's ranting about something, which lowers the Sp. Atk stats of opposing Pokémon."
  },
  {
    name: "iciclecrash",
    displayName: "Icicle Crash",
    generation: 5,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "The user attacks by crashing large icicles onto the target. This may also make the target flinch."
  },
  {
    name: "vcreate",
    displayName: "V-Create",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Victini",
    description:
      "The user emits a hot flame from its forehead and hurls itself at the target to inflict damage. This also lowers the user's Defense, Sp. Def, and Speed stats."
  },
  {
    name: "fusionflare",
    displayName: "Fusion Flare",
    generation: 5,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Reshiram, White Kyurem",
    description:
      "The user brings down a giant flame. This move's power is boosted when influenced by an enormous lightning bolt."
  },
  {
    name: "fusionbolt",
    displayName: "Fusion Bolt",
    generation: 5,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Zekrom, Black Kyurem",
    description:
      "The user throws down a giant lightning bolt. This move's power is boosted when influenced by an enormous flame."
  }
];
