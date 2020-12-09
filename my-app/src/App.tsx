import React from 'react';
import './App.css';
import {reverseNumber} from "./algorithms/reverseNumber";
import {romanToInteger} from "./algorithms/romanNumerals";

function App() {
    function renderButton(label: string, actionCb: ()=>string|number): React.ReactElement {
        return <button
            onClick={()=>console.log(actionCb())}
        >
            {label}
        </button>;
    }

    return (
        <div className="App">
            <h1>Hello World</h1>
            <div>
                {renderButton(
                    `reverseNumber '789'`,
                    ()=>reverseNumber(789)
                )}
                {renderButton(
                    `roman to integer 'DCCCLXXXIX'`,
                    ()=>romanToInteger(`DCCCLXXXIX`)
                )}
            </div>
        </div>
    );
}

export default App;
