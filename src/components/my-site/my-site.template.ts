import { html } from "@microsoft/fast-element";
import type { FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { ViewTemplate } from "@microsoft/fast-element";
import type { MySite } from "./my-site.js";

/**
 * The template for MySite component.
 * @public
 */
export const template: FoundationElementTemplate<ViewTemplate<MySite>> = (
    context,
    definition
) => html`
    <template>
        
        
        <h1>Welcome to ${x => x.title}</h1>
        
        <h2>Count is: ${x => x.count + 10} </h2>
        
        <div class="clicksection">
            <h3>Click Area</h3>
            <button>Click here</button>
        </div>

        </html>
    </template>
`;
