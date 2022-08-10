import Template from "./fixtures/base.html";
import { DesignSystem } from "@microsoft/fast-foundation";
import { tabsDefinition } from "./define.js";
import { tabDefinition } from "./tab/define.js";
import { tabPanelDefinition } from "./tab-panel/define.js";


DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    [tabsDefinition(), tabDefinition(), tabPanelDefinition()]
);

export default {
    title: "tabs",
};
export const Tabs: () => "*.html" = () => Template;
