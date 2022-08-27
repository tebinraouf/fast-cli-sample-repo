import Template from "./fixtures/base.html";
import { DesignSystem, DataGrid, dataGridTemplate, DataGridCell, dataGridCellTemplate, DataGridRow, dataGridRowTemplate } from "@microsoft/fast-foundation";
import { calendarDefinition } from "./define.js";


const dataGridDefinition = DataGrid.compose({
    baseName: "data-grid",
    template: dataGridTemplate
});

const dataGridCellDefinition = DataGridCell.compose({
    baseName: "data-grid-cell",
    template: dataGridCellTemplate
});

const dataGridRowDefinition = DataGridRow.compose({
    baseName: "data-grid-row",
    template: dataGridRowTemplate
});


DesignSystem.getOrCreate().withPrefix(
    "saf"
).register(
    dataGridCellDefinition(),
    dataGridRowDefinition(),
    dataGridDefinition(),
    calendarDefinition()
);

export default {
    title: "calendar",
};

export const Calendar: () => "*.html" = () => Template;
