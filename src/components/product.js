import React from 'react';
import ModalImage from './modal';

const Product = (props) => {
    let source = props.source;
    return (
     <div className="col-md-4 product-grid">  
        <div className="image">
				<img src={source} className="img-responsive" alt="zer" />
					<div className="overlay">
						<div className="detail"> 
                            <button className="btn btn-info btn-lg" data-toggle="modal" data-target="#imgModal">
                            View Details</button>
                        </div>
					</div>
		</div>

        <ModalImage source={props.source}/>

		<h5 className="text-center">Zer</h5>
		<h5 className="text-center">Price: 69.90 ₪</h5>
		<a href="#contact" class="btn buy">BUY</a>
        <br />
      </div> 

  
 
    )
}


export default Product;
