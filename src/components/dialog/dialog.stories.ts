import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { dialogDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    dialogDefinition()
);

export default {
    title: "dialog",
};
export const Dialog: () => "*.html" = () => Template;
