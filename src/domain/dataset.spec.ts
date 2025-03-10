import { ChartDataset } from './dataset'

describe('Chart dataset', () => {

    beforeEach(() => {
        jasmine.clock().install()
        jasmine.clock().mockDate(new Date(2025, 1, 1))
    })

    afterEach(() => {
        jasmine.clock().uninstall()
    })

    it('have label', () => {
        const dataset = new ChartDataset({
            saveTimeInYears: 1,
            savedAmount: 5000,
            monthlyAmount: 100
        })

        expect(dataset.label).toEqual('5000€ start, 100€ monthly')
    })

    it('records have label', () => {
        const dataset = new ChartDataset({
            saveTimeInYears: 1,
            savedAmount: 0,
            monthlyAmount: 0
        })

        expect(dataset.data[0].label).toEqual('January 2025')
        expect(dataset.data[5].label).toEqual('June 2025')
        expect(dataset.data[11].label).toEqual('December 2025')
    })

    it('is created for 30 years', () => {
        const dataset = new ChartDataset({
            saveTimeInYears: 30,
            savedAmount: 0,
            monthlyAmount: 0
        })

        expect(dataset.data.length).toEqual(360)
    })

    it('is calculated for 30 years', () => {
        const dataset = new ChartDataset({
            saveTimeInYears: 30,
            savedAmount: 2000,
            monthlyAmount: 50
        })

        expect(dataset.data[dataset.data.length - 1].amount).toEqual(20000)
    })
})
