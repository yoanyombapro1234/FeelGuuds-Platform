import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../@constants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    // dispatch to reducer and manipulate state
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    // save contents of cart in local storage
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    // dispatch to reducer to manipulate state
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    // update local storage with the current cart
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

export default addToCart;
