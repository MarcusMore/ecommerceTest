import React, { Component } from 'react';
import api from '../../services/api'
import {connect} from 'react-redux'

import {ProductList, CardsContainer} from './styles'


class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount(){
    const reponse = await api.get('products');

    this.setState({products: reponse.data});
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    })
  }

  render() {
    const {products} = this.state;
    return (
            <ProductList className="container">
               <section className="first-section">
                  <div className="row">
                    <div className="col col-lg-2">
                      <img style={{height:'150px'}} className="pt-5 pl-5" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGYz0LG6dS9ig/company-logo_200_200/0?e=2159024400&v=beta&t=JIvhB-vDVbhJKMFK9UtSar0qae2p9nHmQ_bu3WoVdQk"/>
                    </div>
                    <div className="col">
                      <h3 className="pt-5">E-commerce test</h3>
                      <p>The easiest way to shop with IBM merchandise Items. Simply to choose what you want and we'll 
                        work with vendors to have your order delivered as soon as possible.
                      </p>
                    </div>
                  </div> 
                <hr></hr>
              </section>
              {products.map(product => (
                <div key={product.id}>
                  <div className="col-sm-12 col-lg-3 pt-5 pb-5">
                    <div className="card">
                        <img src={product.images[0].url} alt={product.name} className="card-img-top"/>
                        <div className="card-body">
                          <p className="card-title">{product.name}</p>
                        </div>
                          <p onClick={() => this.handleAddProduct(product)} className="pl-3">View</p>  
                    </div>
                  </div>
                </div>
              ))}
           </ProductList>


    );
  }
}

export default connect()(Home);