import { basketElement } from "./main";
import { Product } from "./product";

const loader: HTMLElement = document.getElementById('loader');

export class ShoppingCart {
    private wrapperElement: HTMLElement;
    private products: Map<string, Product>;
    private popupWrapper: HTMLElement;
    private popup: HTMLElement;
    private popupList: HTMLElement;

    constructor() {
        const container: HTMLElement = document.getElementById('container');

        this.products = new Map<string, Product>();
        this.popupWrapper = container;

        // const template: HTMLTemplateElement = document.getElementById("row") as HTMLTemplateElement;
        // this.wrapperElement = document.getElementById("row-wrapper");
        // const content: DocumentFragment = document.importNode(template.content, true);
        // const closeElement: HTMLDivElement = content.querySelector('.jsPanelCloseIcon');
        // closeElement.onclick = () => {
        //     closePanel();
        //     this.wrapperElement.innerHTML = '';
        // };
        // content.querySelector('.jsPanelText').innerHTML = "Note: here could be your popup!";
        // this.wrapperElement.appendChild(content);
    }

    addItemToBasket(id: string, title: string, price: number) {
        if (this.popup)
            return;

        let product: Product = this.products.get(id);

        if (!product) {
            product = new Product(id, title, price);
            this.products.set(id, product);
        }
        this.updateBasketCounter();

        this.showLoader(() => {
            this.hideLoader();
            this.openPopup();
        });
    }

    updatePopupData() {

        this.popupList.innerHTML = '';

        for (let [id, product] of this.products) {
            product.appendToPopupList(this.popupList);
        }

        if (this.counter == 0)
            this.closePopup();
    }

    deleteProduct(id: string) {
        let product = this.products.get(id);
        if (product) {
            this.products.delete(id);
            this.updateBasketCounter();
            this.updatePopupData();
        }
    }

    openPopup() {
        if (this.popup)
            return;

        let popupTemplate: string = `
            <span class="close-popup" onclick="myAjax.shoppingCart.closePopup()">+</span>
            <p class="heading-popup">Товары в Вашей корзине:</p>
            <table class="heading-list-popup" width="500">
            <tr>
                <td>наименование</td>
                <td>количество</td>
                <td>стоимость</td>
            </tr>
            </table>
            <table class="popap-list" id="popupList" width="500">
            </table>
        `;
        let popupElement: HTMLElement = document.createElement('div');
        popupElement.id = 'popup';
        popupElement.classList.add('popup');
        popupElement.innerHTML = popupTemplate;
        this.popupWrapper.appendChild(popupElement);
        this.popupList = document.getElementById('popupList');

        this.popup = popupElement;

        this.updatePopupData();
    }

    closePopup() {
        if (this.popup) {
            this.popupWrapper.removeChild(this.popup);
            this.popup = undefined;
        }
    }

    showLoader(callback: TimerHandler) {
        loader.style.visibility = 'visible';
        setTimeout(callback, 2000);
    }

    hideLoader() {
        loader.style.visibility = 'hidden';
    }

    get counter() {
        return Array.from(this.products.values()).reduce((sum, product) => sum + product.getCount(), 0);
    }

    updateBasketCounter() {
        basketElement.innerText = this.counter.toString();
    }

}