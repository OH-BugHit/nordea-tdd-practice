import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ChartComponent } from './chart.component'
import { LineChart } from './line-chart'
import Chart from 'chart.js/auto'

describe('Chart component', () => {

    let fixture: ComponentFixture<ChartComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChartComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(ChartComponent)
    })

    it('renders chart', () => {
        expect(new ChartPage(fixture).rendered).toBeTrue()
    })

    describe('event listener', () => {

        beforeEach(async () => { fixture.detectChanges() })

        it('adds new chart item', () => {
            const page = new ChartPage(fixture)

            window.dispatchEvent(new CustomEvent('add-chart-item', {
                detail: {
                    timeInYears: 10,
                    savedAmount: 5000,
                    monthlyAmount: 100
                }
            }))

            expect(page.addChartItem).toHaveBeenCalledTimes(1)
        })

        it('clears all chart items', () => {
            const page = new ChartPage(fixture)

            window.dispatchEvent(new CustomEvent('clear-chart'))

            expect(page.clearChartItems).toHaveBeenCalledTimes(1)
        })
    })
})

class ChartPage {

    addChartItem: jasmine.Spy
    clearChartItems: jasmine.Spy

    constructor(private fixture: ComponentFixture<ChartComponent>) {
        fixture.detectChanges()

        this.addChartItem = spyOn(this.chart, 'addDataset').and.stub()
        this.clearChartItems = spyOn(this.chart, 'clearDatasets').and.stub()
    }

    get rendered(): boolean {
        return !!this.canvas
    }

    get canvas(): HTMLCanvasElement {
        return this.fixture.nativeElement.querySelector('canvas[id="chart"]')
    }

    get chart(): LineChart {
        return Chart.getChart(this.canvas) as LineChart
    }
}
