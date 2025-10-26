import { Component } from "@angular/core";
import { SimpleCardButton } from "./simple-card-button";

@Component({
    selector: 'app-simple-consumer',
    template: `
        <h3>Simple Card Button</h3>
        <app-simple-card-button label="Click on me" />
    `,
    styleUrl: './simple-consumer.scss',
    imports: [SimpleCardButton]
}) export class SimpleConsumer {
 
}