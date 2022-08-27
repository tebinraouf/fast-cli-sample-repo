import { template } from "./number-field.template.js";
import { styles } from "./number-field.styles.js";

export const definition = {
    baseName: "number-field",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
    stepDownGlyph: /* html */ `
        <span class="step-down-glyph" part="step-down-glyph"></span>
    `,
    stepUpGlyph: /* html */ `
        <span class="step-up-glyph" part="step-up-glyph"></span>
    `,
}