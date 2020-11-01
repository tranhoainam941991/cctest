import React from 'react';

import ProductSelect from "./ProductSelect";
import _ from "lodash";

const ProductGroup = ({group, updateCompositeProduct, path, onAddItem, deleteCompositeProduct}) => {
  const isRoot = _.has(group, 'name');
  return (<>
    <div className="wrapper">
      {!isRoot ? (
        <label>
          Group label:
          <input type="text" name="name" value={group.label}/>
          {/*TODO change Label name*/}
        </label>
      ) : (<></>)}

      {!_.isEmpty(group.components) ? (
        group.components.map((component, index) => {
          if (component.type === 'PRODUCT') {
            return <ProductSelect product={component} updateCompositeProduct={updateCompositeProduct} path={`${path}.components.${index}`} onAddItem={onAddItem} deleteCompositeProduct={deleteCompositeProduct}/>
          }
          if (component.type === 'GROUP') {
            return <ProductGroup group={component} updateCompositeProduct={updateCompositeProduct} path={`${path}.components.${index}`} onAddItem={onAddItem} deleteCompositeProduct={deleteCompositeProduct}/>
          }
        })
      ) : (
        <></>
      )}
      <select onChange={onAddItem(path)}>
        <option value="">Add {isRoot ? '' : group.label}+</option>
        <option value="product">Add product</option>
        <option value="group">Add group</option>
      </select>
    </div>
  </>);
};

export default ProductGroup;