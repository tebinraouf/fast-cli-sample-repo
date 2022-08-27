import { AnchoredRegion, anchoredRegionTemplate, DesignSystem } from "@microsoft/fast-foundation";
import Template from "./fixtures/base.html";
import { tooltipDefinition } from "./define.js";


const anchoredRegionDefinition = AnchoredRegion.compose({
    baseName: 'anchored-region',
    template: anchoredRegionTemplate
});


DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    anchoredRegionDefinition(),
    tooltipDefinition()
);

export default {
    title: "tooltip",
};

export const Tooltip: () => "*.html" = () => Template;
