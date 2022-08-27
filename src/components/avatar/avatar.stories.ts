import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { avatarDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    avatarDefinition()
);

export default {
    title: "avatar",
};

export const Avatar: () => "*.html" = () => Template;
