import React, {useState} from 'react'
import Sub from './Sub'

export default (props)=>{

    const [num,setNum]=useState(0)
    const [text,setTexto]=useState()
function aoClicar(valorGerado, texto){
    setNum(valorGerado)
}

    return(
        <div>
            <h4>Valor: {num}</h4>
            <Sub name="Random" onClicar={aoClicar}></Sub>
        </div>
    )
}
   