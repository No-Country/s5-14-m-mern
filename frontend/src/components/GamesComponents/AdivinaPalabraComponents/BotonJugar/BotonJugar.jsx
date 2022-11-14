import PropTypes from "prop-types";

const BotonJugar = ({ jugar, empezarJuego }) => {
  return <button onClick={() => empezarJuego()}>{jugar}</button>;
};

BotonJugar.propTypes = {
  jugar: PropTypes.string,
  empezarJuego: PropTypes.func
};

export default BotonJugar;
