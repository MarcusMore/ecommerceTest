import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Description from './pages/Description'

export default function Routes (){
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/description" component={Description}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    );
  }