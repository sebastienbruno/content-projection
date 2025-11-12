import { Component } from "@angular/core";
import { IconCardButton } from "./icon-card-button";

@Component({
    selector: 'app-icon-consumer',
    template: `
        <h3>Icon Card Button</h3>
        <app-icon-card-button label="Please refresh" icon="refresh" />
        <app-icon-card-button label="Inline refresh" icon="refresh" inline/>
        <app-icon-card-button label="Close endIcon" endIcon="close" inline/>
        <app-icon-card-button label="Where is my icon" endIcon="close"/>
        <app-icon-card-button label="Click on me"/>
    `,
    styleUrl: './icon-consumer.scss',
    imports: [IconCardButton]
}) export class IconConsumer {
 
}