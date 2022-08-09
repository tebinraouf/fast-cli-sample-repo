import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { dividerDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    dividerDefinition()
);

export default {
    title: "divider",
};

export const Divider: () => "*.html" = () => Template;
