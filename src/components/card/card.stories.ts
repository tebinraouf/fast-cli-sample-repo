import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { cardDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    cardDefinition()
);

export default {
    title: "card",
};
export const Card: () => "*.html" = () => Template;
