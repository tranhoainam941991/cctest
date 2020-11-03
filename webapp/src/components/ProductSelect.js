import React from 'react';

import useGlobal from "../store";

const ProductSelect = ({product, path, updateCompositeProduct, deleteCompositeProduct}) => {
  const [globalState, globalActions] = useGlobal();
  const { products } = globalState;
  const onProductChange = (e) => {
    // TODO prevent duplicated ID (or may be not)
    const value = e.target.value
    product.productId = value;
    updateCompositeProduct(path, product);
  }
  const onQuantityChange = (e) => {
    const value = e.target.value
    product.quantity = value;
    updateCompositeProduct(path, product);
  }
  const onDelete = () => {
    deleteCompositeProduct(path);
  }
  return (<>
    <div className="display-block">
      <select onChange={onProductChange}>
        <option></option>
        {products.map((item) => {
          return <option value={item.id} selected={product.productId === item.id}>{item.name}</option>
        })}
      </select>
      <input type="number" name="quantity" value={product.quantity} onChange={onQuantityChange}/>
      <button onClick={onDelete}>X</button>
    </div>

  </>);
};

export default ProductSelect;