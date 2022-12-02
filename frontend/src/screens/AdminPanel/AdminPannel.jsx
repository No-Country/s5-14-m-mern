import classes from "./adminPannel.module.sass";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useServices from "../../services/useServices";

function AdminPannel() {
  const [games, setGames] = useState([]);
  const [loadingGames, setLoadingGames] = useState(true);
  const [loading, setLoading] = useState(true);
  const gameList = useServices().games;

  useEffect(() => {
    async function gamesLoad() {
      try {
        const result = await gameList.getAll();
        setGames(result.data.games);
        setLoading(false);
        setLoadingGames(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setLoadingGames(false);
      }
    }

    gamesLoad();
  }, [loadingGames]);

  return (
    <div className={classes.container}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Outlet context={[games, setGames, setLoadingGames]}></Outlet>
      )}
    </div>
  );
}

export default AdminPannel;
