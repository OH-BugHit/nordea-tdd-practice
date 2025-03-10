import { Component } from '@angular/core'
import { ChartComponent } from './chart/chart.component'
import { InputComponent } from './input/input.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        ChartComponent,
        InputComponent
    ],
    standalone: true
})
export class AppComponent {}
