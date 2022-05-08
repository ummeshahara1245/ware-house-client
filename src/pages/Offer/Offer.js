import React from 'react';
import'./Offer.css'
const Offer = () => {
	return (
		<div>
			<h3 className='text-center m-5'>OUR PRODUCT DEMO</h3>
			<div className="row row-cols-1 row-cols-md-6 g-4 container m-auto">
  <div className="col">
    <div className="card h-100 hover" style={{backgroundColor:'#89c74a'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_80x80.png?v=1580284143" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Milk</h5>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{backgroundColor:'#ffdedc'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-5_80x80.png?v=1580284176" classNameName="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title  text-center">Fruits</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"style={{backgroundColor:'#dff1ff'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-4_80x80.png?v=1580284192" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title  text-center">Flour</h5>
   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"style={{backgroundColor:'#fbf9c9'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-3_80x80.png?v=1580284218" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Meat</h5>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"style={{backgroundColor:'#ffdedc'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-2_80x80.png?v=1580284239" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Veggles</h5>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 "style={{backgroundColor:'#dff1ff'}}>
      <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-1_80x80.png?v=1580284251" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Eggs</h5>
       
      </div>
    </div>
  </div>
</div>
		</div>
	);
};

export default Offer;