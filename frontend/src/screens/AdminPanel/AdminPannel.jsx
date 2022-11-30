import classes from "./adminPannel.module.sass";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function AdminPannel() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setGames(gamesData);
    setLoading(false);
  }, []);

  return (
    <div className={classes.container}>
      {loading ? <p>Cargando...</p> : <Outlet context={[games, setGames]}></Outlet>}
    </div>
  );
}

export default AdminPannel;
