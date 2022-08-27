import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { progressDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    progressDefinition()
);

export default {
    title: "progress",
};
export const Progress: () => "*.html" = () => Template;
