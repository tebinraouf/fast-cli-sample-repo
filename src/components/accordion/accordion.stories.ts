import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { accordionDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    accordionDefinition()
);

export default {
    title: "accordion",
};

export const Accordion: () => "*.html" = () => Template;
