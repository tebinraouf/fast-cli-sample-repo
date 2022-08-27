import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { switchDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    switchDefinition()
);

export default {
    title: "switch",
};

export const Switch: () => "*.html" = () => Template;
