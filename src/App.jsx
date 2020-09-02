/////////////////////////////////
// Componentes
/////////////////////////////////

// Importaciones
import React, {useState} from 'react'
import './App.css'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'


// Creación de la función del componente
const App = () => {

    const arrayTextoFuncionModificaTexto = useState("")
    // arrayTextoFuncionModificaTexto => ["hola", funcion]

    // 1er posición: valor (que inicialmente es el valor por defecto)
    const texto = arrayTextoFuncionModificaTexto[0]

    // 2da posición: funcion que me va a permitir modificar el valor por defecto
    const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    console.log('Renderización de App')
    return (
        <main className="react-calculator">
            <Result value={texto} />
            <Numbers 
                onClickNumber={number => {
                    console.log("Click en number: ",number)
                    funcionModificaTexto(number)
                }}
            />
            <Functions 
                onContentClear={() => console.log("Content clear")}
                onDelete={() => console.log("Content delete")}
            />
            <MathOperations 
                onClickOperation={operation => console.log("Operation: ", operation)}
                onClickEqual={equal => console.log("Equal: ", equal)}
            />
        </main>
    );
};

// Exportación
export default App;