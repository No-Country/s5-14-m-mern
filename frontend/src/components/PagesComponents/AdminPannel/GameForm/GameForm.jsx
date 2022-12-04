import classes from "./gameForm.module.sass";
import { useEffect, useState } from "react";
import useServices from "../../../../services/useServices.jsx";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MessageValidation from "../../ErrorValidation/ErrorValidation.jsx";
import SuccessMessage from "../SuccessMessage/SuccessMessage.jsx";
// icon import
import {
  todopublico,
  plus3,
  plus7,
  mouse,
  gamepad,
  keyboard,
  defaultImage
} from "../../../../../assets";

function GameForm() {
  // constants
  const { games } = useServices();
  const { id } = useParams();
  const [initValues, setInitValues] = useState();
  const [file, setFile] = useState();
  const [thumbnail, setThumbnail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [setLoadingGames] = useOutletContext();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Functions

  // Get the games list
  const getGame = gameId => {
    if (id) {
      console.log(games);
      try {
        const result = games.getById(gameId);
        console.log(result);
        if (result) {
          setInitValues({
            name: result.data.game.name,
            description: result.data.game.description,
            devices: result.data.game.devices || [],
            audiencies: result.data.game.audiencies || "",
            comingSoon: result.data.game.comingSoong || "true",
            folder: result.data.game.folder || ""
          });
          setThumbnail(result.data.game.cover.path);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Event Handler for Preview Image
  const loadImagePreviewHandler = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setThumbnail(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setThumbnail(initValues.imageUrl);
    }
  };

  // Cancel Event Handler
  const cancelHandler = e => {
    e.preventDefault();
    setFile(false);
    setInitValues({
      name: "",
      description: "",
      imageUrl: false,
      devices: [],
      audiencies: "",
      comingSoon: true,
      folder: ""
    });
    navigate("/admin");
  };

  // Validation handler
  const onValidate = values => {
    console.log("validar");
    const errors = {};
    if (!values.name) {
      errors.name = "El nombre del juego es obligatorio";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
      errors.name = "El nombre del juego debe ser de 1 a 40 caracteres";
    }
    if (!values.devices.length) {
      errors.devices = "Debes elegir al menos una opción";
    }
    if (!values.audiencies) {
      errors.devices = "Debes elegir una opción";
    }
    if (!values.comingSoon) {
      if (!values.folder) {
        errors.folder = "La carpeta es obligatoria";
      } else if (!/^[a-zA-ZÀ-ÿ_]{1,40}$/.test(values.folder)) {
        errors.folder =
          "El nombre del juego no puede contener espacios ni signos salvo el guión bajo.";
      }
    }
    if (!values.description) {
      errors.description = "Debes ingresar una descripción del juego";
    } else if (values.description.length > 300) {
      errors.description = "No puedes ingresar mas de 300 caracteres";
    }
    console.log(errors);
    return errors;
  };

  // Event Handler for submit form
  const submitHandler = async (values, { resetForm }) => {
    console.log("submiting form");
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("audiencies", values.audiencies);
    formData.append("devices", values.devices);
    formData.append("folder", values.folder);
    formData.append("comingSoon", values.comingSoon);
    if (file) {
      formData.append("image", file);
    } else {
      if (!id) {
        throw new Error("El archivo es requerido");
      }
    }
    try {
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
        setSuccess(result.data.game);
        console.log(result);
        resetForm();
        setLoadingGames(true);
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
      // Error al enviar formulario pagina de error
    }
  };

  // UseEffects

  // If id changes or exists, load game data
  useEffect(() => {
    if (id) {
      getGame(id);
    } else {
      setInitValues({
        name: "",
        description: "",
        imageUrl: false,
        devices: [],
        audiencies: "",
        comingSoon: true
      });
      setIsLoading(false);
    }
  }, [id]);

  return (
    <div className={classes.container}>
      {isLoading ? (
        <p>Loading</p>
      ) : success ? (
        <SuccessMessage
          gameName={success.name || "Game"}
          coverGame={success.cover || defaultImage}
        />
      ) : (
        <Formik initialValues={initValues} onSubmit={submitHandler} validate={onValidate}>
          {({ values, errors }) => (
            <Form className={classes.form} encType="multipart/form-data">
              <div className={classes.form_container}>
                <div className={classes.form_wrapper}>
                  <div className={classes.form_area}>
                    <div className={classes.form_name}>
                      <p className={classes.section_title}>Nombre del juego</p>
                      <div className={classes.group_form}>
                        <Field type="text" name="name" placeholder="Escribe el nombre del Juego" />
                        <ErrorMessage
                          name="name"
                          component={() => (
                            <MessageValidation className={classes.errors} message={errors.name} />
                          )}
                        />
                      </div>
                    </div>

                    <div className={classes.form_radio}>
                      <p className={classes.section_title}>Características</p>
                      <p>Selecciona una de ellas: </p>
                      <div className={classes.group_form}>
                        <Field type="radio" name="audiencies" id="tp" value="tp" />
                        <label htmlFor="tp" className={classes.radio_label}>
                          <img src={todopublico} alt="imágen de ícono TP" />
                          <span>Apto para todo público</span>
                        </label>
                      </div>
                      <div className={classes.group_form}>
                        <Field type="radio" name="audiencies" id="plus3" value="+3" />
                        <label htmlFor="plus3" className={classes.radio_label}>
                          <img src={plus3} alt="imágen de ícono +3" />
                          <span>Mayores de 3 años</span>
                        </label>
                      </div>
                      <div className={classes.group_form}>
                        <Field type="radio" name="audiencies" value="+7" id="plus7" />
                        <label htmlFor="plus7" className={classes.radio_label}>
                          <img src={plus7} alt="imágen de ícono +7" />
                          <span>Mayores de 7 años</span>
                        </label>
                      </div>
                      <ErrorMessage
                        name="audiencies"
                        component={() => (
                          <MessageValidation
                            className={classes.errors}
                            message={errors.audiencies}
                          />
                        )}
                      />
                    </div>

                    <div className={classes.form_checkbox}>
                      <p>Selecciona todas las que el juego contenga</p>
                      <div className={classes.group_form}>
                        <Field type="checkbox" name="devices" id="keyboard" value="keyboard" />
                        <label htmlFor="keyboard" className={classes.checkbox_label}>
                          <img src={keyboard} alt="imágen de ícono teclado" />
                          <span>Accepta Teclado</span>
                        </label>
                      </div>
                      <div className={classes.group_form}>
                        <Field type="checkbox" name="devices" id="gamepad" value="gamepad" />
                        <label htmlFor="gamepad" className={classes.checkbox_label}>
                          <img src={gamepad} alt="imágen de ícono gamepad" />
                          <span>Accepta Gamepad</span>
                        </label>
                      </div>
                      <div className={classes.group_form}>
                        <Field type="checkbox" name="devices" id="mouse" value="mouse" />
                        <label htmlFor="mouse" className={classes.checkbox_label}>
                          <img src={mouse} alt="imágen de ícono mouse" />
                          <span>Accepta Mouse</span>
                        </label>
                      </div>
                      <ErrorMessage
                        name="devices"
                        component={() => (
                          <MessageValidation className={classes.errors} message={errors.devices} />
                        )}
                      />
                    </div>
                  </div>
                  <div className={classes.form_images}>
                    <p className={classes.section_title}>Imágen</p>
                    <div className={classes.group_form}>
                      <label htmlFor="imageGame">
                        <img
                          src={thumbnail || defaultImage}
                          className={thumbnail ? null : classes.default}
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
                <div className={classes.form_description}>
                  <p className={classes.section_title}>Description</p>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Describe tu juego en un límite de 300 caracteres."
                  />
                  <ErrorMessage
                    name="description"
                    component={() => (
                      <MessageValidation className={classes.errors} message={errors.description} />
                    )}
                  />
                </div>

                <div className={classes.form_next}>
                  <div className={classes.group_form}>
                    <Field type="checkbox" name="comingSoon" id="comingSoon" />
                    <label htmlFor="comingSoon" className={classes.checkbox_label}>
                      Este juego saldrá próximamente
                    </label>
                  </div>
                </div>
                <div
                  className={`${classes.form_folder} ${!values.comingSoon ? classes.open : null}`}>
                  <p className={classes.section_title}>Datos de carga</p>
                  <div className={classes.group_form}>
                    <Field
                      type="text"
                      name="folder"
                      placeholder="Ubicación del juego (carpeta)"
                      disabled={values.comingSoon}
                    />
                    <ErrorMessage
                      name="folder"
                      component={() => (
                        <MessageValidation className={classes.errors} message={errors.folder} />
                      )}
                    />
                  </div>
                </div>

                <div className={classes.form_footer}>
                  <button className={classes.cancel} type="reset" onClick={cancelHandler}>
                    Cancelar
                  </button>
                  <button className={classes.submit} type="submit">
                    Publicar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default GameForm;
