import { DesignSystem } from "@microsoft/fast-foundation";
import Template from "./fixtures/base.html";
import { tooltipDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    tooltipDefinition()
);

export default {
    title: "tooltip",
};

export const Tooltip: () => "*.html" = () => Template;
