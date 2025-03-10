import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing'
import { InputComponent } from './input.component'
import { Input } from '../../domain/dataset'

describe('Input component', () => {

    let fixture: ComponentFixture<InputComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InputComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(InputComponent)
    })

    describe('pressing add button', () => {
        it('emits add event', fakeAsync(() => {
            const page = new InputPage(fixture)

            page.inputInitialSavings(5000)
            page.inputMonthlySavings(75)
            page.clickAddButton()

            expect(page.receivedEventType).toEqual('add-chart-item')
            expect(page.receivedEventDetail).toEqual({
                saveTimeInYears: 30,
                savedAmount: 5000,
                monthlyAmount: 75
            })
        }))

        it('resets input fields', fakeAsync(() => {
            const page = new InputPage(fixture)

            page.inputInitialSavings(5000)
            page.inputMonthlySavings(75)
            page.clickAddButton()

            expect(page.initialSavings).toEqual(0)
            expect(page.monthlySavings).toEqual(0)
        }))

        it('uses default values when input fields are empty', fakeAsync(() => {
            const page = new InputPage(fixture)

            page.inputInitialSavings(undefined)
            page.inputMonthlySavings(undefined)
            page.clickAddButton()

            expect(page.receivedEventDetail).toEqual({
                saveTimeInYears: 30,
                savedAmount: 0,
                monthlyAmount: 0
            })
        }))
    })

    describe('pressing reset button', () => {
        it('emits reset event', fakeAsync(() => {
            const page = new InputPage(fixture)

            page.clickResetButton()

            expect(page.receivedEventType).toEqual('clear-chart')
        }))

        it('resets input fields', fakeAsync(() => {
            const page = new InputPage(fixture)

            page.inputInitialSavings(5000)
            page.inputMonthlySavings(75)

            page.clickResetButton()

            expect(page.initialSavings).toEqual(0)
            expect(page.monthlySavings).toEqual(0)
        }))
    })
})

class InputPage {

    receivedEventType: string | undefined
    receivedEventDetail: Input | undefined

    constructor(private fixture: ComponentFixture<InputComponent>) {
        spyOn(window, 'dispatchEvent').and.callFake((event: Event) => {
            this.receivedEventType = event.type
            this.receivedEventDetail = (event as CustomEvent).detail
            return true
        })

        this.triggerChangeDetection()
    }

    async inputInitialSavings(amount?: number) {
        const element = this.fixture.nativeElement.querySelector('input[id="initial-savings"]')
        element.value = amount
        element.dispatchEvent(new Event('input'))
        this.triggerChangeDetection()
    }

    get initialSavings(): number {
        return parseInt(this.fixture.nativeElement.querySelector('input[id="initial-savings"]').value)
    }

    async inputMonthlySavings(amount?: number) {
        const element = this.fixture.nativeElement.querySelector('input[id="monthly-savings"]')
        element.value = amount
        element.dispatchEvent(new Event('input'))
        this.triggerChangeDetection()
    }

    get monthlySavings(): number {
        return parseInt(this.fixture.nativeElement.querySelector('input[id="monthly-savings"]').value)
    }

    async clickAddButton() {
        this.fixture.nativeElement.querySelector('button[id="add-button"]').click()
        this.triggerChangeDetection()
    }

    async clickResetButton() {
        this.fixture.nativeElement.querySelector('button[id="reset-button"]').click()
        this.triggerChangeDetection()
    }

    private triggerChangeDetection() {
        this.fixture.detectChanges()
        flush()
    }
}
