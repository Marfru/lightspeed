import React, { Component } from 'react';
import Modal from './common/Modal';

export class MoreInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false
        }
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
    }

    render() {
        const item = this.props;
        return (
        <td>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.stock.remaining}</p>
                <button onClick={()=> {this.hideModal(); this.addItem(item)}}> Add to Cart </button>
            </Modal>
            <button onClick={this.showModal} > More Info </button>
        </td>
        );
    }
  }

  export default MoreInfo;