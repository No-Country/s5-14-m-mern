import React from 'react';

const Boton = ({ letra, clickLetras }) => {

    return (
        <button onClick={ (e) => clickLetras(e) }>
            {letra}
        </button>
    );
}

export default Boton;
