import React, { useState } from "react";

export default (props) => {
  const [nums, setNums] = useState(Array(props.qtdNums).fill(0));

  function geraNumerosNaoContidos(array) {
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max-min))+min
    return array.includes(novoNumero)?geraNumerosNaoContidos(array):novoNumero
  }

  function geraNumeros(){
      const novoArray = Array(props.qtdNums)
        .fill(0)
        .reduce(a=>[...a,geraNumerosNaoContidos(a)], [])
        .sort((a,b)=>a-b)
        setNums(novoArray)
  }

  return(
      <>
            <h3>Mega</h3>
            <h4>{nums.join(' ')}</h4>
            <button onClick={geraNumeros}>Gerar Números</button>
      </>
  )
};
