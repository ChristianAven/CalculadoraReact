// importacion 
/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import Operations from './components/Operations'
import './App.css'

// generacion de la funcion del componente
// no recibe parametros
const  App = () => {
    // Array Destructuring
    const [ Stack, setStack ] = useState("")

    const items = words(Stack, /[^-^+^*^/]+/g)
    // lo que ejecuta la funcion
    console.log("App", items)
    const value = items.length > 0 ? items[items.length-1] : 0
    return (
    <main className='react-calculator'>
        <Result num={value}></Result>

        <Numbers onClickNumber={number => { console.log("number: ", number )
                                            setStack(`${Stack}${number}`)}}>
        </Numbers>

        <Functions 
                onContentClear={() => { console.log("Content Clear")
                                    setStack('')}}

                onDelete={() => { if (Stack.length > 0){
                                console.log("delete")
                                const newStack = Stack.substring(0, Stack.length -1)
                                setStack(newStack) }}}>
        </Functions>

        <Operations 
                clickOperations={operation => { console.log("operacion: ", operation)
                                                setStack(`${Stack}${operation}`)}}
            clickEqual={equal => {  console.log("igual: ", equal)
                                    setStack(eval(Stack).toString())}}>
        </Operations>
    </main>)
}

// exportacion 
export default App