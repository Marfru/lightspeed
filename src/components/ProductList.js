import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ProductSingle } from './ProductSingle';


@inject('cartStore', 'productStore')
@observer
export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.props.productStore.fetchData();
    }

    render() {
        return (
            <div className='product'>
                <h2>Product List</h2>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Price</th>
                        <th>More Info</th>
                        <th>Buy Now</th>
                    </tr>
                    {
                        this.props.productStore.prodlist.map((item, index) => 
                            <ProductSingle {...item}/>
                        )
                    }
                    
                </table>
            </div>
        );
    }
}

export default ProductList;