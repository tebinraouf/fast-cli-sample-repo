import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { calendarDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    calendarDefinition()
);

export default {
    title: "calendar",
};

export const Calendar: () => "*.html" = () => Template;
