import React from 'react';
import Product from './product';

const ProductsList = (props) => {
    const Products = props.photos.map((product) => {
        return <Product source={product} key={product.toString()} />
    });

    return (
      <div className="products-container" id="products">  
        <h2> הזרים שלנו </h2>
        <br />
        <div className="row">
            {Products}
            </div>
      </div>  
    );
};


export default ProductsList;