import React from 'react'
import styles from './Button.css'

const MaterialButton = ({children, ...props}) => {
  return (
    <div>
      <div>
        <span>{children}</span>
      </div>
    </div>
  )
}

const config = {
  innerWrapper: {
    element: MaterialButton,
    props: {
      className: 'inner-wrap',
      style: {
        color: 'blue'
      }
    }
  },
  outerWrapper: {
    element: 'div',
    props: {
      className: styles.wrapper,
      style: {
        color: 'blue'
      }
    }
  },
  outerBefore: {
    element: 'span',
    children: 'before',
    props: {
      className: 'outer-before',
      style: {
        color: 'purple'
      }
    }
  },
  outerAfter: {
    element: 'span',
    children: 'after',
    props: {
      className: 'outer-after',
      style: {
        color: 'green'
      }
    }
  },
}

export default config

/*
const config = {
  outerWrapper: {
    element: 'div',
    props: {
      className: 'outer-wrap',
      style: {
        color: 'red'
      }
    }
  },
  outerBefore: {
    element: 'button',
    children: 'before',
    props: {
      className: 'outer-before',
      style: {
        color: 'purple'
      }
    }
  },
  outerAfter: {
    element: 'div',
    children: 'after',
    props: {
      className: 'outer-after',
      style: {
        color: 'green'
      }
    }
  },

  innerWrapper: {
    element: 'div',
    props: {
      className: 'inner-wrap',
      style: {
        color: 'blue'
      }
    }
  }
}
*/
