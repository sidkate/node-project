import { shoppingCart } from "./main";
import { Counter } from "./counter";

export class Product {

    private count: number;

    constructor(
        private id: string,
        private title: string,
        private price: number
    ) {
        this.count = 1;
    }

    appendToPopupList(wrapper) {
        // destructuring assignment example
        // let [title, count, price] = [this.title, this.count, this.price];
        // let cost = count * price;
        let basketItemTemplate = `
            <td>${this.title}</td>
            <td class="counter"></td>
            <!--<td>${this.count} шт. </td>-->
            <td><span class="cost">${this.getCost()}</span> руб. </td>
            <td class="delete-item-basket" onclick="myAjax.shoppingCart.deleteProduct('${this.id}')"> + </td>
        `;

        let basketItem = document.createElement('tr');

        basketItem.innerHTML = basketItemTemplate;

        let costElement: HTMLElement = <HTMLElement>basketItem.getElementsByClassName('cost')[0];

        wrapper.appendChild(basketItem);
        let counterWrapper: HTMLElement = <HTMLElement>basketItem.getElementsByClassName('counter')[0];
        let counter = new Counter(counterWrapper, this.count);
        counter.onchange = (count) => {
            this.count = count;
            if (this.count == 0) {
                shoppingCart.deleteProduct(this.id);
                return;
            }
            costElement.innerText = this.getCost().toString();
            shoppingCart.updateBasketCounter();
        }
    }

    getCount() {
        return this.count;
    }

    getCost() {
        return this.count * this.price;
    }
}
