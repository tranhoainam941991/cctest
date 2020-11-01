import React from "react";
import _ from 'lodash'
import {
  useParams,
  useHistory
} from "react-router-dom";

import useGlobal from "../../../store";
import ProductSelect from "./ProductSelect";
import ProductGroup from "./ProductGroup";
// TODO: handle access component by link (refresh page or enter link directly in the browser)
const EditCompositeProducts = () => {
  const history = useHistory();
  const [globalState, globalActions] = useGlobal();
  const { selectedCompositeProduct } = globalState;
  const [compositeProduct, setCompositeProduct] = React.useState(selectedCompositeProduct);
  const {id} = useParams();
  React.useEffect(() => {
    globalActions.compositeProducts.detail(id);
    globalActions.products.getList();
  }, [])
  React.useEffect(() => {
    setCompositeProduct(selectedCompositeProduct);
  }, [selectedCompositeProduct]);
  const updateCompositeProduct = (path, data) => {
    const clone = _.cloneDeep(compositeProduct);
    _.set(clone, path, data);
    setCompositeProduct(clone);
  }
  const onAddItem = path => e => {
    const type = e.target.value;
    if (!type) return;
    let item = '';
    switch (type) {
      case 'product':
        item = {productId: '', quantity: 0, type: 'PRODUCT'};
        break;
      case 'group':
        item = {label: '', type: 'GROUP', components: []}
        break;
    }
    const clone = _.cloneDeep(compositeProduct);
    const target = _.get(clone, path);
    target.push(item);
    _.set(clone, path, target);
    setCompositeProduct(clone);
  }
  const backToList = () => { history.push('/')}
  const deleteCompositeProduct = (path) => {
    // TODO delete
  }
  return (
    <>
      {!compositeProduct && <h4>Loading...</h4>}
      {compositeProduct && (
        <div className="container">
          <form>
            <label>
              Name:
              <input type="text" name="name" value={compositeProduct.name}/>
              {/*TODO: Update name*/}
            </label>

            <label>Components</label>
            {_.has(compositeProduct, 'components') ? (
                <ProductGroup group={compositeProduct} updateCompositeProduct={updateCompositeProduct} path={`components`} onAddItem={onAddItem}/>
            ) : (
              <></>
            )}
            <button type="submit" value="Submit" className="bg1">Save</button>
            {/*TODO: Submit call API*/}
            <button className="bg2" onClick={backToList}>Cancel</button>
          </form>
        </div>
      )}

    </>
  );
};

export default EditCompositeProducts;
