import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { toolbarDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    toolbarDefinition()
);

export default {
    title: "toolbar",
};

export const Toolbar: () => "*.html" = () => Template;
