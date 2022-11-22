import PropTypes from "prop-types";

const Boton = ({ letra, clickLetras }) => {
  return (
    <button
      style={{ width: "20px", backgroundColor: "#F2CF8D", color: "#fff", margin: "5px 5px" }}
      onClick={e => clickLetras(e)}
    >
      {letra}
    </button>
  );
};

Boton.propTypes = {
  letra: PropTypes.string,
  clickLetras: PropTypes.func
};

export default Boton;
