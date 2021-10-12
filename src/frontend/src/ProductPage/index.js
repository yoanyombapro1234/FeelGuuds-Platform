import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Container,
    Form,
} from "react-bootstrap";
import { Rating, HomeTopBar, Loader, Message } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "@actions";
import { Button } from "@duik/it";

export const ProductPage = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(
        () => {
            dispatch(listProductDetails(match.params.id));
        },
        [
            dispatch,
            match,
        ] /* use effects fires off when this dependency changes */
    );

    const addToCartHandler = () => {
        // get the quantity id and the qty
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    return (
        <>
            <HomeTopBar />
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                DisplayProductDetails(product, qty, setQty, addToCartHandler)
            )}
        </>
    );
};

function DisplayProductDetails(product, qty, setQty, addToCartHandler) {
    return (
        <Container>
            <Link to='/home'>
                <Button
                    className='my-3'
                    Component='a'
                    href='#'
                    target='_blank'
                    transparent
                >
                    Go back
                </Button>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>{DisplayProductInformation(product)}</Col>
                <Col md={3}>
                    {DisplayProductStockInformation(
                        product,
                        qty,
                        setQty,
                        addToCartHandler
                    )}
                </Col>
            </Row>
        </Container>
    );
}

const DisplayProductInformation = (product) => {
    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3> {product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
    );
};
const DisplayProductStockInformation = (
    product,
    qty,
    setQty,
    addToCartHandler
) => {
    return (
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>

                {product.countInStock > 0 &&
                    DisplayProductStockDropdown(qty, setQty, product)}

                <ListGroup.Item>
                    <Row>
                        <Col>Status</Col>
                        <Col>
                            {product.countInStock > 0
                                ? "In Stock"
                                : "Out Of Stock"}
                        </Col>
                    </Row>
                </ListGroup.Item>

                <Container>
                    {product.countInStock > 0 ? (
                        <Button
                            className='my-3'
                            Component='a'
                            href='#'
                            target='_blank'
                            transparent
                            onClick={addToCartHandler}
                        >
                            Add To Cart
                        </Button>
                    ) : (
                        ""
                    )}
                </Container>
            </ListGroup>
        </Card>
    );
};

const DisplayProductStockDropdown = (qty, setQty, product) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col>Qty</Col>
                <Col>
                    <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                    >
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ProductPage;
