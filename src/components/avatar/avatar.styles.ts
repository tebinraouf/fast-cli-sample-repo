import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";



/**
 * Styles for Avatar
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
        :host {
            display: block
        }
        `