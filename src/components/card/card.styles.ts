import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    forcedColorsStylesheetBehavior,
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    // elevationShadowCardRest,
    fillColor,
    layerCornerRadius,
    neutralForegroundRest,
    // neutralStrokeLayerRest,
    strokeWidth,
} from "@microsoft/adaptive-ui";

/**
 * Styles for Card
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
        ${display('block')} :host {
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${fillColor};
            color: ${neutralForegroundRest};
            
            border-radius: calc(${layerCornerRadius} * 1px);
        }
        :host {
            content-visibility: auto;
        }
    `.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
                :host {
                    background: ${SystemColors.Canvas};
                    color: ${SystemColors.CanvasText};
                }
            `,
        ),
    );