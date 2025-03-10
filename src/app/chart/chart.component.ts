import { Component, ElementRef, OnInit } from '@angular/core'
import { LineChart } from './line-chart'
import { ChartDataset } from '../../domain/dataset'

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.scss',
    imports: [],
    standalone: true
})
export class ChartComponent implements OnInit {

    constructor(private element: ElementRef) {}

    ngOnInit() {
        const canvas = this.element.nativeElement.querySelector('canvas[id="chart"]')!
        const chart = new LineChart(canvas)

        window.addEventListener('add-chart-item', (event: CustomEventInit) => {
            chart.addDataset(new ChartDataset(event.detail))
        })

        window.addEventListener('clear-chart', () => {
            chart.clearDatasets()
        })
    }
}
