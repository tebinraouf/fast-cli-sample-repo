import { template } from "./progress-ring.template.js";
import { styles } from "./progress-ring.styles.js";

export const definition = {
    baseName: "progress-ring",
    template,
    styles,
    indeterminateIndicator: /* html */ `
        <svg class="progress" part="progress" viewBox="0 0 16 16">
            <circle
                class="background"
                part="background"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
            <circle
                class="indeterminate-indicator-1"
                part="indeterminate-indicator-1"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
        </svg>
    `
}