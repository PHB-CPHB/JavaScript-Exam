import React from "react";
import {Router,Route, IndexRoute,hashHistory} from "react-router";
import Product from "./views/product";
import App from "./App";
import Company from "./views/company";
import Blog from "./views/blog";
import Details from "./views/details";
import Home from "./views/home";

 export default class RouterComponent extends React.Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   bookStore={this.props.bookStore}/>
            <Route path="products/details/:id" component={Details}
                   bookStore={this.props.bookStore}/>
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
          </Route>
        </Router>
      </div>
    );
  }
}