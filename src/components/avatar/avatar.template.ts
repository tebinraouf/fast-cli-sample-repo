import { avatarTemplate, Avatar as FoundationAvatar, FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { ViewTemplate } from "@microsoft/fast-element";

/**
 * The template for Avatar component.
 * @public
 */
export const template: FoundationElementTemplate<ViewTemplate<FoundationAvatar>> = avatarTemplate;
