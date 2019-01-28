import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import { action, observable } from 'mobx';
import { Success } from './common/Success';
import CartItem from './CartItem';

@inject('cartStore')
@observer
export class Cart extends Component {
    
    @observable products;

    @action cartProducts() {
        this.products = this.props.cartStore.fetchCart();
    }

    @action emptyCart() {
        this.products = [];
        this.cartProducts();
    }

    constructor(props) {
        super(props);
        this.successMessage = this.successMessage.bind(this);
    }    

    componentWillMount(){
        this.cartProducts();
    }

    successMessage() {
        return <div><Success/></div>
    }

    render() {
        if (this.products.length === 0 ) {
            return (
            <div className='cart'>
                <h2>Cart</h2>
                <p>Your Shopping Cart is empty!</p>
            </div>
            )
        } else {
        return (
            <div className='cart'>
                <h2>Cart</h2>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                    {
                        this.products.map((product, idx) => {
                            return (<CartItem product={product} key={idx}/>)
                        })
                    }
                    <tr>
                        <th>Total Amount</th>
                        <th>
                            ${parseFloat(this.props.cartStore.totalAmount)}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button onClick={()=> {
                                this.props.cartStore.emptyCart();
                                this.emptyCart();
                                alert("Thanks for purchasing! The shopping cart has been cleared")}}>
                                Check Out
                            </button>
                        </th>
                    </tr>
                </table>
            </div>
        )}
    }
}

export default Cart;
