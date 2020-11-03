import React from "react";
import _ from 'lodash'
import {
  useHistory
} from "react-router-dom";

import useGlobal from "../../store";
import ProductGroup from "../../components/ProductGroup";
// TODO: handle access component by link (refresh page or enter link directly in the browser)
const FormCompositeProduct = (props) => {
  const history = useHistory();
  const [compositeProduct, setCompositeProduct] = React.useState(props.compositeProduct);
  const [globalState, globalActions] = useGlobal();
  React.useEffect(() => {
    globalActions.products.getList();
  }, [])
  React.useEffect(() => {
    setCompositeProduct(props.compositeProduct);
  }, [props.compositeProduct])
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
    console.log(clone, path)
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

export default FormCompositeProduct;
