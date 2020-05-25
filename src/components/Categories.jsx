import React from 'react';
const Categories = ({setCategories, categoriesBy}) => (
<div class="ui purple inverted menu">
  <a class="item" active = {categoriesBy === 'all'} onClick={setCategories.bind(this,'all')}>
    Все продукты
  </a>
  <a class="item" active = {categoriesBy === 'cake'} onClick={setCategories.bind(this,'cake')}>
    Торты
  </a>
  <a class="item" active = {categoriesBy === 'cookie'} onClick={setCategories.bind(this,'cookie')}>
    Печенье
  </a>
  <a class="item"  active = {categoriesBy === 'pie'} onClick={setCategories.bind(this,'pie')}>
    Пироги
    </a>
    <a class="item"  active = {categoriesBy === 'donuts'} onClick={setCategories.bind(this,'donuts')}>
    Пончики
    </a>
    <a class="item" active = {categoriesBy === 'icecream'} onClick={setCategories.bind(this,'icecream')}>
    Мороженое
    </a>
</div>
);


export default Categories;