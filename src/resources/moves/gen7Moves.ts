import { Move } from "../../classes";
import { AttackType, TypeName } from "../../enums";

export const gen7Moves: Move[] = [
  {
    name: "breakneckblitz",
    displayName: "Breakneck Blitz",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.ZMove,
    description:
      "The user builds up its momentum using its Z-Power and crashes into the target at full speed. The power varies, depending on the original move."
  },
  {
    name: "alloutpummeling",
    displayName: "All-Out Pummeling",
    generation: 7,
    type: TypeName.Fighting,
    attackType: AttackType.ZMove,
    description:
      "The user rams an energy orb created by its Z-Power into the target with full force. The power varies, depending on the original move."
  },
  {
    name: "supersonicskystrike",
    displayName: "Supersonic Skystrike",
    generation: 7,
    type: TypeName.Flying,
    attackType: AttackType.ZMove,
    description:
      "The user soars up with its Z-Power and plummets toward the target at full speed. The power varies, depending on the original move."
  },
  {
    name: "aciddownpour",
    displayName: "Acid Downpour",
    generation: 7,
    type: TypeName.Poison,
    attackType: AttackType.ZMove,
    description:
      "The user creates a poisonous swamp using its Z-Power and sinks the target into it at full force. The power varies, depending on the original move."
  },
  {
    name: "tectonicrage",
    displayName: "Tectonic Rage",
    generation: 7,
    type: TypeName.Ground,
    attackType: AttackType.ZMove,
    description:
      "The user burrows deep into the ground and slams into the target with the full force of its Z-Power. The power varies, depending on the original move."
  },
  {
    name: "continentalcrush",
    displayName: "Continental Crush",
    generation: 7,
    type: TypeName.Rock,
    attackType: AttackType.ZMove,
    description:
      "The user summons a huge rock mountain using its Z-Power and drops it onto the target with full force. The power varies, depending on the original move."
  },
  {
    name: "savagespinout",
    displayName: "Savage Spin-Out",
    generation: 7,
    type: TypeName.Bug,
    attackType: AttackType.ZMove,
    description:
      "The user binds the target with full force with threads of silk that the user spits using its Z-Power. The power varies, depending on the original move."
  },
  {
    name: "neverendingnightmare",
    displayName: "Never-Ending Nightmare",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.ZMove,
    description:
      "Deep-seated grudges summoned by the user's Z-Power trap the target. The power varies, depending on the original move."
  },
  {
    name: "corkscrewcrash",
    displayName: "Corkscrew Crash",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.ZMove,
    description:
      "The user spins very fast and rams into the target with the full force of its Z-Power. The power varies, depending on the original move."
  },
  {
    name: "infernooverdrive",
    displayName: "Inferno Overdrive",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.ZMove,
    description:
      "The user breathes a stream of intense fire toward the target with the full force of its Z-Power. The power varies depending on the original move."
  },
  {
    name: "hydrovortex",
    displayName: "Hydro Vortex",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.ZMove,
    description:
      "The user creates a huge whirling current using its Z-Power to swallow the target with full force. The power varies, depending on the original move."
  },
  {
    name: "bloomdoom",
    displayName: "Bloom Doom",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.ZMove,
    description:
      "The user collects energy from plants using its Z-Power and attacks the target with full force. The power varies, depending on the original move."
  },
  {
    name: "gigavolthavoc",
    displayName: "Gigavolt Havoc",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.ZMove,
    description:
      "The user hits the target with a powerful electric current collected by its Z-Power. The power varies, depending on the original move."
  },
  {
    name: "shatteredpsyche",
    displayName: "Shattered Psyche",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.ZMove,
    description:
      "The user controls the target with its Z-Power and hurts the target with full force. The power varies, depending on the original move."
  },
  {
    name: "subzeroslammer",
    displayName: "Subzero Slammer",
    generation: 7,
    type: TypeName.Ice,
    attackType: AttackType.ZMove,
    description:
      "The user dramatically drops the temperature using its Z-Power and freezes the target with full force. The power varies, depending on the original move."
  },
  {
    name: "devastatingdrake",
    displayName: "Devastating Drake",
    generation: 7,
    type: TypeName.Dragon,
    attackType: AttackType.ZMove,
    description:
      "The user materializes its aura using its Z-Power and attacks the target with full force. The power varies, depending on the original move."
  },
  {
    name: "blackholeeclipse",
    displayName: "Black Hole Eclipse",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.ZMove,
    description:
      "The user gathers dark energy using its Z-Power and sucks the target into it. The power varies, depending on the original move."
  },
  {
    name: "twinkletackle",
    displayName: "Twinkle Tackle",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.ZMove,
    description:
      "The user creates a very charming space using its Z-Power and totally toys with the target. The power varies, depending on the original move."
  },
  {
    name: "catastropika",
    displayName: "Catastropika",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Pikachu",
    description:
      "The user, Pikachu, surrounds itself with the maximum amount of electricity using its Z-Power and pounces on its target with full force."
  },
  {
    name: "shoreup",
    displayName: "Shore Up",
    generation: 7,
    type: TypeName.Ground,
    attackType: AttackType.Status,
    signatureOf: "Sandygast, Palossand",
    description: "The user restores its own HP by up to half its max HP. It regains more HP in a sandstorm."
  },
  {
    name: "firstimpression",
    displayName: "First Impression",
    generation: 7,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    signatureOf: "Golisopod",
    description: "Although this move has great power, it works only on the first turn each time the user enters battle."
  },
  {
    name: "banefulbunker",
    displayName: "Baneful Bunker",
    generation: 7,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    signatureOf: "Toxapex",
    description:
      "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact."
  },
  {
    name: "spiritshackle",
    displayName: "Spirit Shackle",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Decidueye",
    description:
      "The user attacks while simultaneously stitching the target's shadow to the ground to prevent the target from fleeing."
  },
  {
    name: "darkestlariat",
    displayName: "Darkest Lariat",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Incineroar",
    description:
      "The user swings both arms and hits the target. The target's stat changes don't affect the damage inflicted by this move."
  },
  {
    name: "sparklingaria",
    displayName: "Sparkling Aria",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Primarina",
    description:
      "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be cured by the touch of these bubbles."
  },
  {
    name: "icehammer",
    displayName: "Ice Hammer",
    generation: 7,
    type: TypeName.Ice,
    attackType: AttackType.Physical,
    signatureOf: "Crabominable",
    description:
      "The user swings its strong, heavy fist at the target to inflict damage. This also lowers the user's Speed stat."
  },
  {
    name: "floralhealing",
    displayName: "Floral Healing",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Status,
    signatureOf: "Comfey",
    description:
      "The user restores the target's HP by up to half its max HP. More HP is restored when the ground is Grassy Terrain."
  },
  {
    name: "highhorsepower",
    displayName: "High Horsepower",
    generation: 7,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description: "The user fiercely attacks the target using its entire body."
  },
  {
    name: "strengthsap",
    displayName: "Strength Sap",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.Status,
    signatureOf: "Morelull, Shiinotic",
    description:
      "The user restores its own HP by the same amount as the target's Attack stat. It then lowers the target's Attack stat."
  },
  {
    name: "solarblade",
    displayName: "Solar Blade",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Lurantis",
    description:
      "The user gathers light on the first turn, then fills a blade with the light's energy and attacks on the next turn."
  },
  {
    name: "leafage",
    displayName: "Leafage",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    description: "The user attacks by pelting the target with leaves."
  },
  {
    name: "spotlight",
    displayName: "Spotlight",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user shines a spotlight on the target so that only the target will be attacked during the turn."
  },
  {
    name: "toxicthread",
    displayName: "Toxic Thread",
    generation: 7,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    signatureOf: "Spinarak, Ariados",
    description: "The user shoots poisonous threads to poison the target and lower the target's Speed stat."
  },
  {
    name: "laserfocus",
    displayName: "Laser Focus",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description: "The user concentrates intensely. The attack on the next turn always results in a critical hit."
  },
  {
    name: "gearup",
    displayName: "Gear Up",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Status,
    description:
      "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability."
  },
  {
    name: "throatchop",
    displayName: "Throat Chop",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user attacks the target's throat, and the resultant suffering prevents the target from using sound-based moves for two turns."
  },
  {
    name: "pollenpuff",
    displayName: "Pollen Puff",
    generation: 7,
    type: TypeName.Bug,
    attackType: AttackType.Special,
    signatureOf: "Ribombee",
    description:
      "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead."
  },
  {
    name: "anchorshot",
    displayName: "Anchor Shot",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Dhelmise",
    description:
      "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee."
  },
  {
    name: "psychicterrain",
    displayName: "Psychic Terrain",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    description:
      "This protects Pokémon on the ground from priority moves and powers up Psychic-type moves for five turns."
  },
  {
    name: "lunge",
    displayName: "Lunge",
    generation: 7,
    type: TypeName.Bug,
    attackType: AttackType.Physical,
    description:
      "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat."
  },
  {
    name: "firelash",
    displayName: "Fire Lash",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Heatmor, Salazzle",
    description: "The user strikes the target with a burning lash. This also lowers the target's Defense stat."
  },
  {
    name: "powertrip",
    displayName: "Power Trip",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description:
      "The user boasts its strength and attacks the target. The more the user's stats are boosted, the greater the move's power."
  },
  {
    name: "burnup",
    displayName: "Burn Up",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    description:
      "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type."
  },
  {
    name: "speedswap",
    displayName: "Speed Swap",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Rabsca",
    description: "The user exchanges Speed stats with the target."
  },
  {
    name: "smartstrike",
    displayName: "Smart Strike",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    description: "The user stabs the target with a sharp horn. This attack never misses."
  },
  {
    name: "purify",
    displayName: "Purify",
    generation: 7,
    type: TypeName.Poison,
    attackType: AttackType.Status,
    signatureOf: "Pyukumuku",
    description:
      "The user cures the target's status condition. If the move succeeds, it also restores the user's own HP."
  },
  {
    name: "revelationdance",
    displayName: "Revelation Dance",
    generation: 7,
    type: [TypeName.Fire, TypeName.Electric, TypeName.Ghost, TypeName.Psychic, TypeName.Flying, TypeName.Normal],
    attackType: AttackType.Special,
    signatureOf: "Oricorio",
    description:
      "The user attacks the target by dancing with all its might. This move becomes the same type as the user's type."
  },
  {
    name: "coreenforcer",
    displayName: "Core Enforcer",
    generation: 7,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Zygarde",
    description:
      "If the Pokémon damaged by this move have already used their moves that turn, this move eliminates the effects of those Pokémon's Abilities."
  },
  {
    name: "tropkick",
    displayName: "Trop Kick",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Tsareena",
    description:
      "The user lands an intense kick of tropical origins on the target. This also lowers the target's Attack stat."
  },
  {
    name: "instruct",
    displayName: "Instruct",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Status,
    signatureOf: "Oranguru",
    description: "The user instructs the target to reuse the move last used by the target."
  },
  {
    name: "beakblast",
    displayName: "Beak Blast",
    generation: 7,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    signatureOf: "Toucannon",
    description:
      "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn."
  },
  {
    name: "clangingscales",
    displayName: "Clanging Scales",
    generation: 7,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Kommo-o",
    description:
      "The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat is lowered after the attack."
  },
  {
    name: "dragonhammer",
    displayName: "Dragon Hammer",
    generation: 7,
    type: TypeName.Dragon,
    attackType: AttackType.Physical,
    signatureOf: "Alolan Exeggutor",
    description: "The user uses its body like a hammer to attack the target and inflict damage."
  },
  {
    name: "brutalswing",
    displayName: "Brutal Swing",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    description: "The user swings its body around violently to inflict damage on everything in its vicinity."
  },
  {
    name: "auroraveil",
    displayName: "Aurora Veil",
    generation: 7,
    type: TypeName.Ice,
    attackType: AttackType.Status,
    description:
      "This move reduces damage from physical and special moves for five turns. This can be used only when it is snowing."
  },
  {
    name: "sinisterarrowraid",
    displayName: "Sinister Arrow Raid",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Decidueye",
    description:
      "The user, Decidueye, creates countless arrows using its Z-Power and shoots the target with full force."
  },
  {
    name: "maliciousmoonsault",
    displayName: "Malicious Moonsault",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Physical,
    signatureOf: "Incineroar",
    description:
      "The user, Incineroar, strengthens its body using its Z-Power and crashes into the target with full force."
  },
  {
    name: "oceanicoperetta",
    displayName: "Oceanic Operetta",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Primarina",
    description:
      "The user, Primarina, summons a massive amount of water using its Z-Power and attacks the target with full force."
  },
  {
    name: "guardianofalola",
    displayName: "Guardian of Alola",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Tapu Koko, Tapu Lele, Tapu Bulu, Tapu Fini",
    description:
      "The user, the Land Spirit Pokémon, obtains Alola's energy using its Z-Power and attacks the target with full force. This reduces the target's HP greatly."
  },
  {
    name: "soulstealing7starstrike",
    displayName: "Soul-Stealing 7-Star Strike",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Marshadow",
    description:
      "After obtaining Z-Power, the user, Marshadow, punches and kicks the target consecutively with full force."
  },
  {
    name: "stokedsparksurfer",
    displayName: "Stoked Sparksurfer",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Alolan Raichu",
    description:
      "After obtaining Z-Power, the user, Alolan Raichu, attacks the target with full force. This move leaves the target with paralysis."
  },
  {
    name: "pulverizingpancake",
    displayName: "Pulverizing Pancake",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Snorlax",
    description:
      "Z-Power brings out the true capabilities of the user, Snorlax. The Pokémon moves its enormous body energetically and attacks the target with full force."
  },
  {
    name: "extremeevoboost",
    displayName: "Extreme Evoboost",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    signatureOf: "Eevee",
    description:
      "After obtaining Z-Power, the user, Eevee, gets energy from its evolved friends and boosts its stats sharply."
  },
  {
    name: "genesissupernova",
    displayName: "Genesis Supernova",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Mew",
    description:
      "After obtaining Z-Power, the user, Mew, attacks the target with full force. The terrain will be charged with psychic energy."
  },
  {
    name: "shelltrap",
    displayName: "Shell Trap",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Turtonator",
    description:
      "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on opposing Pokémon."
  },
  {
    name: "fleurcannon",
    displayName: "Fleur Cannon",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Magearna",
    description: "The user unleashes a strong beam. The recoil from this move harshly lowers the user's Sp. Atk stat."
  },
  {
    name: "psychicfangs",
    displayName: "Psychic Fangs",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Physical,
    signatureOf: "Bruxish",
    description:
      "The user attacks by biting the target with its psychic capabilities. This move can also break barriers, such as Light Screen and Reflect."
  },
  {
    name: "stompingtantrum",
    displayName: "Stomping Tantrum",
    generation: 7,
    type: TypeName.Ground,
    attackType: AttackType.Physical,
    description:
      "Driven by frustration, the user attacks the target. This move's power is doubled if the user's previous move failed."
  },
  {
    name: "shadowbone",
    displayName: "Shadow Bone",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Alolan Marowak",
    description:
      "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target's Defense stat."
  },
  {
    name: "accelerock",
    displayName: "Accelerock",
    generation: 7,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Midday Lycanroc, Dusk Lycanroc",
    description: "The user smashes into the target at high speed. This move always goes first."
  },
  {
    name: "liquidation",
    displayName: "Liquidation",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.Physical,
    description:
      "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat."
  },
  {
    name: "prismaticlaser",
    displayName: "Prismatic Laser",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Necrozma",
    description: "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn."
  },
  {
    name: "spectralthief",
    displayName: "Spectral Thief",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Physical,
    signatureOf: "Marshadow",
    description: "The user hides in the target's shadow, steals the target's stat boosts, and then attacks."
  },
  {
    name: "sunsteelstrike",
    displayName: "Sunsteel Strike",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Solgaleo, Dusk Mane Necrozma",
    description:
      "The user slams into the target with the force of a meteor. This move can be used on the target regardless of its Ability."
  },
  {
    name: "moongeistbeam",
    displayName: "Moongeist Beam",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Lunala, Dawn Wings Necrozma",
    description:
      "The user emits a sinister ray to attack the target. This move can be used on the target regardless of its Ability."
  },
  {
    name: "tearfullook",
    displayName: "Tearful Look",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Status,
    description:
      "The user gets teary-eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats."
  },
  {
    name: "zingzap",
    displayName: "Zing Zap",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Togedemaru, Pincurchin",
    description:
      "The user crashes into the target, delivering a powerful electric shock. This may also make the target flinch."
  },
  {
    name: "naturesmadness",
    displayName: "Nature's Madness",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Tapu Koko, Tapu Lele, Tapu Bulu, Tapu Fini",
    description: "The user hits the target with the full wrath of nature. This cuts the target's HP in half."
  },
  {
    name: "multiattack",
    displayName: "Multi-Attack",
    generation: 7,
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
    attackType: AttackType.Physical,
    signatureOf: "Silvally",
    description:
      "Cloaking itself in powerful energy, the user slams into the target to inflict damage. This move's type changes depending on the kind of memory disc held by the user."
  },
  {
    name: "10000000voltthunderbolt",
    displayName: "10,000,000 Volt Thunderbolt",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Cap Pikachu",
    description:
      "The user, Pikachu wearing a cap, powers up a jolt of electricity using its Z-Power and unleashes it. Critical hits land more easily."
  },
  {
    name: "mindblown",
    displayName: "Mind Blown",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.Special,
    signatureOf: "Blacephalon",
    description: "The user attacks everything around it by causing its own head to explode. This also damages the user."
  },
  {
    name: "plasmafists",
    displayName: "Plasma Fists",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Zeraora",
    description:
      "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves."
  },
  {
    name: "photongeyser",
    displayName: "Photon Geyser",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Necrozma",
    description:
      "The user attacks the target with a pillar of light. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user."
  },
  {
    name: "lightthatburnsthesky",
    displayName: "Light That Burns the Sky",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Ultra Necrozma",
    description:
      "This attack inflicts Attack or Sp. Atk damage—whichever stat is higher for the user, Necrozma. This move ignores the target's Ability."
  },
  {
    name: "searingsunrazesmash",
    displayName: "Searing Sunraze Smash",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Solgaleo, Dusk Mane Necrozma",
    description:
      "After obtaining Z-Power, the user, Solgaleo, attacks the target with full force. This move can ignore the effect of the target's Ability."
  },
  {
    name: "menacingmoonrazemaelstrom",
    displayName: "Menacing Moonraze Maelstrom",
    generation: 7,
    type: TypeName.Ghost,
    attackType: AttackType.Special,
    signatureOf: "Lunala, Dawn Wings Necrozma",
    description:
      "After obtaining Z-Power, the user, Lunala, attacks the target with full force. This move can ignore the effect of the target's Ability."
  },
  {
    name: "letssnuggleforever",
    displayName: "Let's Snuggle Forever",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Physical,
    signatureOf: "Mimikyu",
    description: "After obtaining Z-Power, the user, Mimikyu, punches the target with full force."
  },
  {
    name: "splinteredstormshards",
    displayName: "Splintered Stormshards",
    generation: 7,
    type: TypeName.Rock,
    attackType: AttackType.Physical,
    signatureOf: "Lycanroc",
    description:
      "After obtaining Z-Power, the user, Lycanroc, attacks the target with full force. This move negates the effect on the battlefield."
  },
  {
    name: "clangoroussoulblaze",
    displayName: "Clangorous Soulblaze",
    generation: 7,
    type: TypeName.Dragon,
    attackType: AttackType.Special,
    signatureOf: "Kommo-o",
    description:
      "After obtaining Z-Power, the user, Kommo-o, attacks the opposing Pokémon with full force. This move boosts the user's stats."
  },
  {
    name: "zippyzap",
    displayName: "Zippy Zap",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Physical,
    signatureOf: "Partner Pikachu",
    description:
      "The user attacks the target with bursts of electricity at high speed. This move always goes first and results in a critical hit."
  },
  {
    name: "splishysplash",
    displayName: "Splishy Splash",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Partner Pikachu",
    description:
      "The user charges a huge wave with electricity and hits the opposing Pokémon with the wave. This may also leave the opposing Pokémon with paralysis."
  },
  {
    name: "floatyfall",
    displayName: "Floaty Fall",
    generation: 7,
    type: TypeName.Flying,
    attackType: AttackType.Physical,
    signatureOf: "Partner Pikachu",
    description:
      "The user floats in the air, and then dives at a steep angle to attack the target. This may also make the target flinch."
  },
  {
    name: "pikapapow",
    displayName: "Pika Papow",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Partner Pikachu",
    description: "The more Pikachu loves its Trainer, the greater the move's power. It never misses."
  },
  {
    name: "bouncybubble",
    displayName: "Bouncy Bubble",
    generation: 7,
    type: TypeName.Water,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user attacks by shooting water bubbles at the target. It then absorbs water and restores its HP by half the damage taken by the target."
  },
  {
    name: "buzzybuzz",
    displayName: "Buzzy Buzz",
    generation: 7,
    type: TypeName.Electric,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user shoots a jolt of electricity to attack the target. This also leaves the target with paralysis."
  },
  {
    name: "sizzlyslide",
    displayName: "Sizzly Slide",
    generation: 7,
    type: TypeName.Fire,
    attackType: AttackType.Physical,
    signatureOf: "Partner Eevee",
    description: "The user cloaks itself in fire and charges at the target. This also leaves the target with a burn."
  },
  {
    name: "glitzyglow",
    displayName: "Glitzy Glow",
    generation: 7,
    type: TypeName.Psychic,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user bombards the target with telekinetic force. A wondrous wall of light is put up to weaken the power of the opposing Pokémon's special moves."
  },
  {
    name: "baddybad",
    displayName: "Baddy Bad",
    generation: 7,
    type: TypeName.Dark,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user acts bad and attacks the target. A wondrous wall of light is put up to weaken the power of the opposing Pokémon's physical moves."
  },
  {
    name: "sappyseed",
    displayName: "Sappy Seed",
    generation: 7,
    type: TypeName.Grass,
    attackType: AttackType.Physical,
    signatureOf: "Partner Eevee",
    description:
      "The user grows a gigantic stalk that scatters seeds to attack the target. The seeds drain the target's HP every turn."
  },
  {
    name: "freezyfrost",
    displayName: "Freezy Frost",
    generation: 7,
    type: TypeName.Ice,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user attacks with a crystal made of cold frozen haze. It eliminates every stat change among all the Pokémon engaged in battle."
  },
  {
    name: "sparklyswirl",
    displayName: "Sparkly Swirl",
    generation: 7,
    type: TypeName.Fairy,
    attackType: AttackType.Special,
    signatureOf: "Partner Eevee",
    description:
      "The user attacks the target by wrapping it with a whirlwind of an overpowering scent. This also heals all status conditions of the user's party."
  },
  {
    name: "veeveevolley",
    displayName: "Veevee Volley",
    generation: 7,
    type: TypeName.Normal,
    attackType: AttackType.Physical,
    signatureOf: "Partner Eevee",
    description: "The more Eevee loves its Trainer, the greater the move's power. It never misses."
  },
  {
    name: "doubleironbash",
    displayName: "Double Iron Bash",
    generation: 7,
    type: TypeName.Steel,
    attackType: AttackType.Physical,
    signatureOf: "Melmetal",
    description:
      "The user uses the hex nut in its chest as an axis to spin, striking the target with its arms twice in a row. This may also make the target flinch."
  }
];
