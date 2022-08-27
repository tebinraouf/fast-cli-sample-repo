import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { progressRingDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    progressRingDefinition()
);

export default {
    title: "progress-ring",
};
export const ProgressRing: () => "*.html" = () => Template;
