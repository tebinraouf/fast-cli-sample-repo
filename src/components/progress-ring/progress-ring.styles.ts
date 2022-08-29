import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";


/**
 * Styles for ProgressRing
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css`
        ${display('flex')} :host {
            align-items: center;
            outline: none;
            height: 32px;
            width: 32px;
        }
        .progress {
            height: 100%;
            width: 100%;
        }
        .background {
            fill: none;
            stroke-width: 2px;
        }
        .determinate {
            stroke: black;
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }
        .indeterminate-indicator-1 {
            stroke: black;
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
            animation: spin-infinite 2s linear infinite;
        }
        :host(.paused) .indeterminate-indicator-1 {
            animation: none;
            stroke: black;
        }
        :host(.paused) .determinate {
            stroke: black;
        }
        @keyframes spin-infinite {
            0% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(0deg);
            }
            50% {
                stroke-dasharray: 21.99px 21.99px;
                transform: rotate(450deg);
            }
            100% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(1080deg);
            }
        }
    `
