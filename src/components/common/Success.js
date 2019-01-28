import React, { Component } from 'react';
import Modal from './Modal';
import { inject } from 'mobx-react';

@inject('cartStore')
export class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showModal() {
    this.setState({
        show: true
    })
  }

  hideModal() {
    this.setState({
        show: false
    })
  }
  
  render() {
    return (
      <th>
        <Modal show={this.state.show} handleClose={()=>this.hideModal()}>
        <p>Great! You're done!</p>
        </Modal>
        <button onClick={()=>{this.showModal(); this.props.cartStore.emptyCart()}}>Proceed to checkout!</button>
      </th>
    );
  }
}

export default Success;
