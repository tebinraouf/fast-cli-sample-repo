import { template } from "./calendar.template.js";
import { styles } from "./calendar.styles.js";
import { CalendarTitleTemplate } from "@microsoft/fast-foundation";

export const definition = {
    baseName: "calendar",
    template,
    styles,
    title: CalendarTitleTemplate,
};