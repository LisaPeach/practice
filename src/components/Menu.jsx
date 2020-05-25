import React from 'react';
import { Menu, Icon, Button, Popup } from 'semantic-ui-react';

const CartComponent = product =>{
const {title, id, image, removeFromCart, addedCount,addToCart,price} = product
return(
<div class="ui items">
  <div class="item">
    <div class="image">
      <img src={image}/>
    </div>
    <div class="content">
      <a class="header">{title}</a>
      <div class="meta">
        <span><a>
          &nbsp; {price}
        <Icon name='rub' />
      </a></span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <p><Button onClick={addToCart.bind(this, product)}>
       + 
         </Button></p>
      <Button onClick={removeFromCart.bind(this,id)} color="red">Удалить</Button>
    </div>
  </div>
  </div>
);
}

const MenuComp = ({totalPrice, count, items}) => (
<Menu>
    <Menu.Item
      name='editorials'
    >
     Магазин продуктов
    </Menu.Item>

    <Menu.Menu position="right">
    <Menu.Item
      name='reviews'
    >
      Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
    </Menu.Item>
<Popup
trigger={
    <Menu.Item  name='upcomingEvents'> 
    Корзина (<b>{count}</b>) 
    </Menu.Item>
}
    content={items.map(product => <CartComponent {...product} />)}
    on = "click"
    hideOnScroll
    />
    </Menu.Menu>
  </Menu>
);
export default MenuComp;