import React from "react";
import {
  Link,
} from "react-router-dom";

import useGlobal from "../../store";

const mapRepos = (items) => {
  return items.map(item => (
    <h3 key={item.id}><Link to={`/composite-product/${item.id}`}>{item.name}</Link></h3>
  ));
};

const ListCompositeProducts = () => {
  const [globalState, globalActions] = useGlobal();
  const { status, compositeProducts } = globalState;
  React.useEffect(() => {
    globalActions.compositeProducts.getList();
  }, [])
  return (
    <>
      {status === "LOADING" && <h4>Loading...</h4>}
      {status === "SUCCESS" && mapRepos(compositeProducts)}
      {status === "EMPTY" && <h4>No composite product</h4>}
      {status === "NOT_FOUND" && <h4>404 - not found</h4>}
      {status === "ERROR" && <h4>Connection Error</h4>}
    </>
  );
};

export default ListCompositeProducts;
