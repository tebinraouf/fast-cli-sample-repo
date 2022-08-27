import { template } from "./search.template.js";
import { styles } from "./search.styles.js";

export const definition = {
    baseName: "search",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
};