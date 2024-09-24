import React, { useState } from 'react'

export default function CauculeIdade() {
  
    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [resultado, setResultado] = useState('');

    const somar = () => {
        const numA = parseFloat(inputA);
        const numB = parseFloat(inputB);

        const conta = 2024 - numA;

        const teste = () => {
        if( numB !== 9){
           return `Sua idedade é ${conta} e completará aniversário no mes ${numB}.`;
        }else{
            return `Sua idade é ${conta}.`;
        }
    };
        
        setResultado(teste());
    };

return (
    <div>
        <input type="number"
        placeholder='Digite o mes do seu nascimento'
        onChange={ (e) => setInputB (e.target.value)}
        value={inputB}
        />

        <input type="number"
        placeholder='Digite o ano do seu nascimento'
        onChange={ (e) => setInputA (e.target.value)}
        value={inputA} 
        />

        <button onClick={somar}>Somar</button>

        <p>{resultado}</p>

    </div>
  )
}
