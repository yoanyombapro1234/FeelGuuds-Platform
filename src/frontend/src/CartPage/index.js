import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    ListGroup,
    Container,
    Image,
    Form,
    Button,
    Card,
} from "react-bootstrap";
import { Message, HomeTopBar } from "@components";
import { addToCart, removeFromCart } from "@actions";

export const CartPage = ({ match, location, history }) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        // only dispatch add to cart if there is a product id
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = (id) => {
        history.push("/login?redirect=shipping");
    };

    return (
        <>
            <HomeTopBar />
            <Container className='my-3'>
                <Row>
                    <Col md={8}>
                        <h1>Shopping Cart</h1>
                        {cartItems.length === 0 ? (
                            <Message variant='danger'>
                                Your cart is empty <Link to='/'> Go Back </Link>{" "}
                            </Message>
                        ) : (
                            DisplayCartItems(
                                cartItems,
                                dispatch,
                                removeFromCartHandler
                            )
                        )}
                    </Col>
                    <Col md={4}>
                        {DisplayCartSubtotal(cartItems, checkoutHandler)}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartPage;

const DisplayCartItems = (cartItems, dispatch, removeFromCartHandler) => {
    return (
        <ListGroup variant='flush'>
            {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                    <Row>
                        <Col md={2}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                            />
                        </Col>
                        <Col md={3}>
                            <Link to={`/product/${item.product}`}>
                                {item.name}
                            </Link>
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={3}>
                            <Form.Control
                                as='select'
                                value={item.qty}
                                onChange={(e) =>
                                    dispatch(
                                        addToCart(
                                            item.product,
                                            Number(e.target.value)
                                        )
                                    )
                                }
                            >
                                {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    )
                                )}
                            </Form.Control>
                        </Col>
                        <Col md={2}>
                            <Button
                                type='button'
                                variant='light'
                                onClick={() =>
                                    removeFromCartHandler(item.product)
                                }
                            >
                                <i className='fas fa-trash' />
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

const DisplayCartSubtotal = (cartItems, checkoutHandler) => {
    return (
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>
                        {" "}
                        Subtotal (
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                        items{" "}
                    </h3>
                    $
                    {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        Proceed To Checkout
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
