import InitalStack from "./mainstack/InitialStack.jsx";
import { useSelector } from "react-redux";

function App() {
  // // Cargar useLogged de LocalStorage
  // const { userLogged } = useSelector(state => state.auth);

  // useEffect(() => {
  //   if (!userLogged) {

  //   }
  // },[]);

  return <InitalStack />;
}

export default App;
