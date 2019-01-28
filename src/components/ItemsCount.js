import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('cartStore')
@observer
export class ItemsCount extends Component {
  render() {
    return (
      <div className="wrapper">
        Items in Cart: {this.props.cartStore.count}
      </div>
    );
  }
}

export default ItemsCount;