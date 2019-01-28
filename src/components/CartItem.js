import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';

@inject('cartStore')
@observer
export class CartItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        this.props.cartStore.removeFromCart(e);    
    } 
    render() {
        let {product}= this.props;
        return (
            <tr className='basket'>
                <td>
                    - {product.title} 
                </td>
                <td>
                    {parseFloat(product.price.slice(1).replace(/,/g,''))}
                </td>
                <td>
                    <button onClick = {() => this.handleClick(product)} > Remove </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
