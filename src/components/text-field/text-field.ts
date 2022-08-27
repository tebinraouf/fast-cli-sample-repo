import { attr } from "@microsoft/fast-element";
import { TextField as FoundationTextField } from "@microsoft/fast-foundation";

/**
 * Text field appearances
 * @public
 */
export type TextFieldAppearance = "filled" | "outline";

/**
 * A class derived from the TextField foundation component
 */
export class TextField extends FoundationTextField {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    @attr
    public appearance: TextFieldAppearance = "outline";
};