import React, { Component } from 'react';
import api from '../../services/api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

import { ProductList, CardsContainer } from './styles'

import * as CartActions from '../../store/modules/cart/actions'
import * as DescriptionActions from '../../store/modules/description/actions'

class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const reponse = await api.get('products');

    this.setState({ products: reponse.data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product)
  }

  // handleAddProduct = product => {
  //   const { dispatch } = this.props;

  //  dispatch({
  //    type: 'ADD_TO_CART',
  //    product
  //  })
  // }

  handleDetails = product => {
    const { addDescription } = this.props;

    addDescription(product)
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList style={{ backgroundColor: 'white' }}>
        <section className="first-section">
          <div className="row">
            <div className="col col-lg-2">
              <img style={{ height: '150px' }} className="pt-5 pl-5" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGYz0LG6dS9ig/company-logo_200_200/0?e=2159024400&v=beta&t=JIvhB-vDVbhJKMFK9UtSar0qae2p9nHmQ_bu3WoVdQk" />
            </div>
            <div className="col">
              <h3 className="pt-5 ibm-h2">E-commerce test</h3>
              <p>The easiest way to shop with IBM merchandise Items. Simply to choose what you want and we'll
              work with vendors to have your order delivered as soon as possible.
                      </p>
            </div>
          </div>
          <hr></hr>
        </section>
        <div className="container content-row">
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-sm-12 col-lg-3 pt-5 pb-5">
                <div className="card h-100">
                  <img src={product.images[0].url} alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-title">{product.name}</p>
                  </div>
                  <Link to="/description">
                    <p onClick={() => this.handleDetails(product)} className="pl-3">View</p>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>

      </ProductList>


    );
  }
}



// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

const mapDispatchToProps = dispatch =>
  bindActionCreators(DescriptionActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);