
let products = [
    { id: '1', name:'prod1', cat: 'veladores', price: 25, image: '', description: 'blah' }, 
    { id: '2', name:'prod2', cat: 'alfombras', price: 33, image: '' , description: 'blahblah' },
    { id: '3', name:'prod3', cat: 'almohadones', price: 66, image: '' , description: 'blahblahblah' },  
  ]
  
  export const getItems = () => {
    return new Promise ((res, rej) => {
      setTimeout(() => {
        res(products)
      }, "1000")
    })

  }
  