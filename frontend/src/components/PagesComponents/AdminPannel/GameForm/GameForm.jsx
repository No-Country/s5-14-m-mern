import classes from "./gameForm.module.sass";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { default as useServices } from "../../../../services/useServices.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
// icon import
import tp from "../../../../../assets/Icons/tp.svg";
import plus3 from "../../../../../assets/Icons/3more.svg";
import plus7 from "../../../../../assets/Icons/+7.svg";
import mouse from "../../../../../assets/Icons/mouse.svg";
import gamepad from "../../../../../assets/Icons/gamepad.svg";
import keyboard from "../../../../../assets/Icons/keyboard.svg";
import defaultImage from "../../../../../assets/Icons/defaultImage.svg";

function GameForm() {
  const { games } = useServices();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState();
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [setLoadingGames] = useOutletContext();

  useEffect(() => {
    if (isLoading) {
      setForm({
        name: "",
        description: "",
        imageUrl: false,
        devices: [],
        audiencies: "",
        comingSoon: true
      });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getGame = async gameId => {
      try {
        const result = await games.getById(gameId, controller);
        console.log(result);
        if (result) {
          setForm({
            name: result.data.game.name,
            description: result.data.game.description,
            imageUrl: result.data.game.imagePath,
            devices: result.data.game.devices || [],
            audiencies: result.data.game.audiencies || "",
            comingSoon: result.data.game.comingSoong || true
          });
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (id) {
      getGame(id);
    } else {
      setIsLoading(false);
    }
    return () => {
      controller.abort();
    };
  }, [id]);

  // Event Handler for Preview Image
  const loadImagePreviewHandler = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setForm(prev => {
          return {
            ...prev,
            imageUrl: e.target.result
          };
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setForm(prev => {
        return {
          ...prev,
          imageUrl: false
        };
      });
    }
  };

  // HandelChange
  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "comingSoon") {
      value = !e.target.value;
    }
    if (name === "devices") {
      if (!e.target.checked) {
        value = form.devices.filter(el => el !== value);
        console.log(value);
      } else {
        form.devices.push(value);
        value = form.devices;
      }
    }
    setForm(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  // Cancel Event Handler
  const cancelHandler = e => {
    e.preventDefault();
    setFile(false);
    setForm({
      name: "",
      description: "",
      imageUrl: false,
      devices: [],
      audiencies: "",
      comingSoon: true
    });
    navigate("/admin");
  };
  // Event Handler for submit form
  const submitHandler = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("audiencies", form.audiencies);
    formData.append("devices", form.devices);
    if (file) {
      formData.append("image", file);
    } else {
      console.log("no Files");
    }
    formData.append("comingSoon", comingSoon);

    try {
      console.log("intentando cargar");
      let result;
      if (id) {
        result = await games.modify(id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      } else {
        result = await games.create(formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }
      if (result) {
        alert("agregado");
        setLoadingGames(true);
        console.log("navegando a admin");
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <h2>Panel Juego</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <form onSubmit={submitHandler} encType="multipart/form-data">
          <div className={classes.container_form}>
            <div className={classes.wrapper}>
              <div className={classes.area}>
                <div className={classes.group_form_name}>
                  <p className={classes.group_form_section}>Nombre del juego</p>
                  <div className={classes.group_form}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Escribe el nombre del Juego"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={classes.group_form_radio}>
                  <p className={classes.group_form_section}>Características</p>
                  <p>Selecciona una de ellas: </p>
                  <div className={classes.group_form}>
                    <input
                      type="radio"
                      name="audiencies"
                      id="tp"
                      value="tp"
                      onChange={handleChange}
                      checked={form.audiencies === "tp" ? true : false}
                    />
                    <label htmlFor="tp" className={classes.radio_label}>
                      <img src={tp} alt="imágen de ícono TP" />
                      <span>Apto para todo público</span>
                    </label>
                  </div>
                  <div className={classes.group_form}>
                    <input
                      type="radio"
                      name="audiencies"
                      id="plus3"
                      value="+3"
                      onChange={handleChange}
                      checked={form.audiencies === "+3" ? true : false}
                    />
                    <label htmlFor="plus3" className={classes.radio_label}>
                      <img src={plus3} alt="imágen de ícono +3" />
                      <span>Mayores de 3 años</span>
                    </label>
                  </div>
                  <div className={classes.group_form}>
                    <input
                      type="radio"
                      name="audiencies"
                      value="+7"
                      id="plus7"
                      onChange={handleChange}
                      checked={form.audiencies === "+7" ? true : false}
                    />
                    <label htmlFor="plus7" className={classes.radio_label}>
                      <img src={plus7} alt="imágen de ícono +7" />
                      <span>Mayores de 7 años</span>
                    </label>
                  </div>
                </div>

                <div className={classes.group_form_checkbox}>
                  <p>Selecciona todas las que el juego contenga</p>
                  <div className={classes.group_form}>
                    <input
                      type="checkbox"
                      name="devices"
                      id="keyboard"
                      value="keyboard"
                      onChange={handleChange}
                      checked={form.devices.includes("keyboard") ? true : false}
                    />
                    <label htmlFor="keyboard" className={classes.checkbox_label}>
                      <img src={keyboard} alt="imágen de ícono teclado" />
                      <span>Accepta Teclado</span>
                    </label>
                  </div>
                  <div className={classes.group_form}>
                    <input
                      type="checkbox"
                      name="devices"
                      id="gamepad"
                      value="gamepad"
                      onChange={handleChange}
                      checked={form.devices.includes("gamepad") ? true : false}
                    />
                    <label htmlFor="gamepad" className={classes.checkbox_label}>
                      <img src={gamepad} alt="imágen de ícono gamepad" />
                      <span>Accepta Gamepad</span>
                    </label>
                  </div>
                  <div className={classes.group_form}>
                    <input
                      type="checkbox"
                      name="devices"
                      id="mouse"
                      value="mouse"
                      onChange={handleChange}
                      checked={form.devices.includes("mouse") ? true : false}
                    />
                    <label htmlFor="mouse" className={classes.checkbox_label}>
                      <img src={mouse} alt="imágen de ícono mouse" />
                      <span>Accepta Mouse</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={classes.group_form_images}>
                <p className={classes.group_form_section}>Imágen</p>
                <div className={classes.group_form}>
                  <label htmlFor="imageGame">
                    <img
                      src={form.imageUrl ? form.imageUrl : defaultImage}
                      className={form.imageUrl ? null : classes.default}
                      alt="imágen del juego"
                    />
                  </label>
                  <input
                    type="file"
                    onChange={loadImagePreviewHandler}
                    name="imageGame"
                    id="imageGame"
                    accept=".jpeg,.png,.webp,.jpg"
                    hidden
                  />
                </div>
              </div>
            </div>
            <div className={classes.group_form_description}>
              <p className={classes.group_form_section}>Description</p>
              <textarea
                name="description"
                placeholder="Describe tu juego en un límite de 300 caracteres."
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <div className={classes.group_form_next}>
              <div className={classes.group_form}>
                <input
                  type="checkbox"
                  name="comingSoon"
                  id="comingSoon"
                  value={form.comingSoon}
                  onChange={handleChange}
                  checked={form.comingSoon ? true : false}
                />
                <label htmlFor="comingSoon" className={classes.checkbox_label}>
                  Este juego saldrá próximamente
                </label>
              </div>
            </div>

            <div className={classes.footer}>
              <button className={classes.cancel} type="reset" onClick={cancelHandler}>
                Cancelar
              </button>
              <button className={classes.submit} type="submit">
                Publicar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default GameForm;
