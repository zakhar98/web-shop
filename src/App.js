import React, { Component } from 'react';
import ProductComponent from './components/Product'
import ProductsComponent from './components/Products'
//import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let itemz = {docs: []};
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ProductsComponent items={itemz}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
