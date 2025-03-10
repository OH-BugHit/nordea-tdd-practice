import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('Application', () => {

    let fixture: ComponentFixture<AppComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
    })

    it('renders chart component', () => {
        expect(new Application(fixture).chartRendered).toBeTrue()
    })

    it('renders input component', () => {
        expect(new Application(fixture).inputRendered).toBeTrue()
    })
})

class Application {

    constructor(private fixture: ComponentFixture<AppComponent>) {
        fixture.detectChanges()
    }

    get chartRendered(): boolean {
        return !!this.fixture.nativeElement.querySelector('app-chart')
    }

    get inputRendered(): boolean {
        return !!this.fixture.nativeElement.querySelector('app-input')
    }
}
