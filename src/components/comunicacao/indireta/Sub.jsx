import React from 'react'

export default props =>{

    function acao(){
        props.onClicar(Math.random(), 'fim')
    }

    return(
        <div>
            <button onClick={acao}>{props.name}</button>
        </div>
    )
}