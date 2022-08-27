import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { textAreaDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    textAreaDefinition()
);

export default {
    title: "text-area",
};

export const TextArea: () => "*.html" = () => Template;
