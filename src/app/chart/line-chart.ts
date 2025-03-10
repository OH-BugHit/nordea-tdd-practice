import Chart from 'chart.js/auto'
import { ChartDataset } from '../../domain/dataset'

export const DEFAULT_TIMELINE_LENGTH = 30

export class LineChart extends Chart {

    constructor(
        canvas: HTMLCanvasElement,
        timelineLength: number = DEFAULT_TIMELINE_LENGTH
    ) {
        super(canvas, {
            type: 'line',
            data: { datasets: [] },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amount €'
                        }
                    }
                }
            }
        })

        this.setTimelineLength(timelineLength)
    }

    addDataset(dataset: ChartDataset) {
        const color = this.randomColor
        this.data.datasets.push({
            label: dataset.label,
            data: dataset.data.map(row => row.amount),
            borderColor: color,
            backgroundColor: color
        })
        this.update()
    }

    clearDatasets() {
        this.data.datasets = []
        this.update()
    }

    setTimelineLength(years: number) {
        this.data.labels = new ChartDataset({
            saveTimeInYears: years,
            savedAmount: 0,
            monthlyAmount: 0
        }).data.map(row => row.label)

        this.update()
    }

    private get randomColor() {
        const r = Math.floor(Math.random() * 200)
        const g = Math.floor(Math.random() * 200)
        const b = Math.floor(Math.random() * 200)
        return `rgb(${r}, ${g}, ${b})`
    }
}
