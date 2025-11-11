import type { Ability, Generation } from "../../classes";
import { agen3 } from "./agen3";
import { agen4 } from "./agen4";
import { agen5 } from "./agen5";
import { agen6 } from "./agen6";
import { agen7 } from "./agen7";
import { agen8 } from "./agen8";
import { agen9 } from "./agen9";

export const allAbilityGens: Generation[] = [
  agen3,
  agen4,
  agen5,
  agen6,
  agen7,
  agen8,
  agen9
];

export const allAbilities: Ability[] = [
  ...(agen3.abilities || []),
  ...(agen4.abilities || []),
  ...(agen5.abilities || []),
  ...(agen6.abilities || []),
  ...(agen7.abilities || []),
  ...(agen8.abilities || []),
  ...(agen9.abilities || [])
];
