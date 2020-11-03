import React from "react";
import _ from 'lodash'
import {
  useParams,
} from "react-router-dom";

import useGlobal from "../../store";
import FormCompositeProduct from "./form";
// TODO: handle access component by link (refresh page or enter link directly in the browser)
const EditCompositeProduct = () => {
  const [globalState, globalActions] = useGlobal();
  const [compositeProduct, setCompositeProduct] = React.useState({});
  const {id} = useParams();
  React.useEffect(() => {
    globalActions.compositeProducts.getList();
  }, [])
  React.useEffect(() => {
    const find = _.find(globalState.compositeProducts, {id});
    setCompositeProduct(find);
  }, [id, globalState.compositeProducts])
  return (
    <>
      {!compositeProduct && <h4>Loading...</h4>}
      {compositeProduct && (
        <FormCompositeProduct compositeProduct={compositeProduct}/>
      )}
    </>
  );
};

export default EditCompositeProduct;
