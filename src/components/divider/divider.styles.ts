import { css, ElementStyles } from "@microsoft/fast-element";
import { display, FoundationElementTemplate } from "@microsoft/fast-foundation";
import {
    neutralStrokeDividerRest,
    strokeWidth
} from "@microsoft/adaptive-ui";

/**
 * Styles for Divider
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
        ${display('block')} :host {
            box-sizing: content-box;
            height: 0;
            border: none;
            border-top: calc(${strokeWidth} * 1px) solid ${neutralStrokeDividerRest};
        }
    `;