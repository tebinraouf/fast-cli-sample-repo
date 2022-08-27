import { template } from "./toolbar.template.js";
import { styles } from "./toolbar.styles.js";

export const definition = {
    baseName: "toolbar",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
};