
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

export default config
