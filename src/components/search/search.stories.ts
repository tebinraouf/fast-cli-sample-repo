import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { searchDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    searchDefinition()
);

export default {
    title: "search",
};

export const Search: () => "*.html" = () => Template;
