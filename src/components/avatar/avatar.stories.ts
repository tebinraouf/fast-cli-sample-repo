import { DesignSystem } from "@microsoft/fast-foundation";
import Template from "./fixtures/base.html";
import { avatarDefinition } from "./define.js";

DesignSystem.getOrCreate().withPrefix(
    "fast"
).register(
    avatarDefinition()
);

export default {
    title: "avatar",
};

export const Avatar: () => "*.html" = () => Template;
