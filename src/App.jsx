import './App.css'

import React from 'react'
import Card from './components/Layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'



export default (props) =>
    <div className="App">
        <h1>Fundamentos de React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro" color="#f4a261">
                <Primeiro />
            </Card>

            <Card titulo="#02 - ComParametros" color="#1978a5">
                <ComParametro titulo="Best Title Ever" subtitulo="Worst Sub Ever" />
            </Card>

            <Card titulo="#03 - ComFilhos" color="#cfb845">
                <ComFilhos>
                    <ul>
                        <li>Donatello</li>
                        <li>Rafael</li>
                        <li>Michelangelo</li>
                        <li>Leonardo</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Repetição" color="#05716c">
                <Repeticao />
            </Card>

            <Card titulo="#05 - Condicional" color="#1fbfb8">
                <Condicional num={2} />
            </Card>

            <Card titulo="#06 - Pais e Filhos" color="#7a9700">
                <Pai sobrenome="Vlaskz"></Pai>
            </Card>

            <Card titulo="#07 - Super/Sub" color="#cc2211">
                <Super> </Super>
            </Card>

            <Card titulo="#08 - Input" color="#501080">
                <Input />
            </Card>

            <Card titulo="#09 - Contador" color="#34558b">
                <Contador passo={10} valor={1000}/>
            </Card>

            <Card titulo="#10 - Mega" color="#57bbdd">
                <Mega qtdNums={8}></Mega>
            </Card>
        </div>



    </div>
