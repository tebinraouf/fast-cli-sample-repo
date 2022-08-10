import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { checkboxDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    checkboxDefinition()
);

export default {
    title: "checkbox",
};
export const Checkbox: () => "*.html" = () => Template;
