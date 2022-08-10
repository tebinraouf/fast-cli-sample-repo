import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { modalDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    modalDefinition()
);

export default {
    title: "modal",
};
export const Modal: () => "*.html" = () => Template;
