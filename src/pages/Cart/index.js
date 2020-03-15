import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ProductCart} from './styles'
import {Link} from 'react-router-dom';
import {Home} from './../Home'

//import {Container} from '.styles';

function Cart ({cart, dispatch}){
    return (
      <ProductCart>
        <div className="container-fluid pt-5">
          <Link>
            <p className="ml-5 pl-5">
              <span className="pr-2">
                <i class="fas fa-arrow-left"></i>
              </span>
              Back
            </p>
          </Link>
        
          <h4 className="ml-5 pl-5">Shopping Cart</h4>
           <p className="ml-5 pl-5 pb-3">
            x Items
           </p>
        {cart.map(product => (      
          <div className="row">
            <div className="col pt-5">
              <img className="pl-5 ml-5" style={{height: '150px'}} src={product.images[0].url} alt={product.name}/>
            </div>
            <div className="col-6 mr-5 pr-5">
              <p>{product.name}</p>
              <tr>
                <th>Size</th>
                <th>Quantity*</th>
                <th>Desire due date*</th>
              </tr>
              <tr>
                <td className="pr-2"><input type="text" value="N/a"/>  </td>
                <td className="pr-2"><input type="number" value={product.amount}/></td>
                <td className="pr-2"><input type="date"/></td>
              </tr>
            </div>
            <p onClick={() => dispatch ({type: 'REMOVE_FROM_CART', id: product.id})}>Remove</p>

          </div>
        
      ))}
      </div>
      </ProductCart>
      
    );
}

const mapStateToProps = state => ({
  cart: state.cart,
});


export default connect(mapStateToProps)(Cart);