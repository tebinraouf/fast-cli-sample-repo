import { html, when } from "@microsoft/fast-element";
import { Avatar as FoundationAvatar } from "@microsoft/fast-foundation";
import { template } from "./avatar.template.js";
import { styles } from "./avatar.styles.js";
import type { Avatar } from "./avatar.js";

export const definition = {
    baseName: "avatar",
    baseClass: FoundationAvatar,
    template,
    styles,
    media: html<Avatar>`
        ${when(
            x => x.imgSrc,
            html`
                <img
                    src="${x => x.imgSrc}"
                    alt="${x => x.alt}"
                    slot="media"
                    class="media"
                    part="media"
                />
            `
        )}
    `,
    shadowOptions: {
        delegatesFocus: true,
    },
};