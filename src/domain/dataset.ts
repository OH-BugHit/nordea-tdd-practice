export interface Dataset {
    label: string
    data: Data[]
}

export interface Data {
    label: string
    amount: number
}

export interface Input {
    saveTimeInYears: number
    savedAmount: number
    monthlyAmount: number
}

export class ChartDataset implements Dataset {

    private startTime = new Date().getFullYear()
    private months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    label: string
    data: Data[] = []

    constructor(input: Input) {
        this.label = `${input.savedAmount}€ start, ${input.monthlyAmount}€ monthly`

        // Iterate years
        for (let year = this.startTime; year < (this.startTime + input.saveTimeInYears); year++) {
            // Iterate months
            for (const month of this.months) {
                input.savedAmount += input.monthlyAmount
                this.data.push({
                    label: `${month} ${year}`,
                    amount: input.savedAmount
                })
            }
        }
    }
}
