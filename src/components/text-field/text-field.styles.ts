import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    // display,
    // forcedColorsStylesheetBehavior,
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";
import {
    // appearanceBehavior,
    designUnit,
    // inputFilledForcedColorStyles,
    // inputFilledStyles,
    // inputForcedColorStyles,
    // inputStateStyles,
    // inputStyles,
} from "@microsoft/adaptive-ui";

// export const textFieldFilledStyles: (
//     context: ElementDefinitionContext,
//     definition: FoundationElementDefinition,
//   ) => ElementStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) =>
//     css`
//         ${inputFilledStyles(context, definition, '.root')}
//     `.withBehaviors(
//         forcedColorsStylesheetBehavior(
//             css`
//                 ${inputFilledForcedColorStyles(context, definition, '.root')}
//             `,
//         ),
//     );

/**
 * Styles for TextField
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
        
        .root {
            display: flex;
            flex-direction: row;
        }
        .control {
            -webkit-appearance: none;
            color: inherit;
            background: transparent;
            border: 0;
            height: calc(100% - 4px);
            margin-top: auto;
            margin-bottom: auto;
            padding: 0 calc(${designUnit} * 2px + 1px);
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        .start,
        .end {
            display: flex;
            margin: auto;
        }
        .start {
            display: flex;
            margin-inline-start: 11px;
        }
        .end {
            display: flex;
            margin-inline-end: 11px;
        }
    `
    // .withBehaviors(
    //     appearanceBehavior('filled', textFieldFilledStyles(context, definition)),
    //     forcedColorsStylesheetBehavior(
    //         css`
    //             ${inputForcedColorStyles(context, definition, '.root')}
    //         `,
    //     ),
    // );