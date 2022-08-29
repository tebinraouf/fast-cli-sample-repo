import { css, ElementStyles } from "@microsoft/fast-element";
import type { FoundationElementTemplate } from "@microsoft/fast-foundation";

/**
 * MySite styles
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
    
    :host {
        display: block;
        contain: content;
      }
    
    :host([hidden]) { 
        display: none;
    }

    .clicksection {
        background-color: yellow;
        color: blue;
    }

    `;
