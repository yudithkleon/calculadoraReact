import React, { useState } from 'react'
import './App.css'


const CalcularApp = () => {
    const [calcular, setCalcular] = useState("")

    const Calculando=(e)=>{
        setCalcular(calcular.concat(e.target.value));
    }

    const atras =()=>{
        setCalcular(calcular.slice(0, -1));
    }

    const Operacion=()=>{
        try{
            setCalcular(eval(calcular).toString());
        }catch(err){
            setCalcular("Error")
        }
    }

    return (
        <div className="container">
            <input value={calcular}/>
            <div>
                <div className="columnas">
                     <button className="grande" onClick={e=> setCalcular("")}>AC</button>
                     <button onClick={atras}>C</button>
                     <button id="divide" onClick={e=> setCalcular(calcular+ e.target.value)} value="/">/</button>
                     <button id="multiply" onClick={e=> setCalcular(calcular+ e.target.value)} value="*">x</button>

                    <button id="seven" onClick={Calculando} value="7">7</button>
                    <button id="eight" onClick={Calculando} value="8">8</button>
                    <button id="nine" onClick={Calculando} value="9">9</button>
                    <button id="suma" onClick={e=> setCalcular(calcular+ e.target.value)} value="+">+</button>

                    <button id="four" onClick={Calculando} value="4">4</button>
                    <button id="five" onClick={Calculando} value="5">5</button>
                    <button id="six" onClick={Calculando} value="6">6</button>
                    <button id="subtract" onClick={e=> setCalcular(calcular+ e.target.value)} value="-">-</button>
               
                    <button id="one" onClick={Calculando} value="1">1</button>
                    <button id="there" onClick={Calculando}value="3" >3</button>
                    <button id="two" onClick={Calculando} value="2">2</button>
                    <button className="quals" id ="quals" onClick={Operacion} value="=">=</button>
                    <button id="subtract" onClick={e=> setCalcular(calcular+ e.target.value)} value=".">.</button>
                    <button id="zero" onClick={Calculando} value="0">0</button>
  
                </div>

            </div>
        </div>
    )
}

export default CalcularApp
