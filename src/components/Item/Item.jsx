import {  Link } from 'react-router-dom'

export const Item = ({product}) => {
  return (
            <div      
                style={{ marginLeft: 100}}
                className='col-md-3'
                key={product.id}>   

                <Link to={`/detail/${product.id}`}>
                    <div className="card w-100 mt-5" >
                        <div className="card-header">
                            {`${product.name} - ${product.catId}`}
                        </div>
                        <div className="card-body">
                            <img src={product.image} alt='imagennnnn' className='w-50' />
                            <br></br>
                            <p>${product.price}</p>                                                            
                        </div>
                    </div>                       
                </Link>                                    
            </div>  
  )
}

