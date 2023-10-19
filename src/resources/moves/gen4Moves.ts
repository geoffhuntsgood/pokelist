import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen4Moves: Move[] = [
  {
    name: "roost",
    displayName: "Roost",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Status,
    description: "The user lands and rests its body. This move restores the user's HP by up to half its max HP."
  },
  {
    name: "gravity",
    displayName: "Gravity",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "Enables Flying types or Pokémon with the Levitate Ability to be hit by Ground-type moves for five turns. Moves that involve flying can't be used."
  },
  {
    name: "miracleeye",
    displayName: "Miracle Eye",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "Enables a Dark-type target to be hit by Psychic-type attacks. This also enables an evasive target to be hit."
  },
  {
    name: "wakeupslap",
    displayName: "Wake-Up Slap",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "This attack inflicts big damage on a sleeping target. This also wakes the target up, however."
  },
  {
    name: "hammerarm",
    displayName: "Hammer Arm",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user swings its strong, heavy fist at the target to inflict damage. This also lowers the user's Speed stat."
  },
  {
    name: "gyroball",
    displayName: "Gyro Ball",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description:
      "The user tackles the target with a high-speed spin. The slower the user is than the target, the greater the move's power."
  },
  {
    name: "healingwish",
    displayName: "Healing Wish",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user faints. In return, the Pokémon taking its place will have its HP restored and status conditions cured."
  },
  {
    name: "brine",
    displayName: "Brine",
    generation: 4,
    type: TypeName.Water,
    attackType: AttackType.Special,
    description: "This move's power is doubled if the target's HP is at half or less."
  },
  {
    name: "naturalgift",
    displayName: "Natural Gift",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user draws power to attack by using its held Berry. The Berry determines the move's type and power."
  },
  {
    name: "feint",
    displayName: "Feint",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "This attack can hit a target using a move such as Protect or Detect. This also lifts the effects of those moves."
  },
  {
    name: "pluck",
    displayName: "Pluck",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description:
      "The user attacks by pecking the target. If the target is holding a Berry, the user eats it and gains its effect."
  },
  {
    name: "tailwind",
    displayName: "Tailwind",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Status,
    description:
      "The user whips up a turbulent whirlwind that boosts the Speed stats of itself and its allies for four turns."
  },
  {
    name: "acupressure",
    displayName: "Acupressure",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user applies pressure to stress points, sharply boosting one of its or its allies' stats."
  },
  {
    name: "metalburst",
    displayName: "Metal Burst",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The user retaliates with much greater force against the opponent that last inflicted damage on it."
  },
  {
    name: "uturn",
    displayName: "U-turn",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "After making its attack, the user rushes back to switch places with a party Pokémon in waiting."
  },
  {
    name: "closecombat",
    displayName: "Close Combat",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user fights the target up close, inflicting damage without guarding itself. This also lowers the user's Defense and Sp. Def stats."
  },
  {
    name: "payback",
    displayName: "Payback",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The user stores power, then attacks. This move's power is doubled if the user moves after the target."
  },
  {
    name: "assurance",
    displayName: "Assurance",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "This move's power is doubled if the target has already taken some damage in the same turn."
  },
  {
    name: "embargo",
    displayName: "Embargo",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description:
      "This move prevents the target from using its held item for five turns. Its Trainer is also prevented from using items on it."
  },
  {
    name: "fling",
    displayName: "Fling",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user flings its held item at the target to attack. This move's power and effects depend on the item."
  },
  {
    name: "psychoshift",
    displayName: "Psycho Shift",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "Using its psychic power of suggestion, the user transfers its status conditions to the target."
  },
  {
    name: "trumpcard",
    displayName: "Trump Card",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The fewer PP this move has, the greater its power."
  },
  {
    name: "healblock",
    displayName: "Heal Block",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "For five turns, the user prevents the opposing team from using any moves, Abilities, or held items that recover HP."
  },
  {
    name: "wringout",
    displayName: "Wring Out",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Special,
    description: "The user powerfully wrings the target. The more HP the target has, the greater the move's power."
  },
  {
    name: "powertrick",
    displayName: "Power Trick",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Meditite, Medicham",
    description: "The user employs its psychic power to switch its Attack stat with its Defense stat."
  },
  {
    name: "gastroacid",
    displayName: "Gastro Acid",
    generation: 4,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description:
      "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability."
  },
  {
    name: "luckychant",
    displayName: "Lucky Chant",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user chants an incantation toward the sky, preventing opposing Pokémon from landing critical hits for five turns."
  },
  {
    name: "mefirst",
    displayName: "Me First",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user cuts ahead of the target to copy and use the target's intended move with greater power. This move fails if it isn't used first."
  },
  {
    name: "copycat",
    displayName: "Copycat",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user mimics the move used immediately before it. The move fails if no other move has been used yet."
  },
  {
    name: "powerswap",
    displayName: "Power Swap",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target."
  },
  {
    name: "guardswap",
    displayName: "Guard Swap",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target."
  },
  {
    name: "punishment",
    displayName: "Punishment",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The more the target has powered up with stat changes, the greater the move's power."
  },
  {
    name: "lastresort",
    displayName: "Last Resort",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "This move can be used only after the user has used all the other moves it knows in the battle."
  },
  {
    name: "worryseed",
    displayName: "Worry Seed",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    description:
      "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia."
  },
  {
    name: "suckerpunch",
    displayName: "Sucker Punch",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "This move enables the user to attack first. This move fails if the target is not readying an attack."
  },
  {
    name: "toxicspikes",
    displayName: "Toxic Spikes",
    generation: 4,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    description:
      "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle."
  },
  {
    name: "heartswap",
    displayName: "Heart Swap",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Manaphy",
    description: "The user employs its psychic power to switch stat changes with the target."
  },
  {
    name: "aquaring",
    displayName: "Aqua Ring",
    generation: 4,
    type: TypeName.Water,
    attackType: AttackType.Status,
    description: "The user envelops itself in a veil made of water. It regains some HP every turn."
  },
  {
    name: "magnetrise",
    displayName: "Magnet Rise",
    generation: 4,
    type: TypeName.Electric,
    attackType: AttackType.Status,
    description: "The user levitates using electrically generated magnetism for five turns."
  },
  {
    name: "flareblitz",
    displayName: "Flare Blitz",
    generation: 4,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    description:
      "The user cloaks itself in fire and charges the target to inflict damage. This also damages the user quite a lot and may leave the target with a burn."
  },
  {
    name: "forcepalm",
    displayName: "Force Palm",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description: "The target is attacked with a shock wave. This may also leave the target with paralysis."
  },
  {
    name: "aurasphere",
    displayName: "Aura Sphere",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Special,
    description:
      "The user lets loose a pulse of aura power from deep within its body at the target. This attack never misses."
  },
  {
    name: "rockpolish",
    displayName: "Rock Polish",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Status,
    description: "The user polishes its body to reduce drag. This sharply boosts the user's Speed stat."
  },
  {
    name: "poisonjab",
    displayName: "Poison Jab",
    generation: 4,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    description:
      "The target is stabbed with a tentacle, an arm, or the like steeped in poison. This may also poison the target."
  },
  {
    name: "darkpulse",
    displayName: "Dark Pulse",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    description: "The user releases a horrible aura imbued with ill intent. This may also make the target flinch."
  },
  {
    name: "nightslash",
    displayName: "Night Slash",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user slashes the target the instant an opportunity arises. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "aquatail",
    displayName: "Aqua Tail",
    generation: 4,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description: "The user attacks by swinging its tail as if it were a vicious wave in a raging storm."
  },
  {
    name: "seedbomb",
    displayName: "Seed Bomb",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The user attacks by slamming a barrage of hard-shelled seeds down on the target from above."
  },
  {
    name: "airslash",
    displayName: "Air Slash",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    description: "The user attacks with a blade of air that slices even the sky. This may also make the target flinch."
  },
  {
    name: "xscissor",
    displayName: "X-Scissor",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description:
      "The user slashes at the target by crossing its scythes, claws, or the like as if they were a pair of scissors."
  },
  {
    name: "bugbuzz",
    displayName: "Bug Buzz",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    description: "The user vibrates to generate a damaging sound wave. This may also lower the target's Sp. Def stat."
  },
  {
    name: "dragonpulse",
    displayName: "Dragon Pulse",
    generation: 4,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    description: "The target is attacked with a shock wave generated by the user's gaping mouth."
  },
  {
    name: "dragonrush",
    displayName: "Dragon Rush",
    generation: 4,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    description:
      "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch."
  },
  {
    name: "powergem",
    displayName: "Power Gem",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Special,
    description: "The user attacks with a ray of light that sparkles as if it were made of gemstones."
  },
  {
    name: "drainpunch",
    displayName: "Drain Punch",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Physical,
    description:
      "The user attacks with an energy-draining punch. The user's HP is restored by up to half the damage taken by the target."
  },
  {
    name: "vacuumwave",
    displayName: "Vacuum Wave",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Special,
    signatureOf: "Riolu, Lucario",
    description: "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first."
  },
  {
    name: "focusblast",
    displayName: "Focus Blast",
    generation: 4,
    type: TypeName.Fighting,
    attackType: AttackType.Special,
    description:
      "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat."
  },
  {
    name: "energyball",
    displayName: "Energy Ball",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description:
      "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat."
  },
  {
    name: "bravebird",
    displayName: "Brave Bird",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    description: "The user tucks in its wings and charges at a low altitude. This also damages the user quite a lot."
  },
  {
    name: "earthpower",
    displayName: "Earth Power",
    generation: 4,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    description:
      "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat."
  },
  {
    name: "switcheroo",
    displayName: "Switcheroo",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user trades held items with the target faster than the eye can follow."
  },
  {
    name: "gigaimpact",
    displayName: "Giga Impact",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user charges at the target using every bit of its power. The user can't move on the next turn."
  },
  {
    name: "nastyplot",
    displayName: "Nasty Plot",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    description: "The user stimulates its brain by thinking bad thoughts. This sharply boosts the user's Sp. Atk stat."
  },
  {
    name: "bulletpunch",
    displayName: "Bullet Punch",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Scizor",
    description: "The user strikes the target with tough punches as fast as bullets. This move always goes first."
  },
  {
    name: "avalanche",
    displayName: "Avalanche",
    generation: 4,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "This move's power is doubled if the target has inflicted damage on the user in the same turn."
  },
  {
    name: "iceshard",
    displayName: "Ice Shard",
    generation: 4,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first."
  },
  {
    name: "shadowclaw",
    displayName: "Shadow Claw",
    generation: 4,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description:
      "The user attacks by slashing the target with a sharp claw made from shadows. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "thunderfang",
    displayName: "Thunder Fang",
    generation: 4,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    description:
      "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis."
  },
  {
    name: "icefang",
    displayName: "Ice Fang",
    generation: 4,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    description: "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen."
  },
  {
    name: "firefang",
    displayName: "Fire Fang",
    generation: 4,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    description:
      "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn."
  },
  {
    name: "shadowsneak",
    displayName: "Shadow Sneak",
    generation: 4,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    description: "The user extends its shadow and attacks the target from behind. This move always goes first."
  },
  {
    name: "mudbomb",
    displayName: "Mud Bomb",
    generation: 4,
    type: TypeName.Ground,
    attackType: AttackType.Special,
    description: "The user launches a hard-packed mud ball to attack. This may also lower the target's accuracy."
  },
  {
    name: "psychocut",
    displayName: "Psycho Cut",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    description:
      "The user tears at the target with blades formed by psychic power. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "zenheadbutt",
    displayName: "Zen Headbutt",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    description:
      "The user focuses its willpower to its head and attacks the target. This may also make the target flinch."
  },
  {
    name: "mirrorshot",
    displayName: "Mirror Shot",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Special,
    description:
      "The user lets loose a flash of energy at the target from its polished body. This may also lower the target's accuracy."
  },
  {
    name: "flashcannon",
    displayName: "Flash Cannon",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Special,
    description:
      "The user gathers all its light energy and releases it at once. This may also lower the target's Sp. Def stat."
  },
  {
    name: "rockclimb",
    displayName: "Rock Climb",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description:
      "The user attacks the target by smashing into it with incredible force. This may also confuse the target."
  },
  {
    name: "defog",
    displayName: "Defog",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Status,
    description:
      "A strong wind blows away the target's barriers such as Reflect or Light Screen. This also lowers the target's evasiveness."
  },
  {
    name: "trickroom",
    displayName: "Trick Room",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description: "The user creates a bizarre area in which slower Pokémon get to move first for five turns."
  },
  {
    name: "dracometeor",
    displayName: "Draco Meteor",
    generation: 4,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    description:
      "Comets are summoned down from the sky onto the target. The recoil from this move harshly lowers the user’s Sp. Atk stat."
  },
  {
    name: "discharge",
    displayName: "Discharge",
    generation: 4,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also leave those hit by the attack with paralysis."
  },
  {
    name: "lavaplume",
    displayName: "Lava Plume",
    generation: 4,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn."
  },
  {
    name: "leafstorm",
    displayName: "Leaf Storm",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description:
      "The user whips up a storm of leaves around the target. The recoil from this move harshly lowers the user's Sp. Atk stat."
  },
  {
    name: "powerwhip",
    displayName: "Power Whip",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The user violently whirls its vines, tentacles, or the like to lash the target."
  },
  {
    name: "rockwrecker",
    displayName: "Rock Wrecker",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Rhyperior",
    description: "The user launches a huge boulder at the target to attack. The user can't move on the next turn."
  },
  {
    name: "crosspoison",
    displayName: "Cross Poison",
    generation: 4,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    signatureOf: "Eternatus",
    description:
      "A slashing attack with a poisonous blade that may also poison the target. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "gunkshot",
    displayName: "Gunk Shot",
    generation: 4,
    type: TypeName.Poison,
    attackType: AttackType.Physical,
    description: "The user shoots filthy garbage at the target to attack. This may also poison the target."
  },
  {
    name: "ironhead",
    displayName: "Iron Head",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The user slams the target with its steel-hard head. This may also make the target flinch."
  },
  {
    name: "magnetbomb",
    displayName: "Magnet Bomb",
    generation: 4,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The user launches steel bombs that stick to the target. This attack never misses."
  },
  {
    name: "stoneedge",
    displayName: "Stone Edge",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "The user stabs the target with sharpened stones. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "captivate",
    displayName: "Captivate",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "If any opposing Pokémon is the opposite gender of the user, it is charmed, which harshly lowers its Sp. Atk stat."
  },
  {
    name: "stealthrock",
    displayName: "Stealth Rock",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Status,
    description:
      "The user lays a trap of levitating stones around the opposing team. The trap damages opposing Pokémon that switch into battle."
  },
  {
    name: "grassknot",
    displayName: "Grass Knot",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    description:
      "The user snares the target with grass and trips it. The heavier the target, the greater the move's power."
  },
  {
    name: "chatter",
    displayName: "Chatter",
    generation: 4,
    type: TypeName.Flying,
    attackType: AttackType.Special,
    signatureOf: "Chatot",
    description: "The user attacks the target with sound waves of deafening chatter. This also confuses the target."
  },
  {
    name: "judgment",
    displayName: "Judgment",
    generation: 4,
    type: [
      TypeName.Bug,
      TypeName.Dark,
      TypeName.Dragon,
      TypeName.Electric,
      TypeName.Fairy,
      TypeName.Fighting,
      TypeName.Fire,
      TypeName.Flying,
      TypeName.Ghost,
      TypeName.Grass,
      TypeName.Ground,
      TypeName.Ice,
      TypeName.Normal,
      TypeName.Poison,
      TypeName.Psychic,
      TypeName.Rock,
      TypeName.Steel,
      TypeName.Water
    ],
    attackType: AttackType.Special,
    signatureOf: "Arceus",
    description:
      "The user releases countless shots of light at the target. This move's type changes depending on the kind of plate held by the user."
  },
  {
    name: "bugbite",
    displayName: "Bug Bite",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description: "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect."
  },
  {
    name: "chargebeam",
    displayName: "Charge Beam",
    generation: 4,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    description:
      "The user attacks the target with an electric charge. The residual electricity may also boost the user's Sp. Atk stat."
  },
  {
    name: "woodhammer",
    displayName: "Wood Hammer",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The user slams its rugged body into the target to attack. This also damages the user quite a lot."
  },
  {
    name: "aquajet",
    displayName: "Aqua Jet",
    generation: 4,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user lunges at the target to inflict damage, moving at blinding speed. This move always goes first."
  },
  {
    name: "attackorder",
    displayName: "Attack Order",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    signatureOf: "Vespiquen",
    description:
      "The user calls out its underlings to pummel the target. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "defendorder",
    displayName: "Defend Order",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    signatureOf: "Vespiquen",
    description: "The user calls out its underlings to shield its body, boosting its Defense and Sp. Def stats."
  },
  {
    name: "healorder",
    displayName: "Heal Order",
    generation: 4,
    type: TypeName.Bug,
    attackType: AttackType.Status,
    signatureOf: "Vespiquen",
    description: "The user calls out its underlings to heal it. The user regains up to half of its max HP."
  },
  {
    name: "headsmash",
    displayName: "Head Smash",
    generation: 4,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    description:
      "The user attacks the target with a hazardous, full-power headbutt. This also damages the user terribly."
  },
  {
    name: "doublehit",
    displayName: "Double Hit",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    description: "The user slams the target with a tail or the like. The target is hit twice in a row."
  },
  {
    name: "roaroftime",
    displayName: "Roar Of Time",
    generation: 4,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Dialga",
    description: "The user blasts the target with power that distorts even time. The user can't move on the next turn."
  },
  {
    name: "spacialrend",
    displayName: "Spacial Rend",
    generation: 4,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Palkia",
    description:
      "The user tears the target along with the space around it. This move has a heightened chance of landing a critical hit."
  },
  {
    name: "lunardance",
    displayName: "Lunar Dance",
    generation: 4,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Cresselia",
    description:
      "The user faints. In return, the Pokémon taking its place will have its HP and PP restored and its status conditions cured."
  },
  {
    name: "crushgrip",
    displayName: "Crush Grip",
    generation: 4,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Regigigas",
    description:
      "The target is crushed with great force. The more HP the target has left, the greater the move's power."
  },
  {
    name: "magmastorm",
    displayName: "Magma Storm",
    generation: 4,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Heatran",
    description: "The user traps the target inside a maelstrom of fire that inflicts damage for four to five turns."
  },
  {
    name: "darkvoid",
    displayName: "Dark Void",
    generation: 4,
    type: TypeName.Dark,
    attackType: AttackType.Status,
    signatureOf: "Darkrai",
    description: "Opposing Pokémon are dragged into a world of total darkness that puts them to sleep."
  },
  {
    name: "seedflare",
    displayName: "Seed Flare",
    generation: 4,
    type: TypeName.Grass,
    attackType: AttackType.Special,
    signatureOf: "Shaymin",
    description:
      "The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat."
  },
  {
    name: "ominouswind",
    displayName: "Ominous Wind",
    generation: 4,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    description:
      "The user blasts the target with a gust of repulsive wind. This may also raise all the user's stats at once."
  },
  {
    name: "shadowforce",
    displayName: "Shadow Force",
    generation: 4,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Giratina",
    description:
      "The user disappears on the first turn, then attacks on the next turn. This move hits even if the target protects itself."
  }
];
