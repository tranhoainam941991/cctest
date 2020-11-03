import React from "react";
import FormCompositeProduct from "./form";
// TODO: handle access component by link (refresh page or enter link directly in the browser)
const AddCompositeProduct = () => {
  return (
    <FormCompositeProduct compositeProduct={{name: '', components: []}}/>
  );
};

export default AddCompositeProduct;
