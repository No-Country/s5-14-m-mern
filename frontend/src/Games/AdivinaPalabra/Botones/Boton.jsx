import PropTypes from "prop-types";
import "../Botones/boton.sass";

const Boton = ({ letra, clickLetras }) => {
  return (
    <button className="boton-letra" onClick={e => clickLetras(e)}>
      {letra}
    </button>
  );
};

Boton.propTypes = {
  letra: PropTypes.string,
  clickLetras: PropTypes.func
};

export default Boton;
