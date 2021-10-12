export default {
  jsx: `import React from 'react'
import classnames from 'classnames'
import cls from './styles.scss'

export type AlertProps = JSX.IntrinsicElements['div'] & {
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  leftEl?: React.ReactNode,
  rightEl?: React.ReactNode,
}

export const Alert = (props: AlertProps) => {
  const {
    className,
    primary,
    success,
    warning,
    danger,
    children,
    leftEl,
    rightEl,
    ...rest
  } = props
  return (
    <div
      role="alert"
      className={classnames(cls['alert'], className, {
        [cls['alert-primary']]: primary,
        [cls['alert-success']]: success,
        [cls['alert-warning']]: warning,
        [cls['alert-danger']]: danger,
      })}
      {...rest}
    >
      {leftEl && (
        <div className={cls['alert-left-el']}>{leftEl}</div>
      )}
      <div className={cls['alert-body']}>
        {children}
      </div>
      {rightEl && (
        <div className={cls['alert-right-el']}>{rightEl}</div>
      )}
    </div>
  )
}

Alert.displayName = 'Alert'

export default Alert`,
  json: `{
  "_id": "580e63fc8c9a982ac9b8b745" 
  "lastUpdated": "2016-10-24T19:42:38.929Z",
  "createdOn": "2016-10-24T19:41:48.349Z",
  "name": "Blog Posts",
  "slug": "post",
  "singularName": "Blog Post",
  "fields": [
    {
      "id": "7f62a9781291109b9e428fb47239fd35",
      "editable": true,
      "required": false,
      "type": "RichText",
      "slug": "post-body",
      "name": "Post Body"
    },
    {
      "validations": {
        "singleLine": false
      },
      "id": "ac4ffead755a78c710c44042f528b073",
      "helpText": "A summary of the blog post",
      "editable": true,
      "required": false,
      "type": "PlainText",
      "name": "Post Summary"
    },
    {
      "id": "ba1cfbdaa6b38b8e95e9b5063da8a5bd",
      "editable": true,
      "required": false,
      "type": "ImageRef",
      "name": "Main Image"
    }
  ]
}`
};
