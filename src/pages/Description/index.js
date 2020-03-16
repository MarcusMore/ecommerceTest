import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductDescription } from './styles'
import { Link } from 'react-router-dom';
import { Home } from './../Home'
import * as DescriptionActions from '../../store/modules/description/actions'
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/modules/cart/actions'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//import {Container} from '.styles';

function Description({ description }) {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  let handler = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      product
    });

  }
  return (
    <ProductDescription style={{backgroundColor: 'white'}}>
      <div style={{backgroundColor: 'white'}} className="container-fluid pt-5">
        <Link to="/">
          <p >
            <span className="pr-2">
              <i class="fas fa-arrow-left"></i>
            </span>
              Back
            </p>
        </Link>

        {description.map(product => (
          <div className="row pb-5">
            <div className="col">
              <img style={{ height: '300px' }} src={product.images[0].url} alt={product.name} />
            </div>
            <div className="col-6">
              <p >{product.name}</p>
              <p>{product.description}</p>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <p>This product can be shipped worldwide</p>
                  <p>Quantity <br/>
                    <input style={{ width: "75%" }} type="text" />
                  </p>
                  <p className="pt-1">Add products to the shopping cart to request a quotation. If you need a product in a different color or size, add it separately</p>
                  <Link to='/cart'>
                    <button onClick={() => handler(product)} type="button" className="btn btn-primary">Add to Cart</button>
                  </Link>
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