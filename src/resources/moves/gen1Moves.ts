import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen1Moves: Move[] = [
  {
    name: "pound",
    displayName: "Pound",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is physically pounded with a long tail, a foreleg, or the like."
  },
  {
    name: "karatechop",
    displayName: "Karate Chop",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The target is attacked with a sharp chop. Critical hits land more easily."
  },
  {
    name: "doubleslap",
    displayName: "Double Slap",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is slapped repeatedly, back and forth, two to five times in a row."
  },
  {
    name: "cometpunch",
    displayName: "Comet Punch",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is hit with a flurry of punches that strike two to five times in a row."
  },
  {
    name: "megapunch",
    displayName: "Mega Punch",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is slugged by a punch thrown with muscle-packed power."
  },
  {
    name: "payday",
    displayName: "Pay Day",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Meowth, Alolan Meowth, Galarian Meowth, Persian, Alolan Persian, Perrserker",
    description: "Coins are hurled at the target to inflict damage. Money is earned after the battle."
  },
  {
    name: "firepunch",
    displayName: "Fire Punch",
    generation: 1,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    description: "The target is attacked with a fiery punch. This may also leave the target with a burn."
  },
  {
    name: "icepunch",
    displayName: "Ice Punch",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "The target is attacked with an icy punch. This may also leave the target frozen."
  },
  {
    name: "thunderpunch",
    displayName: "Thunder Punch",
    generation: 1,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description: "The target is attacked with an electrified punch. This may also leave the target with paralysis."
  },
  {
    name: "scratch",
    displayName: "Scratch",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "Hard, pointed, sharp claws rake the target to inflict damage."
  },
  {
    name: "visegrip",
    displayName: "Vise Grip",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is gripped and squeezed from both sides to inflict damage."
  },
  {
    name: "guillotine",
    displayName: "Guillotine",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A vicious tearing attack with big pincers. The target faints instantly if this attack hits."
  },
  {
    name: "razorwind",
    displayName: "Razor Wind",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "In this two-turn attack, blades of wind hit opposing Pokémon on the second turn. Critical hits land more easily."
  },
  {
    name: "swordsdance",
    displayName: "Swords Dance",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "A frenetic dance to uplift the fighting spirit. This sharply boosts the user's Attack stat."
  },
  {
    name: "cut",
    displayName: "Cut",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is cut with a scythe, a claw, or the like to inflict damage."
  },
  {
    name: "gust",
    displayName: "Gust",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    description: "A gust of wind is whipped up by wings and launched at the target to inflict damage."
  },
  {
    name: "wingattack",
    displayName: "Wing Attack",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The target is struck with large, imposing wings spread wide to inflict damage."
  },
  {
    name: "whirlwind",
    displayName: "Whirlwind",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The target is blown away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon."
  },
  {
    name: "fly",
    displayName: "Fly",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The user flies up into the sky on the first turn, then attacks on the next turn."
  },
  {
    name: "bind",
    displayName: "Bind",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A long body, tentacles, or the like are used to bind and squeeze the target for four to five turns."
  },
  {
    name: "slam",
    displayName: "Slam",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is slammed with a long tail, vines, or the like to inflict damage."
  },
  {
    name: "vinewhip",
    displayName: "Vine Whip",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The target is struck with slender, whiplike vines to inflict damage."
  },
  {
    name: "stomp",
    displayName: "Stomp",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user attacks by stomping on the target with a big foot. This may also make the target flinch."
  },
  {
    name: "doublekick",
    displayName: "Double Kick",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user attacks by kicking the target twice in a row using two feet."
  },
  {
    name: "megakick",
    displayName: "Mega Kick",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Hitmonlee",
    description: "The target is attacked by a kick launched with muscle-packed power."
  },
  {
    name: "jumpkick",
    displayName: "Jump Kick",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hitmonlee",
    description: "The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself."
  },
  {
    name: "rollingkick",
    displayName: "Rolling Kick",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hitmonlee, Hitmontop",
    description: "The user lashes out with a quick, spinning kick. This may also make the target flinch."
  },
  {
    name: "sandattack",
    displayName: "Sand Attack",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Status,
    description: "Sand is hurled in the target's face, lowering the target's accuracy."
  },
  {
    name: "headbutt",
    displayName: "Headbutt",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch."
  },
  {
    name: "hornattack",
    displayName: "Horn Attack",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The target is jabbed with a sharply pointed horn to inflict damage."
  },
  {
    name: "furyattack",
    displayName: "Fury Attack",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user attacks by jabbing the target with a horn, a beak, or the like. This move hits two to five times in a row."
  },
  {
    name: "horndrill",
    displayName: "Horn Drill",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits."
  },
  {
    name: "tackle",
    displayName: "Tackle",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A physical attack in which the user charges and slams into the target with its whole body."
  },
  {
    name: "bodyslam",
    displayName: "Body Slam",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user attacks by dropping onto the target with its full body weight. This may also leave the target with paralysis."
  },
  {
    name: "wrap",
    displayName: "Wrap",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A long body, vines, or the like are used to wrap and squeeze the target for four to five turns."
  },
  {
    name: "takedown",
    displayName: "Take Down",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A reckless full-body charge attack for slamming into the target. This also damages the user a little."
  },
  {
    name: "thrash",
    displayName: "Thrash",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user rampages and attacks for two to three turns. The user then becomes confused."
  },
  {
    name: "doubleedge",
    displayName: "Double-Edge",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "A reckless life-risking tackle in which the user rushes the target. This also damages the user quite a lot."
  },
  {
    name: "tailwhip",
    displayName: "Tail Whip",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user wags its tail cutely, making opposing Pokémon less wary. This lowers their Defense stats."
  },
  {
    name: "poisonsting",
    displayName: "Poison Sting",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    description:
      "The user stabs the target with a poisonous stinger to inflict damage. This may also poison the target."
  },
  {
    name: "twineedle",
    displayName: "Twineedle",
    generation: 1,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    signatureOf: "Beedrill",
    description:
      "The user damages the target twice in succession by jabbing it with two spikes. This may also poison the target."
  },
  {
    name: "pinmissile",
    displayName: "Pin Missile",
    generation: 1,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "The user attacks by shooting sharp spikes at the target. This move hits two to five times in a row."
  },
  {
    name: "leer",
    displayName: "Leer",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user gives opposing Pokémon an intimidating leer that lowers their Defense stats."
  },
  {
    name: "bite",
    displayName: "Bite",
    generation: 1,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The target is bitten with viciously sharp fangs. This may also make the target flinch."
  },
  {
    name: "growl",
    displayName: "Growl",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stats."
  },
  {
    name: "roar",
    displayName: "Roar",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The target is scared off, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon."
  },
  {
    name: "sing",
    displayName: "Sing",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "A soothing lullaby is sung in a beautiful voice that puts the target to sleep."
  },
  {
    name: "supersonic",
    displayName: "Supersonic",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user generates odd sound waves from its body that confuse the target."
  },
  {
    name: "sonicboom",
    displayName: "Sonic Boom",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The target is hit with a destructive shock wave that always inflicts 20 HP damage."
  },
  {
    name: "disable",
    displayName: "Disable",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "For four turns, the target will be unable to use whichever move it last used."
  },
  {
    name: "acid",
    displayName: "Acid",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats."
  },
  {
    name: "ember",
    displayName: "Ember",
    generation: 1,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The target is attacked with small flames. This may also leave the target with a burn."
  },
  {
    name: "flamethrower",
    displayName: "Flamethrower",
    generation: 1,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The target is scorched with an intense blast of fire. This may also leave the target with a burn."
  },
  {
    name: "mist",
    displayName: "Mist",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    description:
      "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns."
  },
  {
    name: "watergun",
    displayName: "Water Gun",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "The target is blasted with a forceful shot of water."
  },
  {
    name: "hydropump",
    displayName: "Hydro Pump",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "The target is blasted by a huge volume of water launched under great pressure."
  },
  {
    name: "surf",
    displayName: "Surf",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "The user attacks everything around it by swamping its surroundings with a giant wave."
  },
  {
    name: "icebeam",
    displayName: "Ice Beam",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description: "The target is struck with an icy-cold beam of energy. This may also leave the target frozen."
  },
  {
    name: "blizzard",
    displayName: "Blizzard",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description:
      "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen."
  },
  {
    name: "psybeam",
    displayName: "Psybeam",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description: "The target is attacked with a peculiar ray. This may also confuse the target."
  },
  {
    name: "bubblebeam",
    displayName: "Bubble Beam",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat."
  },
  {
    name: "aurorabeam",
    displayName: "Aurora Beam",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    description: "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat."
  },
  {
    name: "hyperbeam",
    displayName: "Hyper Beam",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The target is attacked with a powerful beam. The user can't move on the next turn."
  },
  {
    name: "peck",
    displayName: "Peck",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The target is jabbed with a sharply pointed beak or horn to inflict damage."
  },
  {
    name: "drillpeck",
    displayName: "Drill Peck",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "A corkscrewing attack that strikes the target with a sharp beak acting as a drill."
  },
  {
    name: "submission",
    displayName: "Submission",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The user grabs the target and recklessly dives for the ground. This also damages the user a little."
  },
  {
    name: "lowkick",
    displayName: "Low Kick",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power."
  },
  {
    name: "counter",
    displayName: "Counter",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "A retaliatory attack that counters any physical move, inflicting double the damage taken."
  },
  {
    name: "seismictoss",
    displayName: "Seismic Toss",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The target is thrown using the power of gravity. It inflicts damage equal to the user's level."
  },
  {
    name: "strength",
    displayName: "Strength",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Machamp",
    description: "The target is slugged with a punch thrown at maximum power."
  },
  {
    name: "absorb",
    displayName: "Absorb",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "megadrain",
    displayName: "Mega Drain",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "leechseed",
    displayName: "Leech Seed",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "A seed is planted on the target. It steals some HP from the target every turn."
  },
  {
    name: "growth",
    displayName: "Growth",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user's body grows all at once, boosting the Attack and Sp. Atk stats."
  },
  {
    name: "razorleaf",
    displayName: "Razor Leaf",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description:
      "Sharp-edged leaves are launched to slash at opposing Pokémon. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "solarbeam",
    displayName: "Solar Beam",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description: "The user gathers light on the first turn, then blasts a bundled beam on the next turn."
  },
  {
    name: "poisonpowder",
    displayName: "Poison Powder",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description: "The user scatters a cloud of poisonous dust that poisons the target."
  },
  {
    name: "stunspore",
    displayName: "Stun Spore",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "The user scatters a cloud of numbing powder that paralyzes the target."
  },
  {
    name: "sleeppowder",
    displayName: "Sleep Powder",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description: "The user scatters a cloud of soporific dust that puts the target to sleep."
  },
  {
    name: "petaldance",
    displayName: "Petal Dance",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    signatureOf: "Oddish, Gloom, Vileplume",
    description:
      "The user attacks the target by scattering petals for two to three turns. The user then becomes confused."
  },
  {
    name: "stringshot",
    displayName: "String Shot",
    generation: 1,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    description: "The user blows silk from its mouth that binds opposing Pokémon and harshly lowers their Speed stats."
  },
  {
    name: "dragonrage",
    displayName: "Dragon Rage",
    generation: 1,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    description: "This attack hits the target with a shock wave of pure rage. This attack always inflicts 40 HP damage."
  },
  {
    name: "firespin",
    displayName: "Fire Spin",
    generation: 1,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description: "The user traps the target inside a fierce vortex of fire that inflicts damage for four to five turns."
  },
  {
    name: "thundershock",
    displayName: "Thunder Shock",
    generation: 1,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with a jolt of electricity. This may also leave the target with paralysis."
  },
  {
    name: "thunderbolt",
    displayName: "Thunderbolt",
    generation: 1,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with a strong electric blast. This may also leave the target with paralysis."
  },
  {
    name: "thunderwave",
    displayName: "Thunder Wave",
    generation: 1,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description: "The user launches a weak jolt of electricity that paralyzes the target."
  },
  {
    name: "thunder",
    displayName: "Thunder",
    generation: 1,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis."
  },
  {
    name: "rockthrow",
    displayName: "Rock Throw",
    generation: 1,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description: "The user picks up and throws a small rock at the target to inflict damage."
  },
  {
    name: "earthquake",
    displayName: "Earthquake",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description: "The user sets off an earthquake that strikes every Pokémon around it."
  },
  {
    name: "fissure",
    displayName: "Fissure",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Diglett, Dugtrio",
    description:
      "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits."
  },
  {
    name: "dig",
    displayName: "Dig",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description: "The user burrows into the ground on the first turn, then attacks on the next turn."
  },
  {
    name: "toxic",
    displayName: "Toxic",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description: "A move that leaves the target badly poisoned. Its poison damage worsens every turn."
  },
  {
    name: "confusion",
    displayName: "Confusion",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description: "The target is hit with a weak telekinetic force to inflict damage. This may also confuse the target."
  },
  {
    name: "psychic",
    displayName: "Psychic",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description:
      "The target is hit with a strong telekinetic force to inflict damage. This may also lower the target's Sp. Def stat."
  },
  {
    name: "hypnosis",
    displayName: "Hypnosis",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user employs hypnotic suggestion to make the target fall asleep."
  },
  {
    name: "meditate",
    displayName: "Meditate",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user meditates to awaken the power deep within its body and raise its Attack stat."
  },
  {
    name: "agility",
    displayName: "Agility",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user relaxes and lightens its body to move faster. This sharply boosts its Speed stat."
  },
  {
    name: "quickattack",
    displayName: "Quick Attack",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user lunges at the target to inflict damage, moving at blinding speed. This move always goes first."
  },
  {
    name: "rage",
    displayName: "Rage",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "As long as this move is in use, the power of Rage raises the Attack stat each time the user is hit in battle."
  },
  {
    name: "teleport",
    displayName: "Teleport",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Ralts, Kirlia, Gardevoir, Gallade",
    description:
      "The user switches places with a party Pokémon in waiting, if any. If a wild Pokémon uses this move, it flees."
  },
  {
    name: "nightshade",
    displayName: "Night Shade",
    generation: 1,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Gastly, Haunter, Gengar",
    description: "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level."
  },
  {
    name: "mimic",
    displayName: "Mimic",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Sudowoodo",
    description:
      "The user copies the move last used by the target. The copied move can be used until the user of Mimic leaves the battle."
  },
  {
    name: "screech",
    displayName: "Screech",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "An earsplitting screech harshly lowers the target's Defense stat."
  },
  {
    name: "doubleteam",
    displayName: "Double Team",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "By moving rapidly, the user makes illusory copies of itself to boost its evasiveness."
  },
  {
    name: "recover",
    displayName: "Recover",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user regenerates its cells, restoring its own HP by up to half its max HP."
  },
  {
    name: "harden",
    displayName: "Harden",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user stiffens all the muscles in its body to boost its Defense stat."
  },
  {
    name: "minimize",
    displayName: "Minimize",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user compresses its body to make itself look smaller, which sharply boosts its evasiveness."
  },
  {
    name: "smokescreen",
    displayName: "Smokescreen",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy."
  },
  {
    name: "confuseray",
    displayName: "Confuse Ray",
    generation: 1,
    type: TypeName.Ghost,
    attackType: AttackType.Status,
    description: "The target is exposed to a sinister ray that causes confusion."
  },
  {
    name: "withdraw",
    displayName: "Withdraw",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description: "The user withdraws its body into its hard shell, boosting its Defense stat."
  },
  {
    name: "defensecurl",
    displayName: "Defense Curl",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user curls up and boosts its Defense stat."
  },
  {
    name: "barrier",
    displayName: "Barrier",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user throws up a sturdy wall that sharply raises its Defense stat."
  },
  {
    name: "lightscreen",
    displayName: "Light Screen",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "A wondrous wall of light is put up to reduce damage from special moves for five turns."
  },
  {
    name: "haze",
    displayName: "Haze",
    generation: 1,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    description: "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle."
  },
  {
    name: "reflect",
    displayName: "Reflect",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "A wondrous wall of light is put up to reduce damage from physical moves for five turns."
  },
  {
    name: "focusenergy",
    displayName: "Focus Energy",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user takes a deep breath and focuses so that its future attacks have a heightened chance of landing critical hits."
  },
  {
    name: "bide",
    displayName: "Bide",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user endures attacks for two turns, then strikes back to cause double the damage taken."
  },
  {
    name: "metronome",
    displayName: "Metronome",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user waggles a finger and stimulates its brain into randomly using nearly any move."
  },
  {
    name: "mirrormove",
    displayName: "Mirror Move",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Status,
    description: "The user counters the target by mimicking the target's last move."
  },
  {
    name: "selfdestruct",
    displayName: "Self-Destruct",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user attacks everything around it by causing an explosion. The user faints upon using this move."
  },
  {
    name: "eggbomb",
    displayName: "Egg Bomb",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "A large egg is hurled at the target with maximum force to inflict damage."
  },
  {
    name: "lick",
    displayName: "Lick",
    generation: 1,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description:
      "The user licks the target with a long tongue to inflict damage. This may also leave the target with paralysis."
  },
  {
    name: "smog",
    displayName: "Smog",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "The target is attacked with a discharge of filthy gases. This may also poison the target."
  },
  {
    name: "sludge",
    displayName: "Sludge",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Special,
    description: "The user hurls unsanitary sludge at the target to inflict damage. This may also poison the target."
  },
  {
    name: "boneclub",
    displayName: "Bone Club",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Cubone, Marowak, Alolan Marowak",
    description: "The user clubs the target with a bone. This may also make the target flinch."
  },
  {
    name: "fireblast",
    displayName: "Fire Blast",
    generation: 1,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn."
  },
  {
    name: "waterfall",
    displayName: "Waterfall",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Goldeen, Seaking",
    description: "The user charges at the target and may make it flinch."
  },
  {
    name: "clamp",
    displayName: "Clamp",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Shellder, Cloyster",
    description: "The target is clamped and squeezed by the user's very thick and sturdy shell for four to five turns."
  },
  {
    name: "swift",
    displayName: "Swift",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "Star-shaped rays are shot at opposing Pokémon. This attack never misses."
  },
  {
    name: "skullbash",
    displayName: "Skull Bash",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Squirtle, Wartortle, Blastoise",
    description:
      "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn."
  },
  {
    name: "spikecannon",
    displayName: "Spike Cannon",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row."
  },
  {
    name: "constrict",
    displayName: "Constrict",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The target is attacked with long, creeping tentacles, vines, or the like. This may also lower the target's Speed stat."
  },
  {
    name: "amnesia",
    displayName: "Amnesia",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user temporarily empties its mind to forget its concerns. This sharply boosts the user's Sp. Def stat."
  },
  {
    name: "kinesis",
    displayName: "Kinesis",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Kadabra, Alakazam",
    description: "The user distracts the target by bending a spoon. This lowers the target's accuracy."
  },
  {
    name: "softboiled",
    displayName: "Soft-Boiled",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Happiny, Chansey, Blissey",
    description: "The user restores its own HP by up to half its max HP."
  },
  {
    name: "highjumpkick",
    displayName: "High Jump Kick",
    generation: 1,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    signatureOf: "Hitmonlee",
    description:
      "The target is attacked with a knee kick from a jump. If this move misses, the user takes damage instead."
  },
  {
    name: "glare",
    displayName: "Glare",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Ekans, Arbok",
    description: "The user intimidates the target with the pattern on its belly to cause paralysis."
  },
  {
    name: "dreameater",
    displayName: "Dream Eater",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    description:
      "The user eats the dreams of a sleeping target. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "poisongas",
    displayName: "Poison Gas",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description: "A cloud of poison gas is sprayed in the faces of opposing Pokémon, poisoning those it hits."
  },
  {
    name: "barrage",
    displayName: "Barrage",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Exeggcute, Exeggutor, Alolan Exeggutor",
    description: "Round objects are hurled at the target to strike two to five times in a row."
  },
  {
    name: "leechlife",
    displayName: "Leech Life",
    generation: 1,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description:
      "The user drains the target's blood. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "lovelykiss",
    displayName: "Lovely Kiss",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Jynx",
    description: "With a scary face, the user tries to kiss the target. If it succeeds, the target falls asleep."
  },
  {
    name: "skyattack",
    displayName: "Sky Attack",
    generation: 1,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    signatureOf: "Moltres",
    description:
      "The user attacks the turn after using this move. This move has a heightened chance of landing a critical hit and may also make the target flinch."
  },
  {
    name: "transform",
    displayName: "Transform",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user transforms into a copy of the target, right down to having the same move set."
  },
  {
    name: "bubble",
    displayName: "Bubble",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "A spray of countless bubbles is jetted at the opposing Pokémon. This may also lower their Speed stat."
  },
  {
    name: "dizzypunch",
    displayName: "Dizzy Punch",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Kangaskhan",
    description: "The target is hit with rhythmically launched punches. This may also leave the target confused."
  },
  {
    name: "spore",
    displayName: "Spore",
    generation: 1,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Paras, Parasect",
    description: "The user scatters bursts of spores that induce sleep."
  },
  {
    name: "flash",
    displayName: "Flash",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user flashes a light that lowers the target's accuracy. It can also be used to illuminate caves."
  },
  {
    name: "psywave",
    displayName: "Psywave",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Misdreavus",
    description: "The target is attacked with an odd psychic wave. The attack varies in intensity."
  },
  {
    name: "splash",
    displayName: "Splash",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Magikarp",
    description: "The user just flops and splashes around to no effect at all..."
  },
  {
    name: "acidarmor",
    displayName: "Acid Armor",
    generation: 1,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description: "The user alters its cellular structure to liquefy itself, sharply boosting its Defense stat."
  },
  {
    name: "crabhammer",
    displayName: "Crabhammer",
    generation: 1,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    signatureOf: "Krabby, Kingler",
    description:
      "The target is hammered with a large pincer. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "explosion",
    displayName: "Explosion",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move."
  },
  {
    name: "furyswipes",
    displayName: "Fury Swipes",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user attacks by raking the target with claws, scythes, or the like. This move hits two to five times in a row."
  },
  {
    name: "bonemerang",
    displayName: "Bonemerang",
    generation: 1,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    signatureOf: "Cubone, Marowak, Alolan Marowak",
    description: "The user throws the bone it holds. The bone loops around to damage the target twice—coming and going."
  },
  {
    name: "rest",
    displayName: "Rest",
    generation: 1,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user goes to sleep for two turns. This fully restores the user's HP and cures any status conditions."
  },
  {
    name: "rockslide",
    displayName: "Rock Slide",
    generation: 1,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch."
  },
  {
    name: "hyperfang",
    displayName: "Hyper Fang",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Rattata, Raticate",
    description: "The user bites hard on the target with its sharp front fangs. This may also make the target flinch."
  },
  {
    name: "sharpen",
    displayName: "Sharpen",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Porygon",
    description: "The user makes its edges more jagged, which raises its Attack stat."
  },
  {
    name: "conversion",
    displayName: "Conversion",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Porygon, Porygon2, Porygon-Z",
    description:
      "The user changes its type to become the same type as the move at the top of the list of moves it knows."
  },
  {
    name: "triattack",
    displayName: "Tri Attack",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description:
      "The user strikes with a simultaneous three-beam attack. This may also burn, freeze, or paralyze the target."
  },
  {
    name: "superfang",
    displayName: "Super Fang",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Rattata, Raticate",
    description: "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half."
  },
  {
    name: "slash",
    displayName: "Slash",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The target is attacked with a slash of claws, scythes, or the like. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "substitute",
    displayName: "Substitute",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Mr. Mime",
    description:
      "The user creates a substitute for itself using some of its own HP. The substitute serves as the user's decoy."
  },
  {
    name: "struggle",
    displayName: "Struggle",
    generation: 1,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "This attack is used in desperation only if the user has no remaining PP. It also damages the user a little."
  }
];
