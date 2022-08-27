import { TextField as FoundationTextField, textFieldTemplate, FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { ViewTemplate } from "@microsoft/fast-element";

/**
 * The template for TextField component.
 * @public
 */
export const template: FoundationElementTemplate<ViewTemplate<FoundationTextField>> = textFieldTemplate;
