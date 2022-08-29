import { css, ElementStyles } from "@microsoft/fast-element";
import type {
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";



/**
 * Styles for Search
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
            padding: 3px;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        .clear-button {
            display: inline-flex;
            align-items: center;
            margin: 1px;
            height: calc(100% - 2px);
            opacity: 0;
            background: transparent;
            color: black;
            fill: currentcolor;
            border: none;
            border-radius: 5px;
            min-width: 32px;
            outline: none;
            
        }
        .clear-button:hover {
        background: black;
        }
        .clear-button:active {
        background: black;
        }
        :host(:hover:not([disabled], [readOnly])) .clear-button,
        :host(:active:not([disabled], [readOnly])) .clear-button,
        :host(:focus-within:not([disabled], [readOnly])) .clear-button {
            opacity: 1;
        }
        :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
        :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
        :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
            opacity: 0;
        }
        .control::-webkit-search-cancel-button {
        -webkit-appearance: none;
        }
        .input-wrapper {
            display: flex;
            position: relative;
            width: 100%;
        }
        .start,
        .end {
            display: flex;
            margin: 1px;
            align-items: center;
        }
        .start {
            display: flex;
            margin-inline-start: 11px;
        }
        ::slotted([slot="end"]) {
            height: 100%
        }
        .clear-button__hidden {
            opacity: 0;
        }
        .end {
            margin-inline-end: 11px;
        }
    `;