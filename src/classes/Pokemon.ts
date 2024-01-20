import { Ability, Category, EggGroup, PokemonName, TypeName } from "../enums";
import { sanitizeText } from "../utils/utils";

export class Abilities {
  constructor(
    public first: Ability,
    public second?: Ability,
    public hidden?: Ability
  ) {}
}

export class Form {
  public formName: PokemonName;
  public type?: TypeName;
  public type2?: TypeName;
  public category?: Category | Category[];
  public abilities?: Abilities;

  constructor(params: {
    formName: PokemonName;
    type?: TypeName;
    type2?: TypeName;
    category?: Category | Category[];
    abilities?: Abilities;
  }) {
    this.formName = params.formName;
    this.type = params.type;
    this.type2 = params.type2;
    this.category = params.category;
    this.abilities = params.abilities;
  }
}

export class Pokemon {
  public simpleName: string;

  public name: PokemonName;
  public dex: number;
  public type: TypeName;
  public type2?: TypeName;
  public category?: Category | Category[];
  public abilities: Abilities;
  public eggGroups: EggGroup[];
  public defaultForm?: PokemonName;
  public forms?: Form[];

  constructor(params: {
    name: PokemonName;
    dex: number;
    type: TypeName;
    type2?: TypeName;
    category?: Category | Category[];
    abilities: Abilities;
    eggGroups: EggGroup[];
    defaultForm?: PokemonName;
    forms?: Form[];
  }) {
    this.simpleName = sanitizeText(params.name);
    this.name = params.name;
    this.dex = params.dex;
    this.type = params.type;
    this.type2 = params.type2;
    this.category = params.category;
    this.abilities = params.abilities;
    this.eggGroups = params.eggGroups;
    this.defaultForm = params.defaultForm;
    this.forms = params.forms;
  }
}
