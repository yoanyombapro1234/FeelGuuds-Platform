import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} from "../@constants";

export const listProducts = () => async dispatch => {
  try {
    // dispatch to reducer as we are starting product list request
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // request data from the backend
    const { data } = await axios.get("/api/products/top");

    // dispatch to reducer result of backend api invocation
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const listProductDetails = id => async dispatch => {
  try {
    // dispatch to reducer as we are starting product list request
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    // request data from the backend
    const { data } = await axios.get(`/api/products/${id}`);

    // dispatch to reducer result of backend api invocation
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
export default { listProducts, listProductDetails };
