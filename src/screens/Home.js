import React from 'react'
import products from '../products'
import Product from '../components/Product'

export default function Home() {
    return(
        <div>
            <div className="row">

                {products.map(product=>{
                    return <Product product = {product}/>
                })

                }

            </div>


        </div>
    )

}