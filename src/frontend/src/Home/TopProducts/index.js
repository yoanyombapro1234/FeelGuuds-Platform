import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from "@duik/it";

import {
  ProductList,
  ProductListItem,
  IconHeadline,
  Loader,
  Message
} from "../../@components";
import cls from "./top-products.module.scss";
import { listProducts } from "../../@actions";

export const TopProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(
    () => {
      dispatch(listProducts());
    },
    [dispatch] /* use effects fires off when this dependency changes */
  );

  return (
    <ContainerVertical>
      <ContainerHorizontal>
        <ScrollArea>
          <div className={cls["tutorials-animations"]}>
            <IconHeadline
              description="Top products of the day .... Lets keep them trending."
              icon="🏃🏻"
              title="Top Products"
            />
            <div>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                GetProductList(products)
              )}
            </div>
          </div>
        </ScrollArea>
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

function GetProductList(products) {
  return (
    <ProductList>
      {products.map(item => (
        <ProductListItem key={item.imgUrl} Component={Widget} {...item} />
      ))}
    </ProductList>
  );
}

export default TopProducts;
