import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCart } from './styles'
import { Link } from 'react-router-dom';
import { Home } from './../Home'
import * as CartActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux'

//import {Container} from '.styles';

function Cart({ cart, removeFromCart }) {
  // function increment(product){
  //   updateAmount(product.id, product.amout + 1);
  // }

  // function decrement(product){
  //   updateAmount(product.id, product.amount - 1)
  // }

  return (
    <ProductCart>
      <div styleclassName="container-fluid pt-5">
        <Link to="/description">
          <p className="ml-5 pl-5">
            <span className="pr-2">
              <i className="fas fa-arrow-left"></i>
            </span>
              Back
            </p>
        </Link>

        <h2 className="ml-5 pl-5 ibm-h2">Shopping Cart</h2>
        <p className="ml-5 pl-5 pb-3">
           </p>
        {cart.map(product => (
          <div className="row">
            <div className="col pt-5">
              <img className="pl-5 ml-5" style={{ height: '150px' }} src={product.images[0].url} alt={product.name} />
            </div>
            <div className="col-6 mr-5 pr-5 pt-5">
              <p>{product.name}</p>
              <tr>
                <th>Size</th>
                <th>Quantity*</th>
                <th>Desire due date*</th>
              </tr>
              <tr>
                <td className="pr-2"><input type="text" value="N/a" />  </td>
                <td className="pr-2"><input type="text" value={product.amount} /></td>
                <td className="pr-2"><input type="date" /></td>
              </tr>
            </div>
            <div className="col mr-5 pr-5 pt-5">
              <p className="pr-5" onClick={() => removeFromCart(product.id)}>Remove</p>
            </div>
          </div>
        ))}
          <div className="row pb-5 pr-5">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        <Link to='#'>
                          <button type="button" className="btn btn-primary">Place order</button>
                        </Link>
                      </p>
                      <p>
                        <Link to="/">
                          <button type="button" className="btn btn-outline-primary">Continue Shopping</button>
                        </Link>
                      </p>

                      
                      <p className="pt-1">By placing your order, you agree to <a href="#">the IBM purchase policies</a> and
                      <a href="#"> IBM's personal information policies</a></p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
    </ProductCart>

  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);