import { Dialog as FoundationDialog, dialogTemplate, FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { ViewTemplate } from "@microsoft/fast-element";

/**
 * The template for Modal component.
 * @public
 */
export const template: FoundationElementTemplate<ViewTemplate<FoundationDialog>> = dialogTemplate;
