import React from "react";
import globalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  status: "INITIAL",
  compositeProducts: [],
  products: [],
  selectedCompositeProduct: null,
};
const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
