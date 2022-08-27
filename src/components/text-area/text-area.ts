import { attr } from "@microsoft/fast-element";
import { TextArea as FoundationTextArea } from "@microsoft/fast-foundation";

/**
 * Text area appearances
 * @public
 */
export type TextAreaAppearance = "filled" | "outline";

/**
 * A class derived from the TextArea foundation component
 */
export class TextArea extends FoundationTextArea {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    @attr
    public appearance: TextAreaAppearance = "outline";
};