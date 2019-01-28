import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ItemsCount from './ItemsCount';
import ProductList from './ProductList';
import Cart from './Cart';

@inject('cartStore')
@observer
export class Home extends Component {
  render() {
    return (
      <div className='mainWrapper'>
        <ItemsCount/>
        <Cart/>
        <ProductList/>
      </div>
    );
  }
}

export default Home;
