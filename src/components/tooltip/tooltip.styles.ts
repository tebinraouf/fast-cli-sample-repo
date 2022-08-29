import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    ElementDefinitionContext,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import {
    controlCornerRadius,
    fillColor,
    neutralForegroundRest,
} from "@microsoft/adaptive-ui";

/**
 * Styles for Tooltip
 * @public
 */
export const styles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) =>
        css`
        :host {
            position: relative;
            contain: layout;
            overflow: visible;
            height: 0;
            width: 0;
            z-index: 10000;
        }
        .tooltip {
            box-sizing: border-box;
            border-radius: calc(${controlCornerRadius} * 1px);
            
            background: ${fillColor};
            color: ${neutralForegroundRest};
            padding: 4px 12px;
            height: fit-content;
            width: fit-content;
            white-space: nowrap;       
        }
        
    `