import PropTypes from "prop-types";

const Boton = ({ letra, clickLetras }) => {
  return <button onClick={e => clickLetras(e)}>{letra}</button>;
};

Boton.propTypes = {
  letra: PropTypes.string,
  clickLetras: PropTypes.func
};

export default Boton;
