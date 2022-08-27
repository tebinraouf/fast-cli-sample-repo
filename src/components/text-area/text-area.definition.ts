import { template } from "./text-area.template.js";
import { styles } from "./text-area.styles.js";

export const definition = {
    baseName: "text-area",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
};