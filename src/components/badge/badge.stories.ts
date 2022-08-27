import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { badgeDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    badgeDefinition()
);

export default {
    title: "badge",
};

export const Badge: () => "*.html" = () => Template;
