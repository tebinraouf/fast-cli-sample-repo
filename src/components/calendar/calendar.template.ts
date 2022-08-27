import { Calendar as FoundationCalendar, calendarTemplate, FoundationElementTemplate } from "@microsoft/fast-foundation";
import type { ViewTemplate } from "@microsoft/fast-element";

/**
 * The template for Calendar component.
 * @public
 */
export const template: FoundationElementTemplate<ViewTemplate<FoundationCalendar>> = calendarTemplate;
