import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { textFieldDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    textFieldDefinition()
);

export default {
    title: "text-field",
};

export const TextField: () => "*.html" = () => Template;
