import React, { useState } from "react";

function Welcome(props) {

    const list = ["Alix Xavier","Agata","Benoît","Haythem", "Najlae","Patrick","Sami","Thierry","Thibault","Thomas","Wolfgang"];

    
    const nextHandler = (event) => {
        
        let current = pos + 1;
        if( current  >= list.length ){
            current = 0;
        }
     
        setPos(current);
        setName(list[current]);
    };

    const prevHandler = (event) => {
        let current = pos - 1;
        if( current  < 0 ){
            current = list.length - 1;
        }
     
        setPos(current);
        setName(list[current]);
    }

    const [pos, setPos] = useState(0);
    const [name, setName] = useState(list[pos]);


    return (
        <>
            <h2>Welcome {name}</h2>
            <button onClick={prevHandler}>Prev</button>
            <button onClick={nextHandler}>Next</button>
        </>
    );
}

export default Welcome;