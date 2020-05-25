import React from 'react';
import { Icon, Button,Card,Image,  Modal, Header } from 'semantic-ui-react';
import { addToFav } from '../actions/cart';


const ProductCard = product => {
  const { title, description, price, image, addToCart, addedCount, addToFav} = product;
return (


  <Modal  trigger={          
  <Card><div class="image content">
             <div class="ui medium image">
              <img src={image}/>
            </div></div>
            <div class="ui header">
                 {title}
            </div>
            <div class="meta">
             <span><a>
            &nbsp; {price}
          <Icon name='rub' />
          </a></span>
            </div>
            </Card>
          }>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='large' src={image} />
      <Modal.Description>
        <Header>Описание</Header>
        <p>
        {description}
         </p>
      </Modal.Description>

    </Modal.Content>
    <Modal.Header>
             <span><a>
            Цена:
            &nbsp; {price}
          <Icon name='rub' />
          </a></span>
            </Modal.Header>
    <Modal.Actions> 
    
      <Button onClick={addToCart.bind(this, product)}>
           Добавить в корзину {addedCount > 0 && `(${addedCount})`}
         </Button>
    </Modal.Actions>
  </Modal>
  )
 }

export default ProductCard;