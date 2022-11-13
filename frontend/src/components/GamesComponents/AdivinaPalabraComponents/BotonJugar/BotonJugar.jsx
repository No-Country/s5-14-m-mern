import React from 'react';

const BotonJugar = ({ jugar, empezarJuego }) => {
    return (
        <button onClick = { () => empezarJuego() }>
            {jugar}
        </button>
    );
}

export default BotonJugar;
