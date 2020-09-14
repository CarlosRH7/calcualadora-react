/////////////////////////////////
// Componentes
/////////////////////////////////

// Importaciones
/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import './App.css'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'



// Creación de la función del componente
const App = () => {
    // Array destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posición: funcion que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    // arrayTextoFuncionModificaTexto => ["hola", funcion]

    const value = items.length > 0 ? items[items.length-1]: "0";

    console.log('Renderización de App', value)

    return (
        
        <main className="react-calculator">
            
            <Result value={value} />
            <Numbers 
                onClickNumber={number => {
                    console.log("Click en number: ",number)
                    setStack(`${stack}${number}`)
                }}
            />
            <Functions 
                onContentClear={() => {
                    console.log("Content clear")
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log("Content delete", newStack)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => {
                    console.log("Operation: ", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => { 
                    console.log("Equal: ", equal)
                    setStack(eval(stack).toString())
                }}
            />
        </main>
    );
};

// Exportación
export default App;