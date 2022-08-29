import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";

/**
 * Styles for Checkbox
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

        `;