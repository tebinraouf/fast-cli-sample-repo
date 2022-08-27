import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { disclosureDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    disclosureDefinition()
);

export default {
    title: "disclosure",
};

export const Disclosure: () => "*.html" = () => Template;
