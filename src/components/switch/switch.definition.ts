import { template } from "./switch.template.js";
import { styles } from "./switch.styles.js";

export const definition = {
    baseName: "switch",
    template,
    styles,
    switch: /* html */ `
        <span class="checked-indicator" part="checked-indicator"></span>
    `,
};