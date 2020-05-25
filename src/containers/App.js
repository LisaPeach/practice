import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import App from '../components/App';
import filter from 'lodash/filter.js';



const sortBy = (products, categoriesBy, type) => {
switch (categoriesBy){
  case 'all':
    return products;
  case 'cake':
    return filter(products, {type:"cake"});
    case 'cookie':
      return filter(products, {type:"cookie"});
    case 'pie':
      return filter(products, {type:"pie"});
    case 'donuts':
      return filter(products, {type:"donut"});
    case 'icecream':
      return filter(products, {type:"ice-cream"});
}
};

const mapStateToProps = ({ products}) =>({
    products: sortBy(products.items, products.categoriesBy),
    isReady: products.isReady
  });
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(productsActions, dispatch),
    });

  export default connect (mapStateToProps, mapDispatchToProps)(App);