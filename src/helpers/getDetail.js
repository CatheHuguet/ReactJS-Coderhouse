let productDetail = { id: 1, name:'prod1', cat: 'veladores', 
price: 25, image1: 'imagennn1', image2:'ima2', image3:'imagen33333', description: 'blahblabalbdkjsajfsdjghfskgjhkfghskdfgaydafk' }
  
export const getDetail = ({productId}) => {
  
  return new Promise ((res, rej) => {
    setTimeout(() => {
      res(productDetail)
    }, "1000")
  })

}
