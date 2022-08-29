import { attr, ValueConverter } from "@microsoft/fast-element";
import { FoundationElement } from "@microsoft/fast-foundation";

/**
 * A Custom HTML Element.
 *
 * @public
 */
/**
 * A class derived from the FoundationElement
 */

const numberConverter: ValueConverter = {
    fromView(value: string): number {
        console.log("fromView: the value type is", typeof value)
        // convert strings to numbers
        return parseInt(value);
    },
    toView(value: any): string {
        // convert numbers to strings
        console.log("toView: the value type is", typeof value)
        return value.toString();
    },
};

export class MySite extends FoundationElement {
    @attr public title: string;

    @attr({ converter: numberConverter }) count: number = 0;

    titleChanged(): void {
        console.log("site value changed")
    };

    connectedCallback(): void {
        super.connectedCallback();
        console.log('saf-my-site is now connected to the DOM');
    };

    disconnectedCallback(): void {
        super.disconnectedCallback();
        console.log('saf-my-site is now disconnected to the DOM');
    };
};