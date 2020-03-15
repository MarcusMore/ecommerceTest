import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Cart } from './styles';
import { connect } from 'react-redux';

import {MdShoppingBasket} from 'react-icons/md'

function Header({cartSize}) {

  return (
    <nav className="navbar shadow-sm bg-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <p className="pt-3">E-commerce test</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/cart">
                  <div className="pt-3 d-inline-flex">
                    <div className="header-icon icon-wrap">
                      <i className="fas fa-shopping-cart"/>
                    </div>
                    <p className="pl-1">Cart</p>
                    <span><br/>{cartSize} itens</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);