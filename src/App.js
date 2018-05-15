import React, { Component } from 'react';
import ProductComponent from './components/Product';
import ProductsComponent from './components/Products';
import HeaderComponent from './components/Header';
import SidebarComponent from './components/Sidebar';
import './css/App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="body">
          <HeaderComponent onClick={this.toggleTheme} />
          <GridList cols={8}>
            <div cols={2}>
              <SidebarComponent />
              <div><h1> React </h1> </div>
            </div>
            <div cols={6}>
              <ProductsComponent />
            </div>
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
