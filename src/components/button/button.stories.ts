import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { buttonDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    buttonDefinition()
);

export default {
    title: "button",
};
export const Button: () => "*.html" = () => Template;
