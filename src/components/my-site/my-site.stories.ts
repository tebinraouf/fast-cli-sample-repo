import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { mySiteDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    mySiteDefinition()
);

export default {
    title: "my-site",
};

export const MySite: () => "*.html" = () => Template;
