import { Component } from "@angular/core";
import { CustomIconCardButton } from "./custom-icon-card-button";

@Component({
    selector: 'app-custom-icon-consumer',
    template: `
        <h3>Icon Card Button</h3>
        <app-custom-icon-card-button label="Please refresh" icon="refresh" />
        <app-custom-icon-card-button label="Inline refresh" icon="refresh" inline/>
        <app-custom-icon-card-button label="Close endIcon" endIcon="close" inline/>
        <app-custom-icon-card-button label="Click on me"/>
    `,
    styleUrl: './custom-icon-consumer.scss',
    imports: [CustomIconCardButton]
}) export class CustomIconConsumer {
 
}   