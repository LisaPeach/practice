export const addToCart = obj => ({
    type: 'ADD_PRODUCT',
    payload: obj,
  });
  
  export const removeFromCart = id => ({
    type: 'REMOVE_PRODUCT',
    payload: id,
  });

