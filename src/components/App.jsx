import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import {Card} from 'semantic-ui-react';


import ProductCard from '../containers/ProductCard';
import  Categories from '../containers/Categories';
import  Menu from '../containers/Menu';





class App extends Component{
 
componentWillMount(){
  const {setProducts}=this.props;
  axios.get('/products.json').then(({data}) => {
  setProducts(data);
  });
}


render() {
  const { products, isReady} = this.props;
  return(
    <Container>
      <Menu />
      <Categories  />
      <Card.Group itemsPerRow={3}>
      {!isReady? 'Загрузка...': products.map((product, i) => <ProductCard key={i} {...product} />)}
      </Card.Group>
    </Container>
  ); 
}
} 



export default App;
