import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ProductDescription} from './styles'
import {Link} from 'react-router-dom';
import {Home} from './../Home'
import * as DescriptionActions from '../../store/modules/description/actions'
import {bindActionCreators} from 'redux'
import * as CartActions from '../../store/modules/cart/actions'
import handleAddProduct from './../Home/index'

//import {Container} from '.styles';

function Description ({description}){


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
        
        {description.map(product => (      
          <div className="row pb-5">
              <div className="col">
                <img style={{height: '300px'}} src={product.images[0].url} alt={product.name}/>
              </div>
              <div className="col-6">
                <p >{product.name}</p>
                <p>{product.description}</p>
              </div>
              <div className="col">
              <div className="card">
                <div className="card-body">
                  <p>This product can be shipped worldwide</p>
                  <p>Quantity
                    <input style={{width:"75%"}} type="text"/>
                  </p>
                  <p className="pt-1">Add products to the shopping cart to request a quotation. If you need a product in a different color or size, add it separately</p>
                  <button onClick={() => handleAddProduct(product)} type="button" className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
            
          </div>

        
      ))}
      </div>
      </ProductDescription>
      
    );
}

const mapStateToProps = state => ({
  description: state.description,
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, DescriptionActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Description);