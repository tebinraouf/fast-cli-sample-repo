import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { numberFieldDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    numberFieldDefinition()
);

export default {
    title: "number-field",
};
export const NumberField: () => "*.html" = () => Template;
