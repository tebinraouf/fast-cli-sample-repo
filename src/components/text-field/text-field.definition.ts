import { template } from "./text-field.template.js";
import { styles } from "./text-field.styles.js";

export const definition = {
    baseName: "text-field",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
};