import { observable, action, computed } from 'mobx';

class CartStore {
    @observable productsInCart = [];

    @computed get count() {
        return this.productsInCart.length;
    }

    @computed get totalAmount() {
        let total = 0;
        for (let product of this.productsInCart) {
           total = total + parseFloat(product.price.slice(1).replace(/,/g,''))
        }
        return total;
    }

    @action addToCart = (product) => {
        this.productsInCart.push(product);
    }

    @action emptyCart = () => {
      return this.productsInCart = [];
    }

    @action removeFromCart = (product) => {
      const index = this.productsInCart.indexOf(product);
      if (index >= 0) {
        this.productsInCart.splice(index, 1);
      }
    }
    @action fetchCart = () => {
        return this.productsInCart;
    }
} 
export default new CartStore();