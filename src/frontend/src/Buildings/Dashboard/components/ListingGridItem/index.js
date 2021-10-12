import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import cls from './shopping-card-item.module.scss'

const BuildingsListingGridItem = ({
  imgUrl,
  title,
  text,
  status,
  price,
  Component,
  id,
}) => (
  <Component
    className={ cls['shopping-card-item'] }
    to={ `/buildings/listing/${id}` }
  >
    {/* Img */}
    {
      imgUrl ? (
        <div className={ cls['shopping-card-image-container'] }>
          <div
            className={ cls['shopping-card-image'] }
            style={ {
              backgroundImage: `url("${imgUrl}")`,
            } }
          />
        </div>
      ) : null
    }

    {/* Headline */}
    {
      title ? (
        <h2 className={ cls['shopping-card-title'] }>
          {title}
        </h2>
      ) : title
    }

    {/* Text */}
    {
      text ? (
        <div className={ cls['shopping-card-text'] }>
          {text}
        </div>
      ) : null
    }
    {
      status || price ? (
        <div className={ cls['shopping-card-footer'] }>
          {
            status ? (
              <div className={ cls['shopping-card-status'] }>
                {status}
              </div>
            ) : null
          }

          {
            price ? (
              <div className={ cls['shopping-card-price'] }>
                {price}
              </div>
            ) : null
          }
        </div>
      ) : null
    }
  </Component>
)

BuildingsListingGridItem.defaultProps = {
  imgUrl: null,
  title: null,
  text: null,
  status: null,
  price: null,
  Component: NavLink,
}

export default withRouter(BuildingsListingGridItem)
