import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ProductDescription} from './styles'
import {Link} from 'react-router-dom';
import {Home} from './../Home'
import * as DescriptionActions from '../../store/modules/description/actions'
import {bindActionCreators} from 'redux'

//import {Container} from '.styles';

function Description ({cart, removeFromCart}){
  

    return (
      <ProductDescription>
        <div className="container-fluid pt-5">
          <Link to="/">
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
              <p>{product.description}</p>
            </div>
            <div className="col mr-5 pr-5">
            </div>
          </div>
        
      ))}
      </div>
      </ProductDescription>
      
    );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DescriptionActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Description);