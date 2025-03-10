import { Component } from '@angular/core'
import { DEFAULT_TIMELINE_LENGTH } from '../chart/line-chart'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    imports: [FormsModule],
    standalone: true
})
export class InputComponent {

    savedAmount: number = 0
    monthlyAmount: number = 0

    addButtonClicked() {
        window.dispatchEvent(new CustomEvent('add-chart-item', {
            detail: {
                saveTimeInYears: DEFAULT_TIMELINE_LENGTH,
                savedAmount: this.savedAmount || 0,
                monthlyAmount: this.monthlyAmount || 0
            }
        }))
        this.resetInputFields()
    }

    resetButtonClicked() {
        window.dispatchEvent(new CustomEvent('clear-chart'))
        this.resetInputFields()
    }

    private resetInputFields() {
        this.savedAmount = 0
        this.monthlyAmount = 0
    }
}
