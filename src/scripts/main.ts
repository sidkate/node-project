import '/src/assets/themes/base/styles/base.less';
import '/src/assets/themes/base/images/logo2.jpg';
import '/src/assets/themes/base/images/loader.gif';
import { ShoppingCart } from "./shopping-cart";

export let shoppingCart: ShoppingCart;

// export function closePanel(): void {
//     shoppingCart = null;
// }

export const basketElement: HTMLElement = document.getElementById('basket');

window.onload = () => {
    shoppingCart = new ShoppingCart();
}

// basketElement.onclick = () => {
//     shoppingCart = new ShoppingCart();
//     if (!shoppingCart) {
//         shoppingCart = new ShoppingCart();
//     }
// };

export function getProducts() {
    fetch('/api/products')
        .then(resp => resp.json())
        .then(products => {
            let productsTableBody = document.getElementsByClassName("products-table-body")[0];
            productsTableBody.innerHTML = "";
            products.forEach(product => {
                const productTableRow = `
                    <tr>
                        <td>${product.title}</td>
                        <td>${product.img}</td>
                        <td>${product.price}</td>
                        <td><a href="/products/edit/${product.id}">Edit</a></td>
                        <td><span class="delete-product" onclick="myAjax.deleteProduct('${product.id}')">Delete</span></td>
                    </tr>
                `;
                productsTableBody.innerHTML += productTableRow;
            });
        })
}

export function deleteProduct(id) {
    fetch(`/api/products/${id}`, {
        method: 'DELETE'
    })
        .then((resp) => resp.json())
        .then((json) => {
            getProducts();
        })
}

export function openBurger() {
    let divElement = document.getElementsByClassName('menu-burger')[0];
    divElement.classList.toggle('_active');
    let ulElement = document.getElementsByClassName('menu-main')[0];
    ulElement.classList.toggle('_active');
}