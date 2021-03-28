import React from 'react'
import products from '../../data/products'

function getProductsListItem(){
    return products.map(prod =>{
        return(
        <li key={prod.id}>
            {prod.id} - {prod.name} -> R${prod.price}
        </li>) 
    })
}

export default (props)=>

    <div>
        <h2>Repetição</h2>
        <ul>
            {getProductsListItem()}
        </ul>
    </div>
