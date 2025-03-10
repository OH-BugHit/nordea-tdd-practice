import { LineChart } from './line-chart'
import { ChartDataset } from '../../domain/dataset'

describe('Line chart', () => {

    it('creates chart with custom timeline length', () => {
        const chart = new LineChart(document.createElement('canvas'), 20)

        expect(chart.data.labels?.length).toEqual(240)
    })

    it('changes timeline length', () => {
        const chart = new LineChart(document.createElement('canvas'))

        chart.setTimelineLength(10)

        expect(chart.data.labels?.length).toEqual(120)
    })

    it('adds new dataset', () => {
        const chart = new LineChart(document.createElement('canvas'))

        chart.addDataset(new ChartDataset({
            saveTimeInYears: 30,
            savedAmount: 5000,
            monthlyAmount: 100
        }))

        expect(chart.getVisibleDatasetCount()).toEqual(1)
    })

    it('clears all datasets', () => {
        const chart = new LineChart(document.createElement('canvas'))
        chart.data.datasets.push({
            label: 'testing',
            data: [0, 1, 2, 3]
        })
        chart.update()

        chart.clearDatasets()

        expect(chart.getVisibleDatasetCount()).toEqual(0)
    })
})
