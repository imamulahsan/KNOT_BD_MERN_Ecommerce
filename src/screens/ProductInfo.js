import React from 'react'
import products from '../products'

export default function ProductInfo({match}) {

    const productid = match.params.id

    return(
        <div>
          
        <h1>This is product description page {productid}</h1>
        </div>
    )

}