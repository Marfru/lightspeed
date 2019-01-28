import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { action, observable } from 'mobx';
import Modal from './common/Modal';

@inject('cartStore')
@observer
export class ProductSingle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    @observable stock = this.props.stock.remaining;

    @action reduceStock() {
        this.stock = --this.stock;
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    addItem = e => {
        this.props.cartStore.addToCart(e);
        this.reduceStock();
    }

    render() {
        const item  = this.props;
        return (
            <tr>
                <td key={item.idx}><img src={item.image} alt=''/></td>
                <td>{item.price}</td>
                <td><Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{this.stock}</p>
                    <button onClick={()=>{this.addItem(item); console.log(this.stock)}}> Add to Cart </button>
                </Modal>
                <button onClick={this.showModal} > More Info </button>
                </td>
                <td>
                    <button onClick={()=>{this.addItem(item); console.log(this.stock)}}> Add to Cart </button>
                </td>
            </tr>
        )
    }
}

export default ProductSingle;