import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";

/**
 * Styles for Flipper
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
) =>
    css`
        :host {
            display: block
        }

    `;