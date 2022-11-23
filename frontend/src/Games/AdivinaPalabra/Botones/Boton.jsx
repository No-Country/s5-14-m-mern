import PropTypes from "prop-types";

const Boton = ({ letra, clickLetras }) => {
  return (
    <button
      style={{
        width: "25px",
        height: "25px",
        backgroundColor: "#F2CF8D",
        color: "#111",
        margin: "5px 5px",
        border: "2px solid #fff"
      }}
      onClick={e => clickLetras(e)}>
      {letra}
    </button>
  );
};

Boton.propTypes = {
  letra: PropTypes.string,
  clickLetras: PropTypes.func
};

export default Boton;
