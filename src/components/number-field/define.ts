import { NumberField } from "./number-field.js";
import { definition } from "./number-field.definition.js";

export const numberFieldDefinition = NumberField.compose(definition);