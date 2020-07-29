import React, { useEffect, useState } from "react";

function Clock(props){
    const [date, setDate]       = useState(new Date());
    const [hidden, setHidden]   = useState(false);
    const [timer, setTimer]     = useState(0);

    const destroyHandler = () => {
        window.clearInterval(timer);
    };

    const refresh       = () => {    setDate( new Date() );      };
    const clickHandler  = () => {    setHidden( !hidden );       };

    useEffect( 
        () => {
            let id = window.setInterval( refresh, 1000);
            setTimer(id);
            return destroyHandler;
        }, 
        []
    );


    return (
        <>
            <button onClick={clickHandler}>{hidden ? "Afficher" : "Cacher"}</button>
            { !hidden && <p>{date.toLocaleTimeString(props.locale)}</p>}
        </>
    );
}


export default Clock;