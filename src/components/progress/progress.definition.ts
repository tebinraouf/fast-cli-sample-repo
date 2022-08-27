import { template } from "./progress.template.js";
import { styles } from "./progress.styles.js";

export const definition = {
    baseName: "progress",
    template,
    styles,
    indeterminateIndicator1: /* html */ `
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,
    indeterminateIndicator2: /* html */ `
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,
}