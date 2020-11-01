import axios from "axios";
import _ from 'lodash'
export const getList = async (store, request = axios) => {
  const status = "LOADING";
  store.setState({ status });
  try {
    const response = await request.get(
      `http://localhost:3006/api/composite-products`
    );
    const items = response.data
    const isReposEmpty = items.length === 0;
    const status = isReposEmpty ? "EMPTY" : "SUCCESS";
    store.setState({ compositeProducts: items, status });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? "NOT_FOUND" : "ERROR";
    store.setState({ status });
  }
};

export const detail = async (store, id) => {
  const item = _.find(store.state.compositeProducts, {id});
  store.setState({selectedCompositeProduct: item});
}
