import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Link} from 'react-router-dom';
import { Avatar } from '@duik/it';
import Icon from '@duik/icon';

import IconText from '../IconText';
import StarRating from '../StarRating';

import cls from './product-list-item.module.scss';

export const ProductListItem = ({
	_id,
	name,
	image,
	description,
	brand,
	category,
	price,
	countInStock,
	rating,
	numReviews,
	saved,
	likes,
	comments,
  Component,
  ...rest
}) => (
  <Component className={classnames(cls['product-list-item'])} {...rest}>
		<Link to = {`/product/${_id}`}>
			<div
				className={cls['product-list-item-cover']}
				style={{
					backgroundImage: `url(${image})`
				}}
			/>
		</Link>

    <div className={cls['product-list-item-content']}>
			<Link to = {`/product/${_id}`}>
				<h3>{name}</h3>
			</Link>
      <p>{description}</p>
      <div className={cls['product-list-item-meta']}>
        <Avatar
          name={brand}
          textTop="Brand"
        />
        <IconText icon={<Icon>clock</Icon>}>{countInStock > 0 ? "In Stock" : "Out Of Stock"}</IconText>
				<IconText icon={<Icon>money_round</Icon>}>${price}</IconText>
      </div>
    </div>
    <div className={cls['product-list-item-extra']}>
      <div>
        <IconText
          highlight={saved}
          icon={<Icon>{saved ? 'love-fill' : 'love'}</Icon>}
        >
          {likes}
        </IconText>
        <IconText icon={<Icon>message</Icon>}>{comments}</IconText>
      </div>
      {rating && <StarRating rating={rating} />}
    </div>
  </Component>
);

ProductListItem.propTypes = {
	_id : PropTypes.string,
	name : PropTypes.string,
	image : PropTypes.string,
	description : PropTypes.string,
	brand : PropTypes.string,
	category : PropTypes.string,
	price : PropTypes.number,
	countInStock : PropTypes.number,
	rating : PropTypes.number,
	numReviews : PropTypes.number,
	saved : PropTypes.bool,
	likes : PropTypes.number,
	comments : PropTypes.number,
  Component: PropTypes.any // eslint-disable-line
};

ProductListItem.defaultProps = {
  rating: null,
  saved: null,
  likes: 0,
  comments: 0,
  Component: 'div'
};

export default ProductListItem;
