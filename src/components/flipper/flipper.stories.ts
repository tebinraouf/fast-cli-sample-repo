import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { flipperDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    flipperDefinition()
);

export default {
    title: "flipper",
};
export const Flipper: () => "*.html" = () => Template;
