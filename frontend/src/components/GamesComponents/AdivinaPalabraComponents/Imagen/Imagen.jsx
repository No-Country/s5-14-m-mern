import PropTypes from "prop-types";

const Imagen = ({ src }) => {
  return <img src={`../../../assets/AdivinaPalabraImagen/img${src}.png`} />;
};

Imagen.propTypes = {
  src: PropTypes.number
};

export default Imagen;
