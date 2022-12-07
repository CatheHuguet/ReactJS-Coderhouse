 
  export const getDetail = ({productId}) => {
    return new Promise ((res, rej) => {
      setTimeout(() => {
        res(productId)
      }, "3000")
    })

  }
  