import React, { useState } from 'react';
import { evaluate } from "mathjs";

function Body(props) {
    const [dispAns, setDispAns] = useState("");
    const [result, setResult] = useState(0);
    const keys = ['sqrt', '(', ')', 'C', 'sin', 'cos', 'tan', 'deg', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'];

    const keyAction = (element) => {
        const value = element.target.innerText;
        try {
            if (value === '=') {
                setResult(evaluate(dispAns));
            }

            else if (value === 'C') {
                setResult(0);
                setDispAns("");
            }

            else {
                setDispAns(dispAns + value);
            }
        }

        catch (err) {
            setResult("Invalid Expression");
        }
    }
    return (
        <div className="px-2 py-4" style={{backgroundColor: props.theme==="dark"?"#0f0923":"#ededed", color: props.theme==="dark"?"white":"black"}}>
            <h2 className='text-center'>GoCalci - A simple & Useful GUI Calculator</h2>
            <div className='my-4 py-4 container' style={{backgroundColor: props.theme==="dark"?"rgb(37 54 78)":"#98a4b5", maxWidth: "500px", borderRadius: "20px"}}>
                <div className="answer p-2" style={{backgroundColor: props.theme==="dark"?"#0d0063":"aliceBlue"}}>
                    <div>{dispAns === "" ? "0" : dispAns}</div>
                    <div>= {result}</div>
                </div>
                <div className="row text-center" style={{ paddingTop: "20px" }}>
                    {
                        keys.map((key) => {
                            return (
                                <div className='col-3 spacing' key={key}>
                                    <div  style={{cursor: "pointer", backgroundColor: props.theme==="dark"?"#6a6399":"rgb(209 229 255"}} onClick={keyAction}>{key}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body