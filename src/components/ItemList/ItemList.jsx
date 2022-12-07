import React from 'react'

export const ItemList = ({products}) => {
  return (
    <div>
        {products.map( product =>   <div      
                                        style={{ marginLeft: 100}}
                                        className='col-md-3'
                                        key={product.id}>                                        
                                        <div className="card w-100 mt-5" >
                                            <div className="card-header">
                                                {`${product.name} - ${product.cat}`}
                                            </div>
                                            <div className="card-body">
                                                <img src={product.image} alt='imagennnnn' className='w-50' />
                                                <br></br>
                                                <a>{product.price}</a>                                                            
                                            </div>
                                    
                                            <div className="card-footer">                                                        
                                                <button className="btn btn-outline-primary btn-block">
                                                    Ver detalle
                                                </button>
                                            </div>
                                        </div>                       
                                    </div>  
        )} 

    </div>
  )
}
