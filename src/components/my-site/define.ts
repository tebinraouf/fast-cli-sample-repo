import { MySite } from "./my-site.js";
import { definition } from "./my-site.definition.js";

export const mySiteDefinition = MySite.compose(definition);