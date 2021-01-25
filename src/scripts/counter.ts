
export class Counter {
    onchange: (count: any) => void;

    public constructor(private wrapper: HTMLElement, private count: number) {
        this.createElement();
        this.updateCounterValue();
    }

    private createElement(): void {
        let counterTemplate = `
            <div class="counter-in-popup">
            <div class="minus">-</div>
            <div class="counter-value"></div>
            <div class="plus">+</div>
            </div>
        `;
        this.wrapper.innerHTML = counterTemplate;
        let minusElement: HTMLElement = <HTMLElement>this.wrapper.getElementsByClassName('minus')[0];
        let plusElement: HTMLElement = <HTMLElement>this.wrapper.getElementsByClassName('plus')[0];
        minusElement.onclick = () => { this.minus() };
        plusElement.onclick = () => { this.plus() };
    }

    private updateCounterValue(): void {
        let counterValueElement: HTMLElement = <HTMLElement>this.wrapper.getElementsByClassName('counter-value')[0];
        counterValueElement.innerText = this.count.toString();
        if (this.onchange)
            this.onchange(this.count);
    }

    private plus(): void {
        this.count++;
        this.updateCounterValue();
    }

    private minus(): void {
        this.count--;
        this.updateCounterValue();
    }

}
