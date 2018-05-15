import React, { Component } from 'react';
//import LazyLoad from 'react-lazyload';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import _ from 'underscore';
//import { loadMoreItems, searchItems, loadItems } from '../actions';
import ProductComponent from './Product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
//import AlertComponent from './Alert.component';
import { TextField, Paper } from 'material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
var Spinner = require('react-spinkit');

class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        //this.getProducts = this.getProducts.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        // Underscore debounce to manage search product functionality
        /*this.searchDebounce = _.debounce(function (keyword) {
            if (keyword) {
                this.props.dispatch(searchItems(keyword));
            } else {
                this.props.dispatch(loadItems());
            }
        }, 500);*/
    }

    // Init point to load data and attach events
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
       /* this.props.dispatch(loadItems());
        window.addEventListener("scroll", _.debounce((e) => this.getProducts(e), 100));*/
    }

    // Fetching products on scrolling using pagination(infinite scroll)
    // getProducts() {
    //     var self = this;
    //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     console.log((windowBottom / docHeight) * 100);


    //     if ((windowBottom / docHeight) * 100 >= 80 && !this.props.items.isSearch && !this.props.items.loading && this.props.items.isMoreItems) {
    //         this.props.dispatch(loadMoreItems(this.props.items.page))
    //     } else {
    //         console.log('Not Bottom');
    //     }
    // }

    // Underscore debounce to manage search product functionality
    handleChange(event) {
        //this.searchDebounce(event.target.value);
    }

    render() {

        const items = this.props.items.map((item, i) => (
            <Col xs={6} md={3} className="product-component">
                <ProductComponent key={item._id} {...item} />
            </Col>
        ));

        const alert = this.props.items.message ? null : null;
        const loading = this.props.items.loading ? <div className="item  col-xs-12 col-lg-12 spinner-section">
            <Spinner name="ball-pulse-rise" />
        </div> : null;

        return (
            <section>
                <Card className="product-section">
                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={6} className="search-bar">
                                <TextField onChange={this.handleChange} hintText="Search" fullWidth={true} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="no-padding">
                                <div>
                                    {items}
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
            </section>
        )
    }
}

// Mapping state and dispatch functions to props
ProductsComponent.propTypes = {
    items: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

//export default connect(mapStateToProps)(ProductsComponent);
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);
//export default ProductsComponent;