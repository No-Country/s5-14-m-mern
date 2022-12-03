import classes from "./adminPannel.module.sass";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useServices from "../../services/useServices";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";

function AdminPannel() {
  const [games, setGames] = useState([]);
  const [loadingGames, setLoadingGames] = useState(true);
  const [loading, setLoading] = useState(true);
  const gameList = useServices().games;
  const navigate = useNavigate();

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
        navigate("/404");
      }
    }

    gamesLoad();
  }, [loadingGames]);

  return (
    <div className={classes.container}>
      {loading ? <SpinnerLoad /> : <Outlet context={[games, setGames, setLoadingGames]}></Outlet>}
    </div>
  );
}

export default AdminPannel;
